<script setup>

</script>

<template>
  <div>
    <header>
      <h1>Экзамен</h1>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

header {
  width: 100%;
  height: 80px;
  background-color: #333;
  padding-top: 20px;
}

header h1 {
  text-align: center;
  font-size: 36px;
  color: #fff;
  text-transform: uppercase;
}

footer {
  margin-top: 30px;
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
}

</style>