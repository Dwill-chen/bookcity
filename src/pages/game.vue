<template>
   <div class="game">
       <div class="game-shopping">
           <span>购物车</span>
           <span class="game-edit game-obj" v-if="isShow" @click="wordToShow">编辑</span>
           <span class="game-over game-obj" v-if="!isShow" @click="wordToShow">完成</span>
       </div>
       <div class="shopping-wrap">
           <div class="shopping-nothing">
               <img src="../assets/shopping.png" alt="">
               <p>购物车竟然是空的</p>
               <p>"再忙,也要记得买点什么犒赏自己~"</p>
           </div>
           <div class="deduct-hide">
                受不了了，宝贝不能再减少了哦
           </div>
           <ul>
               <li v-for="(item, index) in shopping" :key="index">
                   <!-- 自定义的input选择框样式，用label标签绑定 -->
                   <span class="my-checkbox">
                       <!-- 因为ID是唯一的，所以用字符串拼接index来区分 -->
                       <input type="checkbox" class="Checkbox" :id="'checkbox' + index" @click="myAllPrice(),everyBox()">
                       <label :for="'checkbox' + index"></label>
                   </span>
                   <div class="shopping-wrap-right">
                       <img :src="item.cover" alt="">
                       <div class="wrap-right-all">
                           <p>{{item.name}}</p>
                           <p>{{item.author}}</p>
                           <p>出版日期：{{item.date}}</p>
                           <p>￥{{item.price}}</p>
                           <div class="wrap-right-num">
                               <span class="deduct" @click="deduct(index,item),myAllPrice()">-</span>
                               <span class="num">{{item.num}}</span>
                               <span class="add" @click="add(index,item),myAllPrice()">+</span>
                           </div>
                       </div>
                   </div>
               </li>
           </ul>
       </div>
       <div class="shopping-delete">
           <div class="shopping-all">
               <span class="my-checkbox">
                    <input type="checkbox" class="CheckboxAll" id="checkboxAll" @click="allChoose(),myAllPrice()">
                    <label for="checkboxAll"></label>
                </span>
                <span class="checkbox-all">全选</span>
           </div>
           <div class="shopping-edit shopping-content" v-if="isShow">
               <span class="shopping-editPrice">合计：<span>￥{{allPrice}}</span>
                    <button class="settlement" @click="settlement">去结算({{priceLen}})</button>
               </span>
           </div>
           <div class="shopping-over shopping-content" v-if="!isShow">
               <span class="shopping-over-word">删除选中项</span>
               <button class="shopping-over-delete" @click="deleteGoods">删除</button>
           </div>
       </div>
       <transition name="slide-fade">
            <div class="settlementWrap" v-show="isVisible">
                <div class="settlementClose" @click="settlementClose">
                    <img src="../assets/close.png" alt="">
                </div>
                <ul>
                    <li v-for="(item, index) in setArr" :key="index">
                        <img :src="item.cover" alt="">
                        <div class="settlementWrap-word">
                            <p>商品：<span>{{item.name}}</span></p>
                            <p>作者：<span>{{item.author}}</span></p>
                            <p>数量：<span>{{item.num}}</span></p>
                        </div>
                    </li>
                </ul>
                <div class="settlementPay">
                    <p>去支付</p>
                </div>
            </div>
       </transition>    
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {
           shopping: [],
           setArr: [],//记录选中并结算的商品
           isShow: true,
           allPrice: 0,//给一个默认总价
           priceLen: 0,   //给去结算的数量一个默认值
           isVisible: false,//控制计算页的显示
       }
   },
   created() {
       //因为data中的allPrice默认值没有2位小数，我们手动让他显示为2位小数
       let allPrice = 0
       this.allPrice = allPrice.toFixed(2) 
   },
   mounted(){
       if(localStorage.shopping){
           let shopping = JSON.parse(localStorage.shopping) 
           this.shopping = shopping
       }else{
           //因为涉及到DOM节点，created还没没有生成DOM节点，所以用mounted
           let toShow = document.getElementsByClassName("shopping-nothing")[0]
           toShow.style.display = "block"
       }
   },
   components: {},
    methods: {
        wordToShow() {
            this.isShow = !this.isShow
            //console.log(this.isShow) 
        },
        //增加商品数量
        add(index,item) {
            //console.log(this.shopping[index].num)
            //创建空数组，存放本地数据
            let newLocalArr = []
            newLocalArr = JSON.parse(localStorage.shopping)
            //每次点击自增+1
            item.num = item.num + 1
            newLocalArr[index].num = item.num
            //将新的数据返回到本地数据
            //console.log(newLocalArr[index].num)
            localStorage.shopping = JSON.stringify(newLocalArr)
            //大于1时候的判断
            let odeduct = document.getElementsByClassName("deduct")
            if(item.num > 1){
                odeduct[index].style.color = "black"
                odeduct[index].style.background = "#F7F7F7"
            }
        },
        //减少商品数量
        deduct(index,item) {
            let newLocalArr = []
            newLocalArr = JSON.parse(localStorage.shopping)
            //每次点击自减-1
            item.num = item.num - 1
            newLocalArr[index].num = item.num
            //将新的数据返回到本地数据
            //console.log(newLocalArr[index].num)
            localStorage.shopping = JSON.stringify(newLocalArr)
            //小于0时候的判断
            let odeduct = document.getElementsByClassName("deduct")
            let oDeductHide = document.getElementsByClassName("deduct-hide")[0]
            if(item.num < 1){
                let newLocalArr = []
                newLocalArr = JSON.parse(localStorage.shopping)
                item.num = 1
                newLocalArr[index].num = item.num
                localStorage.shopping = JSON.stringify(newLocalArr)
                odeduct[index].style.color = "lightgray"
                odeduct[index].style.background = "#F0F0F0"
                oDeductHide.style.opacity = 1
                oDeductHide.style.zIndex = 99
                setTimeout(function(){
                    oDeductHide.style.opacity = 0
                    oDeductHide.style.zIndex = -1
                },1000);
            }
        },
        myAllPrice() {
            //计算总价
            let allPrice = 0;
            let checkNum = [];
            for (let i = 0; i < this.shopping.length; i++) {
                let Checkboxs = document.getElementsByClassName("Checkbox")
                //console.log(Checkboxs[0].checked)
                //复选框被勾中的购物车项才进行计算
                if(Checkboxs[i].checked){
                    allPrice += this.shopping[i].price * this.shopping[i].num
                    //计算选中商品的个数
                    checkNum.push(Checkboxs[i])
                }      
                //console.log(checkNum.length)
                this.priceLen = checkNum.length
            }
            return this.allPrice = allPrice.toFixed(2)  
        },
        //全选
        allChoose() {
            let allCh = document.getElementById("checkboxAll")
            let everyCheckbox = document.getElementsByClassName("Checkbox")
            for (let i = 0; i < everyCheckbox.length; i++) {
                //根据全选判断每一个选择框
                if (allCh.checked) {
                    everyCheckbox[i].checked = true;
                }else{
                    everyCheckbox[i].checked = false;
                }
                //根据每一个先择框判断全选状态
                //该方法要去单个选择框的methods里面做判断
            } 
        },
        //单选
        everyBox() {
                let allCh = document.getElementById("checkboxAll")
                let everyCheckbox = document.getElementsByClassName("Checkbox")
                let newBOX = []//记录单选择的个数，若和总个数相等，则全选
                for (let i = 0; i < everyCheckbox.length; i++) {
                    //根据每一个先择框判断全选状态
                    if(everyCheckbox[i].checked){
                        newBOX.push(everyCheckbox[i])
                        if(newBOX.length == everyCheckbox.length) {
                            allCh.checked = true
                        }else{
                            allCh.checked = false
                        }
                    }else{
                        allCh.checked = false
                    }
                    
                }
        },
        //删除选中商品
        deleteGoods() {
            let allCh = document.getElementById("checkboxAll")
            let everyCheckbox = document.getElementsByClassName("Checkbox")
            let newBOX = []//记录 除开单个需要删除的数据，之外的其他商品的数据
            for (let i = 0; i < everyCheckbox.length; i++) {
                //因为是保留没有选中的商品，故判断取反
                if(!everyCheckbox[i].checked){
                    //newBOX是删除后剩下的商品
                    newBOX.push(this.shopping[i])
                }
                //让单选框、全选框复位
                everyCheckbox[i].checked = false
                allCh.checked = false
            }
            //因为视图更新，依赖data中数据变化，因此更新本地数据不能用newBox，将new赋值给this.shopping
            this.shopping = newBOX
            //更新本地数据
            localStorage.shopping = JSON.stringify(this.shopping)
            //更新去结算中，商品的数量
            let newPriceLen = []
            for (let i = 0; i < this.shopping.length; i++) {
                let everyCheckbox = document.getElementsByClassName("Checkbox")
                if(everyCheckbox[i].checked) {
                    newPriceLen.push(everyCheckbox[i])
                }
            }
            //console.log(newPriceLen)
            this.priceLen = newPriceLen.length
            //更新总价
            let allPrice = 0
            this.allPrice = allPrice.toFixed(2)
        },
        //去结算
        settlement() {
            if(this.priceLen == 0){
                alert("商品数量为0，请选中结算商品")
            }else{
                let allCh = document.getElementById("checkboxAll")
                let everyCheckbox = document.getElementsByClassName("Checkbox")
                this.isVisible = true
                for (let i = 0; i < everyCheckbox.length; i++) {
                    //根据每一个先择框判断全选状态
                    if(everyCheckbox[i].checked){
                        this.setArr.push(this.shopping[i])
                    }
                }
                //console.log(this.setArr)
            }
        },
        //管不订单页面
        settlementClose() {
            //情况每次产生的数据
            this.setArr = []
            this.isVisible = false
        }
    },
    updated() {
        //判断是否全部删除，提醒购物车为空
        if(this.shopping.length == 0){
            let oHide = document.getElementsByClassName("shopping-nothing")[0]
            oHide.style.display = "block"
        }
    }
}
</script>

