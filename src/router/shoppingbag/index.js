export default{
    name:"shoppingbag",
    path:"/shoppingbag",
    //按需加载引入路由
    component:()=>import("@pages/shoppingbag"),
    meta:{
        flag:false
    },
}