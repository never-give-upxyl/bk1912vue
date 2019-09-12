import Vue from "vue"
import Vuex from "vuex"
import more from "./more"
// <<<<<<< HEAD
import home from "./home"
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
        more
    }
})
// =======

// Vue.use(Vuex)
// const store=new Vuex.Store({

//     modules:{
//         more
// // >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
//     }
// })
export default store;