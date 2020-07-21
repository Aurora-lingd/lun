<template>
  <svg class="w-icon">
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>
<script>
  import './svg'
  export default {
    name:'WeiIcon',
    props:['name']
  }
</script>
<style lang="scss" scoped>
  .w-icon {
    width: 1em;
    height: 1em;
  }
</style>