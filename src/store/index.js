import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [{name: "Study", details: "study DSA"}],
  },
  getters: {
  },
  mutations: {
    UpdateTask(state, task){
      state.tasks.push(task)
    },
    deleteTask(state, task){
      state.tasks = state.tasks.filter(t=>t.name != task.name)
    }
  },
  actions: {
  },
  modules: {
  }
})