<style scoped lang="less">
//商品数量最小为1
.deduct-hide{
    position: fixed;
    width: 70%;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    background: rgba(30, 30, 37,0.8);
    color: #fff;
    z-index: 99;
    top: calc(50% - 20px);
    left: 15%;
    opacity: 0;
    border-radius: 10px;
    transition: all 0.5s linear;
}
//购物车为空时
.shopping-nothing{
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-top: 10%;
    display: none;
    img{
        width: 30%;
        margin-bottom: 10%;
    }
    P:nth-child(2){
        font-size: 14px;
        margin-bottom: 5%;
    }
    P:nth-child(3){
        font-size: 12px;
        color: gray;
    }
}
.game{
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    .game-shopping{
        position: relative;
        width: 100%;
        height: 36px;
        line-height: 36px;
        box-sizing: border-box;
        border-bottom: 1px solid #F7F7F7;
        .game-obj{
            position: absolute;
            right: 5%;
            font-size: 14px;
            color: gray;
        }
    }
    .shopping-wrap{
        height: calc(100% - 72px);
        position: relative;
        overflow: auto;
        -webkit-overflow-scrolling : touch;
        ul{
            position: relative;
            li{
                position: relative;
                text-align: left;
                width: 100%;
                height: 140px;
                //自定义input框的样式
                .my-checkbox{
                    display: inline-block;
                    position: relative;
                    width: 8%;
                    height: 140px;
                    .Checkbox{
                        position: relative;
                        visibility: hidden;
                    }
                    label{
                        position:absolute;
                        width: 16px;
                        height: 16px;
                        top: 62px;
                        left: calc(50% - 8px);
                        border-radius: 50%;
                        border:1px solid #DEDEDE;
                    }
                    .Checkbox:checked+label:after{
                        content: "";
                        position: absolute;
                        top: 2px;
                        left: 2px;
                        width: 12px;
                        height: 12px;
                        background: gray;
                        border-radius: 8px;
                        z-index: 9;
                    }
                }
                .shopping-wrap-right{
                    position: relative;
                    width: 90%;
                    height: 130px;
                    top: -135px;
                    left: 9%;
                    box-sizing: border-box;
                    border: 1px solid #ebeef5;
                    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                    display: flex;
                    align-items: center;
                    img{
                        display: inline-block;
                        position: relative;
                        width: 22%;
                        align-items: center;
                    }
                    .wrap-right-all{
                        position: relative;
                        width: 74%;
                        left: 2%;
                        height: 110px;
                        padding-left: 6px;
                        p{
                            font-size: 14px;
                            line-height: 20px;
                        }
                        p:nth-child(1){
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                        }
                        p:nth-child(4){
                            position: absolute;
                            bottom: 0;
                            color: red;
                        }
                        .wrap-right-num{
                            position: absolute;
                            width: 30%;
                            height: 20px;
                            bottom: 0;
                            right: 5px;
                            box-sizing: border-box;
                            .deduct,.add{
                                display: inline-block;
                                position: relative;
                                width: 14px;
                                text-align: center;
                                background: #F7F7F7;
                            }
                            .num{
                                display: inline-block;
                                position: relative;
                                text-align: center;
                                font-size: 14px;
                                width: calc(100% - 38px);
                                background: #DEDEDE;
                            }
                        }
                    }
                }
            }
        }
    }
    .shopping-delete{
        position: relative;
        width: 100%;
        height: 36px;
        box-sizing: border-box;
        border-top: 1px solid #F7F7F7;
        .shopping-all{
            position: relative;
            width: 25%;
            height: 36px;
            text-align: left;
            .checkbox-all{
                display: inline-block;
                position: relative;
                width: 60%;
                left: - 10%;
                text-align: center;
                top: 9px;
                font-size: 14px;
            }
            .my-checkbox{
                display: inline-block;
                position: relative;
                width: 30%;
                height: auto;
                top: 9px;
                .CheckboxAll{
                    position: relative;
                    visibility: hidden;
                }
                label{
                    position:absolute;
                    width: 16px;
                    height: 16px;
                    left: calc(50% - 8px);
                    border-radius: 50%;
                    border:1px solid #DEDEDE;
                }
                .CheckboxAll:checked+label:after{
                    content: "";
                    position: absolute;
                    top: 2px;
                    left: 2px;
                    width: 12px;
                    height: 12px;
                    background: gray;
                    border-radius: 8px;
                    z-index: 9;
                }
            }
        }
        .shopping-content{
            position: relative;
            width: 75%;
            height: 36px;
            top: -36px;
            left: 25%;
            line-height: 36px;
        }
        .shopping-edit{
            font-size: 14px;
            text-align: left;
            .shopping-editPrice{
                display: inline-block;
                position: absolute;
                width: 80%;
                left: 20%;
                span{
                    color: red;
                }
                button{
                    position: absolute;
                    width: 40%;
                    height: 30px;
                    line-height: 30px;
                    top: 3px;
                    right: 2%;
                    border-radius: 30px;
                    background: #f40;
                    color: #fff;
                }
            }
        }
        .shopping-over{
            position: relative;
            font-size: 14px;
            text-align: left;
            .shopping-over-word{
                display: inline-block;
                position: absolute;
                width: 30%;
                left: 25%;
                color: gray;
            }
            .shopping-over-delete{
                position: absolute;
                width: 40%;
                height: 30px;
                line-height: 30px;
                top: 3px;
                right: 2%;
                border-radius: 30px;
                background: #f40;
                color: #fff;
            }
        }
    }
    .settlementWrap{
        position: absolute;
        top: 0;
        width: 90%;
        left: 5%;
        height: 100%;
        background: white;
        box-sizing: border-box;
        border: 1px solid #ebeef5;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        -webkit-overflow-scrolling : touch;
        z-index: 99;
        ul{
            position: relative;
            width: 100%;
            height: calc(100% - 60px);
            overflow: scroll;
            li:nth-child(1){
                border-top: 2px solid #E1E1E1;
            }
            li{
                position: relative;
                width: 100%;
                height: 135px;
                box-sizing: border-box;
                border-bottom: 2px solid #E1E1E1;
                img{
                    position: relative;
                    top: 10px;
                    right: 30%;
                    width: 90px;
                    height: 115px;
                }
                .settlementWrap-word{
                    position: absolute;
                    width: 60%;
                    top: 10px;
                    right: 0;
                    height: 115px;
                    box-sizing: border-box;
                    padding-top: 20px;
                }
                p{
                    text-align: left;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    font-size: 14px;
                    span{
                        font-size: 12px;
                        color: gray
                    }
                }
            }
        }
        .settlementClose{
            position: relative;
            width: 100%;
            height: 30px;
            background: #f56c6c
        }
        .settlementPay{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 30px;
            line-height: 30px;
            color: white;
            background: #67c23a
        }
    }
}
//过渡动画
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .75s linear;
}
.slide-fade-enter{
  opacity: 0;
  transform: translateX(100%)
  
}
.slide-fade-leave-to{
  opacity: 0;
  transform: translateX(-100%)
}
.slide-fade-enter-to, .slide-fade-leave {
  opacity: 1;
}
</style>
