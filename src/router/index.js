import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./home";
import Brand from "./brand";
import Sort from "./sort";
import Shoppingbag from "./shoppingbag";
import Mine from "./mine";
import Europe from "./europe";
import Europeshop from "./europeshop";
import Oldgoods from "./oldgoods"
Vue.use(VueRouter);

const router =new VueRouter({
    mode:"hash",
    routes:[
        {path:'/',redirect:"/home"},
        Home,
        Brand,
        Sort,
        Shoppingbag,
        Mine,
        Europe,
        Europeshop,
        Oldgoods
    ]
})
export default router;