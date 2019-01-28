import Vue  from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    // 数据
    state: {
        title: [
            {id: 0,name: "书城"},
            {id: 1,name: "放松"},
            {id: 2,name: "分类"},
            {id: 3,name: "购物车"},
            {id: 4,name: "我的"}
          ]
    },
});
