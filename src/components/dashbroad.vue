<template>
    <q-btn
    label="Card"
    color="primary"
    @click="isClose = true"
    class= "text-weight-bold" />

    <q-dialog
      v-model="isClose"
      class = "flex justify-center items-center content-center"
      style = "height: 100vh">
      <q-card
      class="my-card bg-secondary"
      bordered
      >
        <q-card-section class="text-white q-pt-xs q-mx-md">
          <div class="text-h4 q-mt-sm q-mb-sm">Top 5 Risk Area</div>
          <div
          class="text-h5 q-mx-md q-my-xs"
          v-for="(item, index) in data"
          v-bind:key="index">
            {{index+1}}. {{item}}
          </div>
        </q-card-section>

        <q-card-actions class="bg-secondary float-right">
          <q-btn
          rounded
          class= "bg-white text-secondary text-weight-bold"
          @click="isClose = false"
          size= "md"
          label= "close"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

</template>

<script>
import { ref } from 'vue'


export default {
  name : 'dashbroad',
  data() {
    return {
      data: ["จ.ปทุมธานี","จ.กรุงเทพมหานคร","จ.ประจวบคีรีขันธ์","จ.นครปฐม","จ.สิงห์บุรี"]

      // $store.getters.province

    }
  },
  setup () {
    return {
      isClose: ref(false)
    }
  },
}

</script>

<style>

</style>