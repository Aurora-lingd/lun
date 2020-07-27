<template>
  <div class="tabs-head">
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
        this.x= true
          const {width,left} = vm.$el.getBoundingClientRect()
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left= `${left}px`
      })
    }
  }

</script>
<style lang="scss" scoped>
  $tab-height:40px;
  $active-color: #afe7d7;
  .tabs-head{
    position: relative;
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    >.line{
      position: absolute;
      bottom: 0;
      border-bottom:1px solid $active-color ;
      transition:all 350ms;
    }
    > .actions-wrapper{
      margin-left: auto;
    }
  }
</style>