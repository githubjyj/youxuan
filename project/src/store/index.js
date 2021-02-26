import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:"",
    // 用户登录之后显示姓名
    name:"",
    userId:""
  },
  // 同步操作
  mutations: {

  },
  // 异步操作
  actions: {
    setToken:(state,token) => {
      // 将 token 存放在 vuex 中
      state.token = token
      // 将 token 存放在 localstorage 中
      localStorage.setItem('mytoken',token)
    },
    setName:(state,name) => {
      // 将 name 存放在 vuex 中
      state.name = name
      // 将 name 存放在 localstorage 中
      localStorage.setItem('myName',name)
    },
    // 将用户的 id 存储在 localstorage 中，在购买商品的时候使用到了
    setUserId:(state,userId) => {
      state.userId = userId
      localStorage.setItem('userid',userId)
    }
  },

  modules: {
  }
})
