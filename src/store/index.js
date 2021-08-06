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
      try {
        const res = await fetch(url)
        if (!res.ok)
            if (res.status == "OK") {
              this.state.province = res.data
            } else {
                throw new Error(res.status)
            }
        else return res;
      } catch (err) {
          console.log(err)
      }
  },
  },
  modules: {
  }
})

export default store