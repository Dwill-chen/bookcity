<template>
  <div id="app">
      <topTitle :title="title" :SIndex="SIndex" class="topTitle"/>
      <navigation class="nav" :title="title"  @SIndex="getIndex"/>
  </div>
</template>

<script>
import navigation from './components/navigation';
import topTitle from './components/topTitle';

export default {
  name: 'App',
  data() {
    return {
      SIndex: 0
    }
  },
  //从vuex的Store中拿数据
  computed: {
    title() {
      return this.$store.state.title
    }
  },
  methods: {
    //接收子元素Nav传过来的index值
    getIndex(res) {
      // console.log(res)
      this.SIndex = res
    }
  },
  components: {
    navigation,
    topTitle
  }
}
</script>

<style lang="less" scoped>
.topTitle{
  position: fixed !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  position: relative;
  top:0;
  .nav{
    position: fixed;
    width: 100%;
    bottom: 0;
  }
  .left{
    position: relative;
    top: 80px;
  }
}
p{
  position: relative;
  top: 200px;
}

</style>
