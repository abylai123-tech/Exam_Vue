<script setup>
const cards = [
  { id: 1, name: "Спорт", category: '21'},
  { id: 2, name: "География", category: '22'},
  { id: 3, name: "История", category: '23' },
  { id: 4, name: "Знаменит", category: '26' },
  { id: 5, name: "Животные", category: '27' },
  { id: 6, name: "Транспорт", category: '28' },
];
</script>

<template>
  <div>
    <p>
      Выберите любую тему для экзамена
    </p>
    <div id="topics">
      <router-link class="link" v-for="elem in cards" :to="elem.category">
        <div class="topic"> 
          {{elem.name}}
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.topic{
  width: 150px;
  height: 200px;
  padding: 20px;
  background-color: rgb(116, 116, 116);
  color: aliceblue;
  margin: 10px;
  text-align: center;
  font-size: 25pt;
}
#topics{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>