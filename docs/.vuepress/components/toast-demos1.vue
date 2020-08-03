<template>
  <div>
    <w-button @click="showToast('top')">上方弹出</w-button>
    <w-button @click="showToast('middle')">中间弹出</w-button>
    <w-button @click="showToast('bottom')">下发弹出</w-button>
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
      showToast(position) {
        this.$toast('这是一段文字', {
          position,
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
