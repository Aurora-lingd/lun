<template>
  <div>
    <w-layout>
      <w-header style="height: 50px;background: #e3dfc8">header</w-header>
      <w-layout>
        <w-sider style="height: 100px;background: #96bb7c;width: 200px" >sider</w-sider>
        <w-content style="height: 100px;background: #f6b57c">content</w-content>
      </w-layout>
      <w-footer style="height: 50px;background: #f3dc9f">footer</w-footer>
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
