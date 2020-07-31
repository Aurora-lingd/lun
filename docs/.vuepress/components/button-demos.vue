<template>
  <div>
    <div class="style">
      <div class="style"><b>预览样式</b></div>
      <w-button>默认按钮</w-button>
      <w-button icon="settings">设置</w-button>
      <w-button :loading="true" >加载</w-button>
      <w-button icon="thumbs-up">点赞</w-button>
      <w-button icon="upload">上传</w-button>
      <w-button icon="download" icon-position="right">下载</w-button>
      <w-button disabled>禁用</w-button>
    </div>
    <div class="style">
      <div><b>使用方法</b></div>
      <pre><code>{{content}}</code></pre>
    </div>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components:{'w-button':Button},
    data(){
      return{
        content:`
        <w-button>默认按钮</w-button>
      <w-button icon="settings">设置</w-button>
      <w-button :loading="true" >加载</w-button>
      <w-button icon="thumbs-up">点赞</w-button>
      <w-button icon="upload">上传</w-button>
      <w-button icon="download" icon-position="right">下载</w-button>
      <w-button disabled>禁用</w-button>
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