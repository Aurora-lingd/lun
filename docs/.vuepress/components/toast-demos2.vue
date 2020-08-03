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
        this.$toast('电磁电量仅剩10%，请连接充电器', {
          autoClose:8,
          closeButton:{
            text:'知道了',
            callback:()=>{
              console.log('他知道了')
            }
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
