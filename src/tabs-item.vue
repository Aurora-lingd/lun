<template>
  <div class="tabs-item" @click="xxx" :class="classes" >
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
        return {active:this.active}
      }
    },
    created(){
      this.eventBus.$on('update:selected',(name)=>{
        this.active = name === this.name;
      })
    },
    methods:{
      xxx(){
        this.eventBus.$emit('update:selected',this.name,this)
      }
    }
  }

</script>
<style lang="scss" scoped>
  $active-color: #afe7d7;
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
  }
</style>