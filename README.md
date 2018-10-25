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
（1）增加flexible.js于/public/js/位置下，/public/index.html中引入该文件；
（2）配置编译器的自动转换功能。（VScode可使用cssrem插件）
#### 3、在App.vue 加入reset.css文件内容
