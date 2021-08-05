<template>

  <div>
    <dashbroad @onClose=closeDashbroad />
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
  data() {
    return {
      isCloseDashbroad : true
    }
  },
  methods: {
    closeDashbroad(){
      this.isCloseDashbroad = !this.isCloseDashbroad
      }
  },

}
</script>