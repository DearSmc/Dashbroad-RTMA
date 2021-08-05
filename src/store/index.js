import { createStore } from 'vuex'

const store = createStore({
  state: {
    province : ["จ.ปทุมธานี","จ.กรุงเทพมหานคร","จ.ประจวบคีรีขันธ์","จ.นครปฐม","จ.สิงห์บุรี"]
  },
  mutations: {
    setProvince(state,newData){
      state.province = newData
    }
  },
  getters:{
    province:state => state.province
  },
  actions: {
  },
  modules: {
  }
})

export default store