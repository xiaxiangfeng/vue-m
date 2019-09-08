import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  actions,
  getters,
  modules: {
    home
  }
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './modules/home'
  ], () => {
    store.hotUpdate({
      getters: require('./getters').default,
      actions: require('./actions').default,
      modules: {
        home: require('./modules/home').default
      }
    })
  })
}

export default store
