/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import { Toast } from 'mint-ui';

// 请求超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// 请求拦截器
axios.interceptors.request.use(    
    config => {
        const token = '123456789';        
        token && (config.headers.Authorization = token);     
        return config;    
    },    
    error => {        
        return Promise.error(error);    
    }
);

// 响应拦截器
axios.interceptors.response.use(    
    response => {     
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
            resolve(res.data);        
        })        
        .catch(err => {            
            Toast('响应异常');           
            reject(err.data)        
        })    
    });
}