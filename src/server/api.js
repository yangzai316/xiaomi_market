/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import { Toast } from 'mint-ui';
import router from '@/router';
import store from '@/store/index' 

// 请求超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器
axios.interceptors.request.use(    
    config => {
        store.commit('auth/showLoad',true);
        return config;    
    },    
    error => {        
        return Promise.error(error);    
    }
);

// 响应拦截器
axios.interceptors.response.use(    
    response => {
        if (response.data.code == 5001) {//未登录
            router.push({
                path: '/login',
                query: {backUrl: router.history.current.fullPath}
            });
            store.commit('auth/setLogined',false);
        }; 
        store.commit('auth/showLoad',false);   
        return Promise.resolve(response); 
    },
    error => {        
        if (error.response.status) {             
            return Promise.reject(error.response);        
        }       
    }
);
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        })        
        .then(res => {
            if(!res.data.result){
                Toast(res.data.message||'请求异常...');
            };
            resolve(res.data);      
        })        
        .catch(err => {              
            Toast('响应异常');       
            reject(err.data)        
        })    
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {    
    return new Promise((resolve, reject) => {         
        axios.post(url, QS.stringify(params))        
        .then(res => {
            if(res.data.result&&!res.data.result){
                Toast(res.data.message||'响应异常');
            };
            resolve(res.data);     
        })        
        .catch(err => {            
            Toast('响应异常');           
            reject(err.data)        
        })    
    });
}