import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        count:"jk"
    },
    mutations: {
        changeList(state,demo) {
          state.count=demo
        }
    },
    actions:{
        reqListAction(context) {
            context.commit("changeList", "你好")
        }
    },
    getters:{
        list(state) {
            return state.count

        }
    }
})