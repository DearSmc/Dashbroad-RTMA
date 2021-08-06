<template>
  <!-- <q-form class="q-gutter-y-md column q-ma-lg" style="max-width: 300px">
    <q-input type="text" class="self-center full-width no-outline" rounded outlined v-model="newProvince"/>
    <q-btn label="Submit" type="submit" color="primary" @click="onSubmit"/>
  </q-form> -->

  <div class="q-ma-lg">
    <dashbroad/>
  </div>

</template>

<script>
// import { ref } from 'vue'
import store from './store/index'
import dashbroad from './components/dashbroad.vue'

export default {
  name: 'LayoutDefault',
  store,

  components: {
    dashbroad
  },
  // data() {
  //   return {
  //     newProvince : "",
  //   }
  // },
  // methods: {
  //   onSubmit(){
  //     this.$store.commit("setProvince",newProvince)
  //     console.log("wiork")
  //   }
  // },

}
</script>