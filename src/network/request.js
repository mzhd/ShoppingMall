import axios from 'axios'

export function request(config){
    //1、创建实例
    const instance = axios.create({
        baseURL:"http://127.0.0.1:9090",
        timeout:5000
    })
    //2、拦截器
    instance.interceptors.request.use(request=>{
        //1、比如config中的一些信息不符合服务器的要求

        //2、比如每次发送网络请求时，希望在界面上显示一个请求的图标

        //3、某些网络请求（比如登录（token）），必须携带一些特殊的信息
      return request
    },error => {

    })
    instance.interceptors.response.use(response=>{
        return response.data
    },error => {

    })

    //3、请求网络
    return instance(config)

}

