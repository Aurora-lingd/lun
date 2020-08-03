<template>
  <div>
      <w-button>默认按钮</w-button>
      <w-button icon="settings">设置</w-button>
      <w-button :loading="true" >加载</w-button>
      <w-button icon="thumbs-up">点赞</w-button>
      <w-button icon="upload">上传</w-button>
      <w-button icon="download" icon-position="right">下载</w-button>
      <w-button disabled>禁用</w-button>
    </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components:{'w-button':Button},
  }
</script>
