import { createStore } from 'vuex'
interface State{
  products:any[]
}
const state:State={
  products:[]
}
export default createStore({
  state: state,
  mutations: {
    addCart(state,payload:any){
      const oldProduct=state.products.find((item)=>{
        return item.id==payload.id
      })
      if(oldProduct!=null){
        oldProduct.count+=1
      }else{
        payload.count+=1
        state.products.push(payload)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
