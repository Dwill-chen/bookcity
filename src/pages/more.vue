<template>
    <div class="more">
        <div class="login-in-wrap">
            <img src="../assets/phone.png" alt="">
            <div class="login">
                <main  class="login-in">
                    <form action="#" name="myForm" class="login-form">
                        <section class="input-box" data-msg="4到16位（字母，数字，下划线，减号）">
                            <input class="username" type="text" placeholder="请输入用户名" v-model="username">
                        </section>
                        <section class="input-box" data-msg="4到16位（字母，数字，下划线，减号）">
                            <input class="password" type="password" placeholder="请输入密码" v-model="password">
                        </section>
                        <section class="input-box register hidden" data-msg="邮箱不合法">
                            <input class="email" type="email" placeholder="请输入邮箱">
                        </section>
                        <section class="input-box register hidden" data-msg="电话不合法">
                            <input class="tel" type="tel" placeholder="请输入电话">
                        </section>
                        <div class="info-box clearFix">
                            <a class="fr go-register login" href="javascript:;" @click="register">没有账号？点击注册</a>
                            <a class="fl go-login register hidden" href="javascript:;" @click="goLogin">返回登陆</a>
                        </div>
                        <button class="login-register-btn loginDeng" 
                            type="button" @click="loginSign"
                            v-if="loginReg == true"
                        >
                            登陆
                        </button>
                        <button class="login-register-btn registerZhu" 
                            type="button" @click="loginRegister"
                            v-if="loginReg == false"
                        >
                            注册
                        </button>   
                    </form>
                </main>
            </div>
        </div>
        <div class="login-in-hide">
            <div class="loginHide-head">
                <img src="../assets/head.jpg" alt="">
                <div class="loginHide-head-right">
                    <div class="word-title">
                        <ul>
                            <li>昵称</li>
                            <li>个性签名</li>
                        </ul>
                    </div>
                    <div class="word-content">
                        <ul>
                            <li>gladius</li>
                            <li>学习使我快乐</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="loginHide-content">
                <ul>
                    <li v-for="(item, index) in list" :key="index">
                        <img :src="item.img" alt="">
                        <span>{{item.name}}</span>
                    </li>
                </ul>
                <p class="cancel" @click="cancel">注销登陆</p>
            </div>
        </div>
    </div>
</template>

<script>
//bmob
import '../../static/js/bmob-min.js'
//登陆注册的表单验证
import '../../static/js/login-register.js'
//表单验证的正则
import Validate from '../../static/js/validate.js'
import $ from 'jquery'

