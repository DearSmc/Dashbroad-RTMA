
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    province : ["จ.ปทุมธานี","จ.กรุงเทพมหานคร","จ.ประจวบคีรีขันธ์","จ.นครปฐม","จ.สิงห์บุรี"]
  },
  mutations:{
    setProvince(state,newData){
      state.province = newData
    }
  },
  getters:{
    province:state => state.province
  }

});