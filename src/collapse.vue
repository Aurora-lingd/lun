<template>
  <div class="collapse">
      <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: "WeiCollapse",
    props:{
      single:{
        type:Boolean,
        default:false
      }
    },
    data(){
      return{
        eventBus:new Vue()
      }
    },
    provide(){
      if (this.single){
        return{
          eventBus: this.eventBus
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
  $color:#ddd;
  $border-radius:4px;
  .collapse{
    border: 1px solid $color;
    border-radius: $border-radius;
  }

</style>