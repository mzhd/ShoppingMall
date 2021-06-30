import {ADD_CART, ADD_COUNT} from "@/store/mutations-type";

export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      const oldProduct=context.state.products.find((item)=>{
        return item.id===payload.id
      })
      if(oldProduct){
        context.commit(ADD_COUNT,oldProduct)
        resolve('商品数量加一')
      }else{
        payload.count=1
        context.commit(ADD_CART,payload)
        resolve('添加商品')
      }
    })
  }
}
