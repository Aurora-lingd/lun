<template>
  <div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name:'WeiTabsHead',
    inject:['eventBus'],
    mounted() {
      this.eventBus.$on('update:selected',(item,vm)=>{
          const {width,left} = vm.$el.getBoundingClientRect()
          const {left:left2} =this.$refs.head.getBoundingClientRect()
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left= `${left-left2}px`
      })
    }
  }

</script>
<style lang="scss" scoped>
  $tab-height:40px;
  $active-color: #f5c37e;
  $border-color:#ddd;
  .tabs-head{
    position: relative;
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    border-bottom: 1px solid $border-color;
    >.line{
      position: absolute;
      bottom: -1px;
      border-bottom:2px solid $active-color ;
      transition:all 350ms;
    }
    > .actions-wrapper{
      margin-left: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 1em;
    }
  }
</style>