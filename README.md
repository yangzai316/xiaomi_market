# xiaomi_market
#### 1、参照官网下载vue-cli@3，并创建项目主要骨架
```javascript
npm install -g @vue/cli
vue create xiaomi_market //可自定义配置自己的框架需求
cd xiaomi_market
npm i
npm run serve //开启本地项目
```
#### 2、引入rem布局的必要文件
（1）增加flexible.js于/public/js/位置下，/public/index.html中引入该文件；<br>
（2）配置编译器的自动转换功能，（VScode可使用cssrem插件）。
#### 3、引入reset.css+字体图标库
（1）在App.vue 加入reset.css文件内容；<br>
（2）/public/index.html中引入字体图标库。
#### 4、配置代理处理跨域
（1）在根目录增加文件：vue.config.js
（2）添加相应代码，可参考[官方文档](https://cli.vuejs.org/zh/config/#devserver)
#### 5、封装接口请求函数
（1）添加axios依赖；
（2）在根目录添加文件夹server/；<br>
（3）在server/文件内添加api.js、index.js；<br>
（4）api.js依赖axios封装请求和相应的拦截器，并对GET、POST请求进行进一步封装返回promise；<br>
（5）index.js就对应的接口进行统一管理，主要引入api.js的方法，返回结果，需要引入的接口做相应的引入，即可。

