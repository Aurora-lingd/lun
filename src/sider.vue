<template>
  <transition name="slide">
    <div class="sider" v-if="visible" ref="sider">
      <slot></slot>
      <button @click="visible=false" v-if="button">关闭</button>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'WeiSider',
    data() {
      return {
        visible: true
      }
    },
    props:{
      button:{
        type:Boolean,
        default:false
      }
    },
  }
</script>

<style lang='scss' scoped>
  .sider {
    position: relative;

    > button {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter,.slide-leave-to{
    margin-left: -200px;
  }

</style>