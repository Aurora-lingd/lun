<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'WeiTabsItem',
    inject:['eventBus'],
    data(){
      return{
        active:false
      }
    },
    props:{
      disabled:{
        type:Boolean,
        default:false
      },
      name:{
        type:[String,Number],
        required:true
      }
    },
    computed:{
      classes(){
        return {active:this.active,disabled: this.disabled}
      }
    },
    created(){
      if (this.eventBus){
        this.eventBus.$on('update:selected',(name)=>{
          this.active = name === this.name;
        })
      }
    },
    methods:{
      onClick(){
        if (this.disabled){return}
        this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
        this.$emit('click',this)
      }
    }
  }

</script>
<style lang="scss" scoped>
  $active-color: #afe7d7;
  $disabled-color: #b5b2b2;
  .tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      color: $active-color;
    }
    &.disabled{
      color: $disabled-color;
      cursor: not-allowed;
    }
  }
</style>