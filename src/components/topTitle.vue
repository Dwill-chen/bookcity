<template>
   <div class="topTitle">
       <!-- <span>{{title[SIndex].name}}</span> -->
       <div class="marquee">
        <div class="marquee_title">
            <span>前端书籍</span>
        </div>
        <div class="marquee_box">
            <ul class="marquee_list" :class="{marquee_top:animate}">
                <li v-for="(item, index) in marqueeList" :key="index">
                    <span class="red">{{item.author}}</span>
                    <span>《{{item.name}}》</span>
                </li>
            </ul>
        </div>
    </div>
   </div>
</template>

<script>
export default {
   name: 'topTitle',
   data() {
       return {
            animate: false,
            //文字滚动公告的数据
            marqueeList: [
                {
                    name: 'CSS那些事儿',
                    author: '林小志',
                },
                {
                    name: 'CSS权威指南',
                    author: 'Eric A.Meyer',
                },
                {
                    name: 'JS标准参考教程',
                    author: '阮一峰',
                },
                {
                    name: '锋利的jQuery',
                    author: '单东林',
                },
                {
                    name: 'HTTP权威指南',
                    author: '古尔利',
                },
                {
                    name: '高性能网站建设指南',
                    author: '桑德斯',
                }
            ]
        
       }
   },
   created() {
       //文字滚动公告的定时器
       setInterval (this.showMarquee, 2000)
   },
   methods: {
       //文字滚动公告
        showMarquee: function () {
            this.animate = true;
            setTimeout (() => {
                this.marqueeList.push (this.marqueeList[ 0 ]);
                this.marqueeList.shift ();
                this.animate = false;
            }, 500);

        }
        },
   props: {
       title: {
            require: true
       },
       SIndex: {
            require: true
       }
   },
  components: {}
}
</script>

<style scoped lang="less">
.topTitle{
    position: absolute;
    height: 44px;
    width: 100%;
    font-size: 16px;
    line-height: 50px;
    top: 0;
    color: white;
    background: #f56c6c;
}
div, ul, li, span, img {
    margin: 0;
    padding: 0;
    display: flex;
    box-sizing: border-box;
}

.marquee {
    width: 100%;
    height: 44px;
    align-items: center;
    color: #3A3A3A;
    display: flex;
    box-sizing: border-box;
}

.marquee_title {
    position: relative;
    width: 30%;
    height: 44px;
    font-size: 14px;
    box-sizing: border-box;
    border-right: 1px solid #d8d8d8;
    align-items: center;
    span{
        display: inline-block;
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-weight: bold;
    }
}
.marquee_box {
    display: block;
    position: relative;
    width: 70%;
    height: 30px;
    overflow: hidden;
}
.marquee_list {
    display: block;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}
.marquee_top {
    transition: all 0.5s;
    margin-top: -30px
}
.marquee_list li {
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    padding-left: 5%;
    display: flex;
    justify-content: center;
    span{
        padding: 0 2px;
    }
}
.red {
    color: #fff;
}
</style>
