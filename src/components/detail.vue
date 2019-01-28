<template>
    <transition name="slide-fade">
        <div class="detail" v-show="DisVisible">
            <div class="detail-close">
                <span>图书详情</span>
                <img src="../assets/close.png" alt="" @click="DisVisible = false,sendShow()">
                <div class="detail-top">
                    <img :src="msg.cover" alt="">
                    <div class="detail-top-wrap">
                        <ul class="detail-top-des">
                            <li>作者</li>
                            <li>页数</li>
                            <li>书号</li>
                            <li>出版日期</li>
                            <li>售价</li>
                        </ul>
                        <ul class="detail-top-content">
                            <li>{{msg.author}}</li>
                            <li>{{msg.page}}</li>
                            <li>{{msg.bookNum}}</li>
                            <li>{{msg.date}}</li>
                            <li>￥{{msg.price}}</li>
                        </ul>
                    </div>
                </div>
                <div class="detail-mid">
                    <p>{{msg.name}}</p>
                    <div class="detail-top-btn">
                        <div class="detail-top-btnHide">
                            <p>成功加入购物车</p>
                        </div>
                        <button class="detail-toShopping detail-toBtn" @click="ToSave(),ToShow()">加入购物车</button>
                        <button class="detail-toBuy detail-toBtn" @click="ToBuy">立即购买</button>
                    </div>
                </div>
                <div class="wrapper" ref="wrapper">
                    <div class="detail-bottom content">
                        <ul class="menu-list">
                            <li>
                                <form>
                                    <fieldset>
                                        <legend>内容概要</legend>
                                        <span>{{msg.info2}}</span>
                                    </fieldset>
                                </form>
                            </li>
                            <li>
                                <form>
                                    <fieldset>
                                        <legend>内容概要</legend>
                                        <span>{{msg.info1}}</span>
                                    </fieldset>
                                </form>
                            </li>
                            <li>
                                <form>
                                    <fieldset>
                                        <legend>作者简介</legend>
                                        <span>{{msg.authorInfo}}</span>
                                    </fieldset>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'detail',
    data() {
        return {
            DisVisible:false,
            shopping: [],//定义一个空数组，存放localStorage的push数据
        }
    },
    props:{
        //接收父组件点击图片时，对应的数据
        msg: {
            require: true,
        }
    },
    methods: {
        //向父组件传送DisVisible，形成开关联动
        sendShow(){
            this.$emit("DisVisible",this.DisVisible)
            //console.log(this.DisVisible)
        },
        ToBuy() {
            //点击立即购买，跳转到购物车的路由并生成相应信息
            this.$router.push({path:"/game"})
        },
        ToShow() {
            let ToShow = document.getElementsByClassName("detail-top-btnHide")[0]
            ToShow.style.opacity = 1
            setTimeout(function(){
                ToShow.style.opacity = 0
            },800);
        },
        ToSave() {
            //判断是否有本地数据
            //有就根据本地数据初始化
            //没有就初始化空数组
            if(localStorage.shopping) {
                this.shopping = JSON.parse(localStorage.shopping)
            }else{
                this.shopping = [];
            }
            let shoppingData = this.msg
            // console.log(this.msg)
            // console.log(shoppingData)
            // 重复商品处理,并存入本地
            //创建一个数组，存放本地拿到的数据
            let localArr = []
            if(localStorage.shopping){
                //本地存在数据，判断是否重复再存入,通过名字判断（也可以判断其他条件）
                localArr = JSON.parse(localStorage.shopping);
                let flag = false;
                for (let i = 0; i < localArr.length; i++) {
                    // console.log(typeof(localArr))
                    let Mnum = localArr[i].num
                    //console.log(Mnum)
                    //若果存在重复
                    if(this.msg.name == localArr[i].name) {
                        localArr[i].num ++
                        //console.log(localArr[i])
                        // console.log(localArr[i].num)
                        //找到重复的，将数量修改，然后再存入本地，并跳出
                        localStorage.shopping = JSON.stringify(localArr)
                        flag = true;
                        break;
                    }    
                }
                if(!flag){
                    this.shopping.push(shoppingData)
                    localStorage.shopping = JSON.stringify(this.shopping)
                }  
            }
            else{
                //本地没有数据,直接将数据存入本地
                this.shopping.push(shoppingData)
                localStorage.shopping = JSON.stringify(this.shopping)
            }
        }
    },
    components: {},
    updated() {
        //获取detail-mid和top的高度，并给detail-bottom一个位移等于其高度
        let ShoppingH = document.getElementsByClassName("detail-toShopping")[0].offsetHeight
        let ShoppingW = document.getElementsByClassName("detail-toShopping")[0].offsetWidth
        let DetailH = document.getElementsByClassName("detail")[0].offsetHeight;
        let CloseH = document.getElementsByClassName("detail-close")[0].offsetHeight
        let TopH  = document.getElementsByClassName("detail-top")[0].offsetHeight;
        let MidH  = document.getElementsByClassName("detail-mid")[0].offsetHeight;
        let BottomH = document.getElementsByClassName("detail-bottom")[0];
        let BtnHideH = document.getElementsByClassName("detail-top-btnHide")[0];
        let AllH = TopH + MidH + 20
        let Hei = DetailH - CloseH - TopH - MidH
        //console.log(ShoppingW)
        // console.log(CloseH)
        BottomH.style.height = Hei + "px"
        BtnHideH.style.top = - ShoppingH - 15 + "px"
        BtnHideH.style.width = ShoppingW + "px"
    }
}
</script>

