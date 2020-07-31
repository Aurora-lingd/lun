<template>
  <div>
    <div class="style">
      <div class="style"><b>预览样式</b></div>
      <w-button-group>
        <w-button icon="left">上一页</w-button>
        <w-button>更多</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
      </w-button-group>
    </div>
    <div class="style">
      <div><b>使用方法</b></div>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>
<script>
  import ButtonGroup from '../../../src/button-group'
  import Button from '../../../src/button'
  export default {
    components:{'w-button-group':ButtonGroup,'w-button':Button},
    data(){
      return{
        content:`
      <w-button-group>
        <w-button icon="left">上一页</w-button>
        <w-button>更多</w-button>
        <w-button icon="right" icon-position="right">下一页</w-button>
      </w-button-group>
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