<template>
   <div class="recharge">
       <template>
            <div class="scroll">
                <swiper :options="swiperOption" ref="mySwiper">
                    <!-- slides -->
                    <swiper-slide><img src="../assets/1.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/2.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/3.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/4.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="../assets/5.jpg" alt=""></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination "  slot="pagination"></div>
                    <!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
                </swiper> 
            </div>
        </template>
        <div class="recommend">
            <div class="recommendMore-wrap">
                <span class="left">放松看看小说</span>
                <span class="right" @click="getBooks()">换一批<img src="../assets/refresho.png" alt=""></span>
            </div>
            <div class="recommendCon-wrap">
                <ul class="recommendCon-list">
                    <li class="recommendCon-li" v-for="(item, index) in books" :key="index">
                        <img :src="item.book_cover" alt="">
                        <div class="spanWrap">
                            <span class="recharge-bookname">{{item.bookname}}</span>
                            <span class="recharge-bookinfo">{{item.book_info}}</span>
                            <span class="recharge-authorname">{{item.author_name}}</span>
                            <span class="recharge-classname">{{item.class_name}}</span>
                        </div>
                    </li>
                    <p @click="ShowMore()" class="ShowMore">全部显示</p>
                </ul>
            </div>
            <div class="recommendCon-wrap">
                <ul class="recommendCon-list">
                    <li class="recommendCon-li" v-for="(item, index) in Onebooks" :key="index">
                        <img :src="item.book_cover" alt="">
                        <div class="spanWrap">
                            <span class="recharge-bookname">{{item.bookname}}</span>
                            <span class="recharge-bookinfo">{{item.book_info}}</span>
                            <span class="recharge-authorname">{{item.author_name}}</span>
                            <span class="recharge-classname">{{item.class_name}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="recommendCon-wrap">
                <ul class="recommendCon-list">
                    <li class="recommendCon-li" v-for="(item, index) in Onebooks" :key="index">
                        <img :src="item.book_cover" alt="">
                        <div class="spanWrap">
                            <span class="recharge-bookname">{{item.bookname}}</span>
                            <span class="recharge-bookinfo">{{item.book_info}}</span>
                            <span class="recharge-authorname">{{item.author_name}}</span>
                            <span class="recharge-classname">{{item.class_name}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
   </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
    name: 'Swiper',
    components: {  
      swiper,  
      swiperSlide
    }, 
    data() {
      return {
            swiperOption: {  
                notNextTick: true,
                //循环
                loop:true,
                //设定初始化时slide的索引
                initialSlide:0,
                //自动播放
                //autoplay:true,
                autoplay: {
                    delay: 1000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                // 设置轮播
                effect : 'slide',
                //滑动速度
                speed:800,
                //滑动方向
                direction : 'horizontal',
                //小手掌抓取滑动
                // grabCursor : true,
                //滑动之后回调函数
                on: {
                    slideChangeTransitionEnd: function(){
                        // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
                    },
                },
                //左右点击
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                //分页器设置         
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                //滚动条
                // scrollbar: {
                //     el: '.swiper-scrollbar',
                // }
        },
        swiperSlides: [1, 2, 3, 4],
        books: {},
        Onebooks: {}
      }
    },
    methods: {
        //获取小说的随机api数据
        getBooks() {
           this.$axios.get("https://www.apiopen.top/novelApi")
                      .then((response)=>{
                        this.books = response.data.data
                        //console.log(this.books)
         })
       },
       //加载更多书籍
       ShowMore() {
           this.$axios.get("https://www.apiopen.top/novelApi")
                      .then((response)=>{
                        response.data.data.forEach(item => item.more = "点击显示更多");
                        this.Onebooks = response.data.data
                        //console.log(this.Onebooks)
         })
         let Pbtn = document.getElementsByClassName("ShowMore")[0]
         Pbtn.style.display = "none"
       }
    },
    computed: {  
        swiper() {  
            return this.$refs.mySwiper.swiper;  
        }  
    },
    mounted () {  
        //可以使用swiper这个对象去使用swiper官网中的那些方法  
        //console.log('this is current swiper instance object', this.swiper);
        // this.swiper.slideTo(0, 0, false);
        //调用拿数据的函数
        this.getBooks();
    },
    updated() {
        //设置内容recommend高度
        let imgH  = document.getElementsByClassName("scroll")[0].offsetHeight;
        let wrapH = document.getElementsByClassName("recharge")[0].offsetHeight;
        let conH  = document.getElementsByClassName("recommend")[0];
        //console.log(wrapH)
        //console.log(imgH)
        let ofHeight = wrapH - imgH;
        //console.log(ofHeight)
        conH.style.height = ofHeight + "px"
    },
  }
</script>
 
<style scoped lang="less">
.recharge{
    position: relative;
    width: 100%;
    height: 100%;
    .scroll{
        img {
            width: 100%;
        }
    }
    .recommend{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: auto;
        .recommendMore-wrap{
            position: fixed;
            width: 100%;
            height: 40px;
            line-height: 40px;
            background: white;
            z-index: 1;
            box-sizing: border-box;
            border-bottom: 1px solid #e6e6e6;
            .left{
                position: relative;
                float: left;
                left: 10%;
            }
            .right{
                font-size: 12px;
                position: relative;
                float: right;
                right: 10%;
                img{
                    position: relative;
                    width: 14px;
                    vertical-align:sub;
                    margin-left: 5px;
                }
            }
        }
        .recommendCon-wrap{
            position: relative;
            width: 100%;
            margin-top: 28px;
            .recommendCon-list{
                .ShowMore{
                    margin-top: 5px;
                    font-size: 14px;
                    height: 40px;
                    line-height: 40px;
                    background: white;
                }
                .recommendCon-li{
                    height: auto;
                    background: white;
                    margin-top: 5px;
                    padding: 3%;
                    img{
                        position: relative;
                        width: 30%;
                        float: left;
                        margin-right: 5%;
                    }
                    .spanWrap{
                        position: relative;
                        text-align: left;
                        margin-top: 5px;
                        .recharge-bookname{
                            font-size: 14px;
                            font-weight: bold;
                        }
                        .recharge-bookinfo{
                            font-size: 12px;
                            margin-top: 10px;
                            margin-bottom: 10px;
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 3;
                            overflow: hidden;
                        }
                        .recharge-authorname{
                            font-size: 14px;
                            font-weight: bold;
                        }
                        .recharge-classname{
                            padding: 2px 8px;
                            margin-left: 15px;
                            font-size: 12px;
                            font-weight: bold;
                            color: #bf2c24;
                            border: 1px solid #ffb0b4;
                            border-radius: 10px;
                        }
                    }
                }
               .recommendCon-li:after{
                    content: "";
                    height:0;
                    display: block;
                    visibility: hidden;
                    clear:both;
                }
            }
        }
    }
}
</style>
