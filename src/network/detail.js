import {request} from "@/network/request";

export function getGoodsDetail(id){
  return request({
    url:"/home/detail",
    params:{
      id
    }
  })
}
export class Goods{
  constructor(title,desc,price,oldPrice,lowPrice,services,discount,columns) {
    this.title=title
    this.desc=desc
    this.price=price
    this.oldPrice=oldPrice
    this.lowPrice=lowPrice
    this.services=services
    console.log(this.services);
    this.discount=discount
    this.columns=columns
  }
}
