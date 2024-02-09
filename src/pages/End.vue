<script setup>
  import { useRoute } from "vue-router";
  const route = useRoute();
</script>

<template>
  <div>
    <p>Конец</p>
    <p>Результаты: {{ route.params.points }}/10</p>
  </div>
</template>
