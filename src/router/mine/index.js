export default{
    name:"mine",
    path:"/mine",
    //按需加载引入路由
    component:()=>import("@pages/mine"),
    meta:{
        flag:false
    },

}