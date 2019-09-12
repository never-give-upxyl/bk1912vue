export default{
    name:"home",
    path:"/home",
    meta:{
        flag:true
    },
    //按需加载引入路由
    component:()=>import("@pages/home"),

}