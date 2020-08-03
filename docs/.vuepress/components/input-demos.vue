<template>
  <div>
    <div class="style">
      <div class="style"><b>预览样式</b></div>
      <w-input value="您好"></w-input>
      <w-input value="您好" readonly></w-input>
      <w-input value="您好" disabled></w-input>
      <w-input value="您好" error="错误"></w-input>
    </div>
    <div class="style">
      <div><b>使用方法</b></div>
      <pre><code>{{content1}}</code></pre>
    </div>
    <h2>双向绑定</h2>
    <div>
      <div class="style"><b>预览样式</b></div>
      <w-input value="您好" v-model="value"></w-input>
      <div class="style">value: {{value}}</div>
    </div>
    <div class="style">
      <div><b>使用方法</b></div>
      <pre><code>{{content2}}</code></pre>
    </div>
  </div>
</template>
<script>
  import Input from '../../../src/input'
  export default {
    components:{'w-input':Input},
    data(){
      return{
        content1:`
      <w-input value="您好"></w-input>
      <w-input value="您好" readonly></w-input>
      <w-input value="您好" disabled></w-input>
      <w-input value="您好" error="错误"></w-input>
        `.replace(/\t+| +/g,'').trim(),
        value:'您好',
        content2:`
      data:{
        value:'您好'
      }
      <w-input value="您好" v-model="value"></w-input>
      <div>value: {{value}}</div>
        `.replace(/\t+| +/g,'').trim(),
      }
    }
  }
</script>
<style lang="scss" scoped>
  .style{
    padding: 16px 0;
  }
</style>