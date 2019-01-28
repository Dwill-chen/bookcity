<template>
   <div class="home">
        <div class="wrap">
           <p>程序猿、攻城狮、码农进阶书籍</p>
        </div>
        <div class="wrapper" ref="wrapper">
           <div class="content">
                <ul class="menu-list">
                    <li v-for="(item, index) in books" :key="index">
                        <img :src="item.cover" alt="" @click="DisVisible = !DisVisible,getMessage(item)"><br>
                        <span class="list-author">{{item.author}}</span><br>
                        <span class="list-word">￥{{item.price}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <detail @DisVisible="getShow" class="detail" v-show="DisVisible" :msg="saveMsg"/>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
import detail from '../components/detail'

export default {
    name: 'home',
    data() {
        return {
            books: "",
            DisVisible: null,
            saveMsg: [],//存储当前图片对应书籍的信息
        }
    },
    methods: {
        getBooks() {
            this.$axios.get("static/json/book-info.json")
                        .then((response)=>{
                        //处理我们请求的数据，给他增加一个num属性,即数量，且为1
                        response.data.forEach(item => item.num = 1);
                        this.books = response.data
                        //console.log(this.books)
            })
        },
        //接收子组件的DisVisible，形成联动
        getShow(res) {
            this.DisVisible = res
        },
        //获取当前点击图片，对应的书籍信息
        getMessage(item) {
            //清空以前点击产生的数据
            this.saveMsg = []
            this.saveMsg = item
            //console.log(this.saveMsg)
        }
    },
    components: {
        detail
    },
    mounted() {
        this.getBooks();
        //即定时器 20ms
        this.$nextTick(() => {
        //$refs绑定元素
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrapper, {
            //开启点击事件 默认为false
            click:true
        })
        // console.log(this.scroll)
        }else if(!this.$refs.wrapper){
            return
        }
        else{
            this.scroll.refresh()
        }
      })
    }
}
</script>

<style scoped lang="less">
.detail{
    position: relative;
    z-index: 99;
}
.wrapper{
  width: 100%;
  position:absolute;
  top: 20px;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}
.content{
  height: auto;
}
.home{
    position: relative;
    top: 44px;
    width: 100%;
    height: 100%;
    .wrap{
        position: fixed;
        width: 100%;
        height: 20px;
        z-index: 1;
        background: lightgoldenrodyellow;
        p{
            font-size: 12px;
            line-height: 20px;
        }
    }
    .menu-list{
        position: relative;
        margin-top: 20px;
        li{
            position: relative;
            width: 100%;
            height: auto;
            text-align: center;
            padding: 10px 0;
            background: #fff;
            img{
                position: relative;
                width: 80%;
                height: auto;
            }
            span{
                display: inline-block;
                margin-top: 10px;
            }
            .list-author{
                font-size: 22px;
                font-weight: bolder;
            }
            .list-word{
                font-size: 18px;
                color: rgb(204, 102, 51);
                font-weight: bold;
            }
            &:after{
                content: "";
                width: 90%;
                height: 1px;
                margin: 20px auto 0;
                background: #f56c6c;
                display: block;
            }
        }
    }
}
</style>