export default {
    name: '',
    data() {
        return {
            username: "",
            password: "",
            _isLogin: true,
            loginReg: true,
            list:[
                {
                    img: require("../assets/jinbi.png"),
                    name: "书币"
                },
                {
                    img: require("../assets/shoucang.png"),
                    name: "收藏"
                },
                {
                    img: require("../assets/xiaoxi.png"),
                    name: "消息"
                },
                {
                    img: require("../assets/shudan.png"),
                    name: "书单"
                },
                {
                    img: require("../assets/yijianfankui.png"),
                    name: "意见反馈"
                },
                {
                    img: require("../assets/shezhi.png"),
                    name: "设置"
                },
            ]
        }
    },
    mounted(){
        if(localStorage.Users){
            $(".login-in-wrap").css({display : "none"}) 
            $(".login-in-hide").css({display : "block"})
        }if(localStorage.Login){
            $(".login-in-wrap").css({display : "none"}) 
            $(".login-in-hide").css({display : "block"})
        }
    },
    methods: {
        //点击注册
        register() {
            $('.register').removeClass('hidden')
            $('.login-register-btn').text("注册");
            this._isLogin = false;
            this.loginReg = false;
        },
        //返回登陆
        goLogin() {
            $('.register').addClass('hidden');
            $('.login-register-btn').text("登陆");
            this._isLogin = true;
            this.loginReg = true;
        },
        //登陆
        loginSign() {
            Bmob.initialize("ec28d8ef1fa37db8bf62ce564fe796cd", "b1d091d937a32205aed684d1ef7bf256");
            //判断输入框内容是否和bmob数据一致
            Bmob.User.login(this.username,this.password).then(res => {
                alert("登陆成功，跳转主页")  
                this.$router.push({path:"/"})
                localStorage.Login = JSON.stringify(res)
            }).catch(err => {
                alert("信息为空或不正确")
            });
        },
        //注册
        loginRegister() {
            let isThrough = true;
            let $inputs = $(".input-box input");
            // 表单异常处理
            for (let i = 0, len = $inputs.length; i < len; i++) {
                if (!$inputs.eq(i).val() || $inputs.eq(i).parent().hasClass('error')) {
                    isThrough = false;
                    break;
                }
            }
            if (!isThrough) {
                //注册信息不正确
                alert("信息为空或信息不合法！");
                return;
            }
            if (this._isLogin) {

            } else {
                // 注册Bmob服务
                Bmob.initialize("ec28d8ef1fa37db8bf62ce564fe796cd", "b1d091d937a32205aed684d1ef7bf256");
                // 创建用户对象
                let user = {};
                $inputs.each((index, input) => {
                    let key = $(input).attr('class');
                    let val = $(input).val();
                    user[key] = val;
                });
                // 调用BMOB注册用户
                Bmob.User.register(user).then(res => {
                    //将用户信息存入本地
                    // res.data.forEach(item => item.switch = "on");
                    console.log(res)
                    localStorage.Users = JSON.stringify(res) 
                    //正确的信息注册,跳转到主页
                    alert("注册成功")
                    $(".login-in-wrap").css({display : "none"}) 
                    $(".login-in-hide").css({display : "block"})
                }).catch(err => {
                    console.log(err);
                    alert("注册失败")
                });
            }
        },
        //注销
        cancel(){
            if (window.confirm('确定要退出吗?')) {
                let $input = $("input")
                let len = $input.length
                $(".login-in-wrap").css({display : "block"}) 
                $(".login-in-hide").css({display : "none"})
                //跳转到 我的 页面
                this.$router.replace({path:"/more"})
                //隐藏注册框
                $('.register').addClass('hidden');
                //安全性，将页面的登陆，注册信息清空
                for (let i = 0; i < len; i++) {
                    $("input").eq(i).val("")
                }
            }
            localStorage.removeItem("Users")
            localStorage.removeItem("Login")
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
main [name="myForm"] .input-box {
  width: 70%;
  height: 38px;
  margin: 25px auto;
  position: relative;
}
main [name="myForm"] .input-box::after {
  display: none;
  content: attr(data-msg);
  font-size: 12px;
  line-height: 25px;
  color: red;
  position: absolute;
  top: 100%;
  left: 10px;
}
main [name="myForm"] .error::after {
  display: block;
}
main [name="myForm"] input:not(.remember) {
  width: 100%;
  height: 100%;
  background: #F7F7F7;
  border-radius: 15px;
  box-sizing: border-box;
  padding-left: 8px;
  -webkit-transition: border-color 0.25s linear;
  transition: border-color 0.25s linear;
  font-size: 16px;
}
main [name="myForm"] input:focus {
  background: #E6E6E6;
}
main [name="myForm"] .info-box {
    font-size: 13px;
    a:nth-child(1){
        position: relative;
        right: 15%;
        text-align: right;
    }
    a:nth-child(2){
      position: relative;
      left: 15%;
      text-align: left;
  }
}
main [name="myForm"] .login-register-btn {
  display: block;
  width: 70%;
  height: 38px;
  text-align: center;
  line-height: 38px;
  margin: 0 auto;
  background: #f56c6c;
  color: #fff;
  font-size: 20px;
  letter-spacing: 8px;
  border-radius: 15px;
  cursor: pointer;
  -webkit-transition: .25s linear;
  transition: .25s linear;
}
main [name="myForm"] .login-register-btn:hover {
  background: rgba(245,108,108,0.6);
  opacity: .75;
}
main [name="myForm"] a {
  margin-bottom: 10px;
  color: #333;
}
main [name="myForm"] a:hover {
  text-decoration: underline;
}
main [name="myForm"] .hidden {
  display: none !important;
}
.more{
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: white;
    .login-in-wrap{
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        padding-top: 20px;
        img{
            width: 64px;
        }
        .login{
            position: relative;
            width: 100%;
            height: calc(100% - 66px);
            overflow: auto;
            .login-in{
                position: relative;
                width: 100%;
                .login-form{
                    position: relative;
                    width: 100%;
                }
            }
        }
    }
    .login-in-hide{
        display: none;
        position: relative;
        width: 100%;
        height: 100%;
        .loginHide-head{
            position: relative;
            width: 100%;
            height: 120px;
            box-sizing: border-box;
            border: 1px solid #ebeef5;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
            img{
                position: relative;
                width: 80px;
                border-radius: 50%;
                right: calc(50% - 60px);
                top: 20px;
            }
            .loginHide-head-right{
                position: absolute;
                width: 65%;
                height: 120px;
                top: 0;
                right: 0;
                .word-title{
                    position: relative;
                    width: 30%;
                    height: 120px;
                    text-align: left;
                    font-size: 14px;
                    box-sizing: border-box;
                    padding-top: 40px;
                    line-height: 30px;
                }
                .word-content{
                    position: absolute;
                    width: 70%;
                    height: 120px;
                    top: 0;
                    right: 0;
                    text-align: left;
                    font-size: 14px;
                    box-sizing: border-box;
                    padding-top: 40px;
                    line-height: 30px;
                    color: gray;
                }
            }
        }
        .loginHide-content{
            position: relative;
            width: 100%;
            height: calc(100% - 120px);
            overflow: scroll;
            text-align: left;
            background: #f1f1f6;
            ul{
                padding-top: 30px;
                li{
                    padding-left: 5%;
                    height: 40px;
                    line-height: 40px;
                    box-sizing: border-box;
                    border-bottom: 1px solid #F1F1F1;
                    background: #fff;
                    img{
                        width: 20px;
                    }
                }
                li:nth-child(2){
                    border-top: 1px solid #F1F1F1;
                }
                li:nth-child(1){
                    border-top: 1px solid #F1F1F1;
                    margin-bottom: 30px;
                }
                li:last-child{
                    border-top: 1px solid #F1F1F1;
                    margin-top: 30px;
                }
            }
            .cancel{
                position: fixed;
                bottom: 66px;
                width: 100%;
                height: 40px;
                line-height: 40px;
                box-sizing: border-box;
                border-bottom: 1px solid #F1F1F1;
                border-top: 1px solid #F1F1F1;
                background: #f56c6c;
                text-align: center;
                color: white;
            }
        }
    }
}
</style>