<style scoped lang="less">
    .content{
        height: auto;
        overflow: scroll;
        -webkit-overflow-scrolling : touch;
    }
    .detail{
        position: relative;
        top: 2%;
        width: 96%;
        margin: 0 auto;
        height: 96%;
        box-sizing: border-box;
        background: white;
        border: 1px solid black;
        overflow: hidden;
        .detail-close{
            width: 100%;
            height: 30px;
            box-sizing: border-box;
            border-bottom: 1px solid lightgrey;
            span{
                font-size: 14px;
                font-weight: bolder;
                line-height: 30px;
            }
            img{
                position: relative;
                float: right;
                right: 5px;
                top:20%;
                height: 60%;
            }
            .detail-top{
                position: relative;
                width: 100%;
                height: auto;
                padding: 10px 0;
                img{
                    float: left;
                    position: relative;
                    width: 30%;
                    left: 2%;
                }
                .detail-top-wrap{
                    float: right;
                    position: relative;
                    width: 64%;
                    right: 2%;
                    height: auto;
                    text-align: left;
                    padding: 5px 0;
                    .detail-top-des{
                        display: inline-block;
                        position: relative;
                        width: 30%;
                        font-size: 12px;
                        line-height: 22px;
                        color: rgb(134, 134, 134);
                    }
                    .detail-top-content{
                        display: inline-block;
                        position: relative;
                        width: 60%;
                        font-size: 12px;
                        line-height: 22px;
                        li:last-child{
                            color: rgb(204, 102, 51);
                        }
                    }
                }
                &:after{
                    content: "";
                    height:0;
                    display: block;
                    visibility: hidden;
                    clear:both;
                }
            }
            .detail-mid{
                position: relative;
                width: 100%;
                padding: 0 0 10px;
                border-bottom: 10px solid #F7F7F7;
                p{
                    position: relative;
                    font-size: 16px;
                    text-align: left;
                    left: 2%;
                    color: black;
                    font-weight: bold;
                }
                .detail-top-btn{
                    position: relative;
                    margin-top: 10px;
                    width: 100%;
                    box-sizing: border-box;
                    padding: 0 5%;
                    display: flex;
                    justify-content: space-between;
                    .detail-top-btnHide{
                        position: absolute;
                        height: 60px;
                        box-sizing: border-box;
                        border: 1px solid #ebeef5;
                        border-radius: 4px;
                        background: rgba(255,255,255,0.9);
                        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                        opacity: 0;
                        transition: all 0.5S linear;
                        p{
                            font-size: 14px;
                            text-align: center;
                        }
                        &:before {
                            border-left: 5px solid transparent;
                            border-right: 5px solid transparent;
                            border-top: 5px solid black;
                            content: "";
                            position: relative;
                            top: 65px; 
                            width: 0;
                        }
                    }
                    .detail-toBtn{
                        display: inline-block;
                        padding: 15px 0;
                        width: 45%;
                        border-radius: 10px;
                        box-sizing: border-box;
                        font-size: 16px;
                    }
                    .detail-toShopping{
                        background-color: #fff;
                        border: 1px solid black;
                    }
                    .detail-toBuy{
                        background-color: rgb(51, 153, 51);
                        color: #fff;
                    }
                }
            }
            .detail-bottom{
                position: relative;
                .menu-list{
                    li{
                        form{
                            fieldset{
                                position: relative;
                                width: 90%;
                                height: auto;
                                margin: 0 auto 10px;
                                padding-left: 20px;
                                legend{
                                    text-align: left;
                                }
                                span{
                                    position: relative;
                                    display: inline-block;
                                    width: 94%;
                                    text-align: left;
                                    white-space: normal;
                                    margin: 0 auto;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
//详情页过渡动画
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .75s linear;
}
.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
  transform: translateX(100%)
  
}
.slide-fade-enter-to, .slide-fade-leave {
  opacity: 1;
}
</style>
