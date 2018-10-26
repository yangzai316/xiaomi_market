module.exports = {
    devServer: {// 设置代理
        proxy: {
            "/v1": {
                target: "http://192.168.8.48:3333/", // 目标域名
                ws: false, // 是否启用websockets
                changOrigin: true, //开启代理
                pathRewrite: {
                    "/v1": "/"
                }
            }
        }
    }
};

 