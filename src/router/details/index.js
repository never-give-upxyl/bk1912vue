export default{
    name:"details",
    path:"details",
    //按需加载引入路由
    meta:{
        flag:false
    },
    component:()=>import("@components/details")
}