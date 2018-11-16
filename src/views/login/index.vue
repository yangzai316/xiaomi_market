<template>
<div class="loginbox">
    <i class="iconfont icon-xiaomi"></i>
    <p class="title">小米账号登陆</p>
    
    <div class="inputbox">
        <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="username" @blur="matchValue" autofocus>
    </div>
    <div class="inputbox">
        <input :type="openEye?'text':'password'" placeholder="密码" v-model="password" @blur="matchValue">
        <i class="iconfont icon-yanjing" :class="{openEye:openEye}" @click="open"></i>
    </div>
    <p class="warn"><span>{{warnTxt}}</span></p>
    <p class="btn" @click="goLogin">登录</p>
    <p class="btn toreg">注册</p> 
</div>
</template>

<script>
import { loginData } from '@/server/login.js';
import { mapMutations } from 'vuex';
export default {
    name:"login",
    data(){
        return{
            openEye:false,
            username:'123',
            password:'123',
            warnTxt:''
        }
    },
    mounted(){ 
    },
    methods:{
        ...mapMutations('auth',[
            'setLogined'
        ]),
        open(){
            this.openEye = !this.openEye;
        },
        matchValue(){
            if(!this.username||this.username==''){
                this.warnTxt = '请输入账号';
            }else if(!this.password||this.password==''){
                this.warnTxt = '请输入密码';
            }else{
                this.warnTxt = '';
            }; 
        },
        async goLogin(){
            if(this.warnTxt!='') return;

            const _data = await loginData({
                username:this.username,
                password:this.password
            });
            if(_data.result){
                this.$toast('登陆成功');
                this.setLogined(_data.user);
                this.$cookies.set("user_session",_data.user)
                const _backUrl = this.$route.query.backUrl?this.$route.query.backUrl:'/i';
                this.$router.push(`${_backUrl}`);
            }else{
                this.$toast(_data.message);
            };
        }
    }
}; 
</script>

<style lang="less" scoped>
.loginbox{
    .icon-xiaomi{
        display: block;
        width: 1.28rem;
        height: 1.28rem;
        margin: .8rem auto;
        background-color: #ff6700;
        font-size: .8rem;
        text-align: center;
        line-height: 1.28rem;
        color: #fff;
        border-radius: 2px;
    }
    .title{
        text-align: center;
        font-size: .426667rem;
        margin-bottom: .533333rem;
    }
    input{
        display: block;
        margin:0 auto;
        outline: none;
        width: 85%;
        max-width: 440px;
        height: 1.386667rem;
        max-height: 1.76rem;
        border-bottom: 1px solid #d3d3d3;
        font-size: .426667rem;
    }
    .inputbox{
        width: 85%;
        margin:0 auto;
        position: relative;
        input{
            width:100%;
        }
        .icon-yanjing{
            position: absolute;
            right: 0;    
            top: .4rem;
            font-size: .586667rem;
        }
        .openEye{
            color: #ff6700;
        }
    }
    .btn{
        width: 85%;
        margin:.8rem auto;
        background-color: #ff6700;
        color: #fff;
        text-align: center;
        height: 1.173333rem;
        line-height: 1.173333rem;
        font-size: .426667rem;
        border-radius: 4px;

    } 
    .toreg{
        width: 85%;
        background: #fff;
        margin-top: 10px;
        border: 1px solid #d3d3d3;
        color: #000;
    }
    .warn{
        position: relative;
        span{
            position: absolute; 
            color:red; 
            left: 7.5%;
            top: .213333rem;
        }
    }  
}
</style>