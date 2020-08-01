<template>
  <div>
   <w-tabs :selected="selected">
    <w-tabs-head>
      <w-tabs-item name="1" disabled>标题1</w-tabs-item>
      <w-tabs-item name="2">标题2</w-tabs-item>
      <w-tabs-item name="3">标题3</w-tabs-item>
    </w-tabs-head>
     <w-tabs-body>
       <w-tabs-pane name="1">标题1相关内容</w-tabs-pane>
       <w-tabs-pane name="2">标题2相关内容</w-tabs-pane>
       <w-tabs-pane name="3">标题3相关内容</w-tabs-pane>
     </w-tabs-body>
   </w-tabs>
  </div>
</template>
<script>
  import Tabs from '../../../src/tabs'
  import TabsBody from '../../../src/tabs-body'
  import TabsHead from '../../../src/tabs-head'
  import TabsItem from '../../../src/tabs-item'
  import TabsPane from '../../../src/tabs-pane'
  export default {
    components: {
      'w-tabs':Tabs,
      'w-tabs-head':TabsHead,
      'w-tabs-body':TabsBody,
      'w-tabs-item':TabsItem,
      'w-tabs-pane':TabsPane,
    },
    data(){
      return{
        selected:'2',
      }
    }
  }
</script>
