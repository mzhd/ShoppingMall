import { createStore } from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
const state={
  products:[]
}
export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
  }
})
