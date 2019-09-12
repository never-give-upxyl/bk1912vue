export default{
    name:"brand",
    path:"/brand",
    meta:{
        flag:true
    },
    //按需加载引入路由
    component:()=>import("@pages/brand")

}