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
    devServer: {// 设置代理
        port:config.port,
        proxy: {
            "/v1": {
                target: config.proxy_v1, // 目标域名
                ws: false, // 是否启用websockets
                changOrigin: true, //开启代理
                pathRewrite: {
                    "/v1": "/"
                }
            }
        }
    }
};

 