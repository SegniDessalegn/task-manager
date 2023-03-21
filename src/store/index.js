import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [{name: "Study", details: "study DSA"},{name: "Study", details: "study DSA"}],
    forms: {}
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
