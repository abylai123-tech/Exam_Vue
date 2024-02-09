<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const results = ref([]);
const loading = ref(true); 
const points = ref(0);
const question = ref(0);
const selectedAnswer = ref(null);
onMounted(() => {
  fetch(`https://opentdb.com/api.php?amount=10&category=${route.params.id}`)
    .then(response => response.json())
    .then(data => {
      results.value = data.results.map(question => {
        question.incorrect_answers.push(question.correct_answer);
        return question;
      });
    })
    .finally(() => {
      loading.value = false;
      console.log("Вмонтирование произошло успешно!");
      console.log(results.value);
      console.log(loading.value);
      
    });
});

function nextQuestion() {
  const correctAnswer = results.value[question.value].correct_answer; 

  if (selectedAnswer.value === correctAnswer) { 
    points.value++;
  }

  if (question.value < results.value.length - 1) {
    question.value++;
    selectedAnswer.value = null; 
  } else {
    router.push(`/End/${points.value}`);
  }
}
</script>

<template>
  <div id="quiz">
    <div v-if="!loading">
      <div class="main">
        <h1>Викторина по теме: {{ results[0].category }}</h1>
        <div class="img"><img src="https://1gai.ru/uploads/posts/2020-12/1608561923_shutterstock_1384209428.png" width="800px"> </div> 
        <div class="te">Вопрос №{{ question + 1 }}</div>
        <div>
          {{ results[question].question }}
          <div v-for="(answer, index) in results[question].incorrect_answers" :key="index">
            <input type="radio" :value="answer" v-model="selectedAnswer" :id="'answer-' + index">
            <label :for="'answer-' + index">{{ answer }}</label>
          </div>

          <button class="but1" v-if="!isLastQuestion" @click="nextQuestion">Далее</button>
          <router-link v-else :to="'/End/' + points">Закончить</router-link>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Загрузка...</p>
    </div>
  </div>
</template>

<style>
.main{
    height: 700px;
    width: 800px;
    border-radius: 30px;
    padding: 20px;
    font-size: 12pt;
    background-color: rgba(101, 101, 101, 0.542);
    margin: auto;
    margin-top: 90px;
}
#text{
    font-size: 13pt;
}

.but1{
    height: 40px;
    font-size: 13pt;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    border: solid rgb(115, 113, 113) 1px;
}
.img{
    width: 800px;
    height: 300px;
    border-radius: 10px;
    overflow: hidden;
}
</style>