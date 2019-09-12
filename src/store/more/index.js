import {getgoods} from "@api/more/index";

const state={
    goodslist:JSON.parse(sessionStorage.getItem("goodslist"))||[],
    detailGoodsList:[],
    chooseGoods:JSON.parse(sessionStorage.getItem("chooseGoods"))||[],
}

const mutations={
    handleMutationGetgoods(state,params){
        if(JSON.parse(sessionStorage.getItem("goodslist"))) {
            state.goodslist=JSON.parse(sessionStorage.getItem("goodslist"))
            return;
        }
        state.goodslist=[];
        for(var i=0;i<params.length;i++){
            state.goodslist.push(params[i])
        }
        console.log(state.goodslist)
        sessionStorage.setItem("goodslist",JSON.stringify(state.goodslist))
    },
    handleMutationchooseGoods(state,params){
        let chooseGoods=[];
        for(var i=0;i<state.goodslist.length;i++){
            if(state.goodslist[i].brandEnName==params){
                chooseGoods.push(state.goodslist[i]);
            }
        }
        state.goodslist=chooseGoods;
    },
    MutationchooseOnetypeGoods(state,params){
        state.chooseGoods=[];
        for(var i=0;i<state.goodslist.length;i++){
            if(state.goodslist[i].brandEnName==params){
                state.chooseGoods.push(state.goodslist[i]);
            }
        }
        sessionStorage.setItem("chooseGoods",JSON.stringify(state.chooseGoods))
    },
    MutationSortArr(state){
        var newlist=[];
        for(var i=0;i<state.goodslist.length;i++){
            console.log(i)
            var num =  Math.floor(Math.random()*(state.goodslist.length-1)) ;
            newlist.push(state.goodslist[num]);
            // state.goodslist.splice(num,1)
        }
        state.goodslist=newlist;
    },
    MutationGetDetailsGoods(state,id){
        for(var i=0;i<state.goodslist.length;i++){
            if(state.goodslist[i].id==id){
                state.detailGoodsList.push(state.goodslist[i])
            }
        }
    }
}
const actions = {
    async handleGetgoods({commit}){
        let data = await getgoods();
        commit("handleMutationGetgoods",data.productList)
    },
    choosegoods({commit},name){
        commit("handleMutationchooseGoods",name)
    },
    chooseOnetypeGoods({commit},name){
        commit("MutationchooseOnetypeGoods",name)
    },
    sortArr({commit}){
        commit("MutationSortArr")
    },
    getDetailsGoods({commit},id){
        commit("MutationGetDetailsGoods",id)
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}