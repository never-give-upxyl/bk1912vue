import Vue from "vue"
import Vuex from "vuex"
import more from "./more"
import home from "./home"
import todybargin from "./todybargin"
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        flag:true
    },
    mutations:{
        clichandetoggleLogin(state){
            state.flag=!state.flag;
        }
    },
    modules:{
        home,
        more,
        todybargin,
    }
})

export default store;