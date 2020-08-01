<template>
  <div>
    <w-row class="rowDemo" align="left">
      <w-col span="24" :ipad={span:6}  :pc="{span:8}">
        <div class="colDemo">24/6/8 </div>
      </w-col>
      <w-col span="24" :ipad={span:12}  :pc="{span:8}">
        <div class="colDemo">24/12/8</div>
      </w-col>
      <w-col w-col span="24" :ipad={span:6}  :pc="{span:8}">
        <div class="colDemo">24/6/8</div>
      </w-col>
    </w-row>

  </div>
</template>
<script>
  import Row from '../../../src/row'
  import Col from '../../../src/col'

  export default {
    components: {'w-row': Row, 'w-col': Col},
  }
</script>
<style lang="scss" scoped>
  * {
    box-sizing: border-box
  }

  .rowDemo {
    margin: 10px 0;
  }

  .colDemo {
    background: #f6d284;
    height: 50px;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;
  }
</style>