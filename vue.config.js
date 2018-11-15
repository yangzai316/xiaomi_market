const dev_config = require('./config/dev.js');
const test_config = require('./config/test.js');
const prodctioin_config = require('./config/production.js');

const env = process.env.NODE_ENV;
let config = null;
if(env=='production'){
    config = prodctioin_config;
}else if(env=='test'){
    config = test_config;
}else{
    config = dev_config;
};
module.exports = {
    baseUrl:'./',
    devServer: {// 设置代理
        port:'8888',
        proxy: {
            "/v1": {
                target: 'http://39.108.81.245:8887/', // 目标域名
                ws: false, // 是否启用websockets
                changOrigin: true, //开启代理
                pathRewrite: {
                    "/v1": "/"
                }
            }
        }
    }
};

 