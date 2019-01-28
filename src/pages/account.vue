<template>
   <div class="account">
       <div class="search-wrap">
           <img src="../assets/search.png" alt="" @click="MyFilter(),isVisible = true">
           <input type="text" placeholder="请输入你想查找的图书名称" v-model="searchVal">
       </div>
       <div class="wrapper searchContent" ref="wrapper">
           <div class="content">
                <ul class="menu-list">
                    <li v-for="(item, index) in books" :key="index"
                        @click="DisVisible = !DisVisible,getMessage(item)"
                    >
                        <img :src="item.cover" alt="">
                        <div class="menu-rightWrap">
                            <p>{{item.name}}</p>
                            <p>{{item.author}}</p>
                            <p>￥{{item.price}}</p>
                            <p>出版时间：{{item.date}}</p>
                        </div>
                    </li>
                </ul>
           </div>
       </div>
    <!-- 遮罩层过渡 -->
    <transition name="slide-fade">
       <div class="search-mask" v-show="isVisible">
           <div class="mask-title">
               <span>搜索结果</span>
               <img src="../assets/close.png" alt="" @click="isVisible = false">
           </div>
           <div class="mask-top">
               <ul>
                   <li v-show="arrSearch.length == 0" class="search-erro">
                       <!-- 判断输入错误或为空时，显示提示框 -->
                       <img src="../assets/error.png" alt="">
                       <p class="error-prompt">没有输入有效关键词</p>
                   </li>
                   <li v-for="(item, index) in arrSearch" :key="index" class="search-show">
                        <!-- 若果存放搜索数据的数组长度为0，则说明还没有进行搜索，直接写arrSearch[0].cover会报错
                        所以用三目运算做一个判断 -->
                        <img :src="arrSearch.length == 0 ? '' :arrSearch[index].cover" alt="">
                        <div class="mask-top-wrap">
                            <p>{{arrSearch[index].name}}</p>
                            <p>{{arrSearch[index].author}}</p>
                            <p>￥{{arrSearch[index].price}}</p>
                            <p>出版时间：{{arrSearch[index].date}}</p>
                        </div>
                   </li>
               </ul>
           </div>
       </div>
    </transition>
    <detail @DisVisible="getShow" class="detail" v-show="DisVisible" :msg="saveMsg"/>
   </div>
</template>

<script>
import BScroll from 'better-scroll'
import detail from '../components/detail'

export default {
    name: '',
    data() {
        return {
            books: "",
            searchVal:"",//默认输入为空
            isVisible: false,
            arrSearch: [], //搜索框数据存放
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
        //通过过滤搜索框数据
        MyFilter() {
            //重置搜索数据，不然每一次搜索的都会存入
            this.arrSearch = []
            let len = this.books.length
            for (let i=0; i < len; i++){
                //for循环数据中的每一项（根据name值）
                if(this.books[i].name.search(eval('/' + this.searchVal + '/i')) != -1 && this.searchVal != ""){
                    //判断输入框中的值是否可以匹配到数据，如果匹配成功
                    this.arrSearch.push(this.books[i]);
                    //向空数组中添加数据
                }
            }
            //console.log(this.arrSearch)
            return this.arrSearch
        },
        getShow(res) {
            this.DisVisible = res
        },
        //获取当前点击li，对应的书籍信息
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
    top: -10% !important;
    z-index: 99;
}
.wrapper{
  width: 100%;
  position:absolute;
  top: 48px;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
}
.content{
  height:auto;
}
.account{
    position: relative;
    width: 100%;
    height: calc(100% - 8px);
    .search-wrap{
        position: relative;
        width: 80%;
        height: 40px;
        margin: 8px auto 8px;
        border: 1px solid rgb(153, 153, 153);
        border-radius: 20px;
        line-height: 40px;
        background: white;
        img{
            float: left;
            position: relative;
            left: 5%;
            top: 4px;
        }
        input{
            float: left;
            position: relative;
            width: calc(89% - 32px);
            height: 30px;
            top: 5px;
            left: 6%;
            font-size: 14px;
            text-indent: 10px;
        }
    }
    .searchContent{
        width: 100%;
        background: white;
        .menu-list{
            width: 100%;
            li{
                width: 94%;
                margin: 0 auto;
                padding: 10px 0;
                position: relative;
                text-align: center;
                background: #fff;
                border-bottom: 1px solid rgb(215,215,215);
                img{
                    position: relative;
                    width: 30%;
                }
                .menu-rightWrap{
                    text-align: left;
                    float: right;
                    width: 60%;
                    padding-top: 15px;
                    p{
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                        overflow: hidden;
                        margin-top: 5px;
                    }
                    p:nth-child(1){
                        font-size: 14px;
                        font-weight: 400;
                        color: rgb(51, 102, 204)
                    }
                    p:nth-child(2){
                        font-size: 13px;
                        font-weight: 400;
                        color: rgb(121, 121, 121);
                    }
                    p:nth-child(3){
                        font-size: 18px;
                        font-weight: 400;
                        color: rgb(204, 102, 51);
                    }
                    p:nth-child(4){
                        font-size: 14px;
                        font-weight: 400;
                        color: rgb(0, 0, 0);
                    }
                }
            }
        }
    }
    .search-mask{
        position: fixed;
        top: 44px;
        right: 0;
        width: 100%;
        height: calc(100% - 110px);
        background: white;
        z-index: 9;
        .mask-title{
            position: absolute;
            width: 100%;
            height: 58px;
            background: rgba(142, 113, 199, 1);
            span{
                font-size: 24px;
                color: white;
                line-height: 58px;
            }
            img{
                display: inline-block;
                width: 24px;
                position: absolute;
                top: 5px;
                right: 5px;
            }
        }
        img{
            width: 30%;
        }
        .mask-top{
            position: relative;
            width: 100%;
            top: 58px;
            height: calc(100% - 58px);
            overflow: auto;
            ul{
                width: 100%;
                .search-erro{
                    img{
                        position: relative;
                        width: 40%;
                        margin-top: 40%;
                    }
                .error-prompt{
                        font-size: 20px;
                        color: black;
                        margin-top: calc(20% - 29px);
                    }
                }
                .search-show{
                    width: 100%;
                    padding: 10px 0;
                    border-bottom: 1px solid #d7d7d7;
                    img{
                        position: relative;
                        left: -2%;
                    }
                    .mask-top-wrap{
                        position: relative;
                        float: right;
                        width: 60%;
                        height: 100px;
                        top: 10px;
                        right: 3%;
                        text-align: left;
                        p{
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                            margin-top: 5px;
                        }
                        p:nth-child(1){
                            font-size: 14px;
                            font-weight: 400;
                            color: rgb(51, 102, 204)
                        }
                        p:nth-child(2){
                            font-size: 13px;
                            font-weight: 400;
                            color: rgb(121, 121, 121);
                        }
                        p:nth-child(3){
                            font-size: 18px;
                            font-weight: 400;
                            color: rgb(204, 102, 51);
                        }
                        p:nth-child(4){
                            font-size: 14px;
                            font-weight: 400;
                            color: rgb(0, 0, 0);
                        }
                    }
                }
            }
            

        }
    }
}
//遮罩层过渡动画
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
