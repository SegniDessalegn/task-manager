<template lang="eng">
  <div class="container">
    <h1>My Tasks</h1>
    <div class="tasks" v-for="task in $store.state.tasks">
    <div class="task">
      <div class="task-name">{{ task.name }}</div>
      <div class="task-details">{{ task.details}}</div>
    </div>
    <img @click="deleteTask(task)" src="@/assets/delete.png" alt="delete" class="close"/>
  </div>
  <router-link :to = "{name: 'add-Task'}">Add Tasks</router-link>
  </div>
</template>
<script>
export default {
  methods: {
    deleteTask(task){
      this.$store.commit("deleteTask", task)
    }
  }
};
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.container a {
  background-color: rgba(15, 85, 25, 0.26);
  padding: 10px;
  width: 150px;
}

.tasks {
  background-color: rgba(8, 150, 3, 0.192);
  margin-bottom: 5px;
  width: 75vw;
  display: flex;
  justify-content: start;
  align-items: center;
}

.task {
  margin: 10px 50px 10px 50px;
  width: 75vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}

.task-name {
  font-weight: bold;
  margin: 10px 0px 10px 0px;
}

.close{
  margin: 10px;
  width: 25px;
  height: 25px;
  display: inline-block;
  cursor: pointer;
}
</style>
