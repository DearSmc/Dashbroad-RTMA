import { createStore } from 'vuex'

const store = createStore({
  state: {
    province : ["จ.ปทุมธานี","จ.กรุงเทพมหานคร","จ.ประจวบคีรีขันธ์","จ.นครปฐม","จ.AAA"]
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
    async fetchData(context) {
      const url = 'http://178.128.89.207/api/v1/incidents/getFive'
      try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        if (res.ok) {
          context.commit('setProvince',data.getIncidents)
        }
        else {
          throw new Error(res)
        }
      } catch (err) {
          console.log(err)
      }
  },
  },
  modules: {
  }
})

export default store