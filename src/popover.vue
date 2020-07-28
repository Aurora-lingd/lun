<template>
  <div class="popover" @click.stop="xxx">
    <div class="content-wrapper" v-if="visible" @click.stop >
      <slot name="content" ></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "WeiPopover",
    data(){
      return {visible:false}
    },
    methods:{
      xxx(){
        this.visible = !this.visible
        console.log(`${!this.visible} 切换${this.visible}`)
        if (this.visible === true){
          setTimeout(()=>{
            console.log('监听');
            let eventHandler = ()=>{
              this.visible =false
              console.log(`document 隐藏`)
              document.removeEventListener('click',eventHandler)
              console.log('删除');
            }
            document.addEventListener('click',eventHandler)
          })
        }else {
          console.log('vm 隐藏')
        }

      }
    }
  }
</script>

<style lang='scss' scoped>
.popover{
  display:inline-block;
  vertical-align: top;
  position: relative;
  .content-wrapper{
    position: absolute;
    bottom:100%;
    left: 0;
    border: 1px solid darksalmon;
    box-shadow: 0 0 3px rgba(0,0,0,.5);
  }
}
</style>