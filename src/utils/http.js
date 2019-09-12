import axios from "axios";
// <<<<<<< HEAD
// import loading from "@lib/loading/index.js"
// =======

// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
const http = axios.create({
    timeout:1000,
    withCredentials:true
})

//拦截器
http.interceptors.request.use(config=>{
    if(config.method == "get"){
        config.params = {...config.data};
    }else if(config.method == "post"){
// <<<<<<< HEAD
        //config.headers["content-type"] = "application/x-www-form-urlencoded"
    }
    // loading.open();
// =======
    //     config.headers["content-type"] = "application/x-www-form-urlencoded"
    // }

// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
    return config;
},err=>{
    return Promise.reject(err);
})


http.interceptors.response.use(res=>{
    if(res.status == 200){
// <<<<<<< HEAD
        // loading.close();
        return res.data;
    }
})

// =======
//         return res.data;
//     }
// })
// >>>>>>> c9cfe97fe1280af3cb7b3c4af0973151513e30e2
export default http;
