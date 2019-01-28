<template>
   <div class="navigation">
       <router-view class="rouWrap"/>
       <ul class="menu-list">
           <!-- 给购物车添加一个小球 -->
           <li 
                v-for="(item, index) in title" 
                :key="index" 
                @click="sendIndex(index)" 
           >
               <router-link exact :to="urls[index].path">
                   {{item.name}}
               </router-link>
               <span :class="{'shoppingCart':index == 3}" v-if="index == 3">{{shopCart}}</span>
           </li>
       </ul>
   </div>
</template>

<script>
export default {
   name: 'navigation',
   data() {
       return {
           shopCart: 0,
           urls: [
               {name: 'home', path: '/'},
               {name: 'recharge', path: '/recharge'},
               {name: 'account', path: '/account'},
               {name: 'game', path: '/game'},
               {name: 'more', path: '/more'}
           ],
           timer:"",
       }
   },
   created() {
       //因为created只请求一次，所以设置一个定时器，但是要在实例删除前清除定时器
    this.timer = setInterval(()=>{
        if(localStorage.shopping){
            this.shopCart = JSON.parse(localStorage.shopping).length;
        }else{
            this.shopCart = 0;
        }
    },1000);
   },
   props: {
       //接受父组件传过来值
       title: {
            require: true
       }
   },
   //向父组件传递index值
   methods: {
       sendIndex(index) {
           this.$emit("SIndex",index)
       }
   },
   components: {},
   //清除定时器
   beforeDestroy(){
        clearInterval(this.timer);
   }
}
</script>

<style scoped lang="less">
.navigation{
    position: relative;
    top: 44px;
    width: 100%;
    height: calc(100% - 110px);
    .menu-list{
        padding: 20px 5px;
        display: flex;
        justify-content: space-between;
        li{
            position: relative;
            list-style: none;
            font-size: 12px;
            padding: 5px 16px;
            background: #409eff;
            border-radius: 5px;
            a{
                color: #fff;
                font-weight: bold;
            }
            .router-link-active{
                color: black
            }
            .shoppingCart{
                position: absolute;
                width: 15px;
                height: 15px;
                line-height: 15px;
                border-radius: 50%;
                top: -5px;
                right: -5px;
                background: #F7F7F7;
                box-sizing: border-box;
                border: 1px solid #f56c6c;
            }
        }
    }
  .rouWrap{
    position: relative;
    top: 0px;
  }
} 
</style>
