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
    }
  },
  actions: {
  },
  modules: {
  }
})
