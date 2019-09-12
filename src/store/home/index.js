import {homelistApi} from "@api/home";
const state={
    homecarouseimg:[],
    homechannerinfo:[],
    homebannerimg1:"",
    homebannerimg2:"",
    homepopularlist:[],
    homeupdatalist:[],

}
const mutations={
    homegoodslistMutation(state,info){
        state.homecarouseimg=info.floors[0].list;
        state.homechannerinfo=info.floors[1].list;
        state.homebannerimg1=info.floors[2].list[0].img;
        state.homebannerimg2=info.floors[3].list[0].img;
        state.homepopularlist=info.floors[37].list[1]
        let arr=[];
        for(var i=5;i<36;i++ ){
            arr.push(info.floors[i].list[0])
        }
        state.homeupdatalist=arr;
        console.log(state.homeupdatalist);
        console.log(state.homecarouseimg)
    },
    // homehostMutation(state,info){
    //     console.log(info);
    // }
}
const actions={
    async homegodslist({commit}){
            let data=await homelistApi();
            console.log(data);
            commit("homegoodslistMutation",data)
    },

}
export default {
    state,
    actions,
    mutations,
    namespaced:true
}