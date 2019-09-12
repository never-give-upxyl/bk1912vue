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
        state.homechannerinfo[2].path="/todybargin"
        console.log(state.homechannerinfo);
        state.homebannerimg1=info.floors[2].list[0].img;
        state.homebannerimg2=info.floors[3].list[0].img;
        state.homepopularlist=info.floors[47].list[1]
        let arr=[];
        for(var i=5;i<36;i++ ){
            arr.push(info.floors[i].list[0])
        }
        state.homeupdatalist=arr;
        // console.log(state.homeupdatalist);
        // console.log(state.homecarouseimg)
    },
    // homehostMutation(state,info){
    //     console.log(info);
    // }
}
const actions={
    async homegodslist({commit}){
        let datalist
        if(!sessionStorage.getItem("data")){
             datalist=await homelistApi();
            console.log(datalist);
            sessionStorage.setItem("data",JSON.stringify(datalist))
        }else{
             datalist=JSON.parse(sessionStorage.getItem("data"))
        }
          
            commit("homegoodslistMutation",datalist)
    },

}
export default {
    state,
    actions,
    mutations,
    namespaced:true
}