import {getgoods} from "@api/more/index";

const state={
    goodslist:[],
}

const mutations={
    handleMutationGetgoods(state,params){
        for(var i=0;i<params.length;i++){
            state.goodslist.push(params[i])
        }
        console.log(state.goodslist)
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
        let chooseGoods=[];
        for(var i=0;i<state.goodslist.length;i++){
            if(state.goodslist[i].brandEnName==params){
                chooseGoods.push(state.goodslist[i]);
            }
        }
        state.goodslist=chooseGoods;
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
    }
}
const actions = {
    async handleGetgoods({commit}){
        let data = await getgoods();
        commit("handleMutationGetgoods",data.productList)
    },
    chooseGoods({commit},name){
        commit("handleMutationchooseGoods",name)
    },
    chooseOnetypeGoods({commit},name){
        commit("MutationchooseOnetypeGoods",name)
    },
    sortArr({commit}){
        commit("MutationSortArr")
    },
    detailsGoods({commit}){
        
    }
}

export default {
    state,
    actions,
    mutations,
    namespaced:true
}