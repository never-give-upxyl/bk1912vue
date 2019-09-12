import Vue from "vue"
import Vuex from "vuex"
import old from "./old"
Vue.use(Vuex)
const store=new Vuex.Store({

    modules:{
        old,
    }
})
export default store;