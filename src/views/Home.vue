<template lang="eng">
  <div class="container">
    <h1>MY TASKS</h1>
    <div class="tasks" v-for="task in $store.state.tasks">
    <div class = "task">
      <div class = "task-name">{{ task.name }}</div>
    <div class = "task-details">{{ task.details}}</div>
  </div>
  </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tasks {
  background-color: rgba(8, 150, 3, 0.192);
  margin-bottom: 5px;
  width: 75vw;
  display: flex;
  justify-content: start;
}
.task{
  margin: 10px 50px 10px 50px;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}
.task-name{
  font-weight: bold;
  margin: 10px 0px 10px 0px;
}
</style>
