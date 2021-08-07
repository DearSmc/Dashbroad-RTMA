import { createStore } from 'vuex'

const store = createStore({
  state: {
    province : ["จ.ปทุมธานี","จ.กรุงเทพมหานคร","จ.ประจวบคีรีขันธ์","จ.นครปฐม","จ.AAA"]
  },
  mutations: {
    setProvince(state,newData){
      state.province = state.province.push(newData)
    }
  },
  getters:{
    province:state => state.province
  },
  actions: {
    async fetchData() {
      const url = 'http://localhost:8000/api/v1/incidents/'
      try {
        const res = await fetch(url)
        if (res.status == "OK") {
          this.state.province = res.data
        }
        else {
          throw new Error(res.status)
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