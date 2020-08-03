<template>
  <div>
    <w-input value="您好" v-model="value"></w-input>
    <div class="style">value: {{value}}</div>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components:{'w-input':Input},
    data(){
      return{
        value:'您好',
      }
    }
  }
</script>
<style lang="scss" scoped>
  .style{
    padding: 16px 0;
  }
</style>