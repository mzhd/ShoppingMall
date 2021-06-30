import {ADD_CART, ADD_COUNT} from "./mutations-type"

export default {
  [ADD_COUNT](state,payload){
    payload.count++
  },
  [ADD_CART](state,payload){
    payload.checked=true
    state.products.push(payload)
  }
}
