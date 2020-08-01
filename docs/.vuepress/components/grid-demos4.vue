<template>
  <div>
    <w-row class="rowDemo" align="left">
      <w-col span="4">
        <div class="colDemo">4</div>
      </w-col>
      <w-col span="4">
        <div class="colDemo">4</div>
      </w-col>
      <w-col span="4">
        <div class="colDemo">4</div>
      </w-col>
    </w-row>

    <w-row class="rowDemo" align="center">
      <w-col span="6">
        <div class="colDemo">6</div>
      </w-col>
      <w-col span="6">
        <div class="colDemo">6</div>
      </w-col>
      <w-col span="6">
        <div class="colDemo">6</div>
      </w-col>
    </w-row>

    <w-row class="rowDemo" align="right">
      <w-col span="2">
        <div class="colDemo">2</div>
      </w-col>
      <w-col span="4">
        <div class="colDemo">4</div>
      </w-col>
      <w-col span="6">
        <div class="colDemo">6</div>
      </w-col>
      <w-col span="8">
        <div class="colDemo">8</div>
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