import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 1 //这是初始值
  },
  mutations: {
    add(state) {
      state.count++; //直接改变了state中的值，而并不是返回了一个新的state
    },
    reduce(state){
      state.count--;
    }
  },
  actions: {

  }
})
