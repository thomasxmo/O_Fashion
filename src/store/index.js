// import { createStore } from "vuex";


// export default createStore({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {},
// });


import Vuex from "vuex";


export default new Vuex.Store({
  state: {
    order:{
      numberOfOrder: 1,
    }
  },
  getters: {},
  mutations: {
    changeNumberOfOrder (state, payload) {
      state.order.numberOfOrder = payload;
    }
  },
  actions: {}
});

