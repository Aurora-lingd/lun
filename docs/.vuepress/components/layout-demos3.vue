<template>
  <div>
    <w-layout style="overflow: hidden">
      <w-sider style="background: #96bb7c;width: 150px" button>sider</w-sider>
      <w-layout>
        <w-header style="height: 50px;background: #e3dfc8">header</w-header>
        <w-content style="height: 100px;background: #f6b57c">content</w-content>
        <w-footer style="height: 50px;background: #f3dc9f">footer</w-footer>
      </w-layout>
    </w-layout>
  </div>
</template>
<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Footer from '../../../src/footer'
  import Content from '../../../src/content'
  import Sider from '../../../src/sider'
  export default {
    components: {
      'w-layout':Layout,
      'w-header': Header,
      'w-footer': Footer,
      'w-content':Content,
      'w-sider':Sider
    },
  }
</script>
<style scoped>
  .slide-enter,.slide-leave-to{
    margin-left: -150px;
  }
</style>
