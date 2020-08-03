<template>
  <div>
    <w-button @click="showToast('top')">上方弹出</w-button>
  </div>
</template>
<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {
      'w-button':Button,
    },
    methods: {
      showToast() {
        this.$toast('<strong>加粗提醒</strong>', {
          autoClose:false,
          enableHtml:true,
          closeButton:{
            text:'OK',
          },
        })
      },
    }
  }
</script>
<style>
  .wrapper{
    z-index: 30 !important;
  }
</style>
