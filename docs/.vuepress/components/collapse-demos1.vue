<template>
  <div>
    <w-collapse :selected.sync="selectedTab">
      <w-collapse-item title=发现 name="1">发现相关内容</w-collapse-item>
      <w-collapse-item title="消息" name="2">消息相关内容</w-collapse-item>
      <w-collapse-item title="通讯" name="3">通讯相关内容</w-collapse-item>
    </w-collapse>
  </div>
</template>
<script>
  import Collapse from '../../../src/collapse'
  import CollapseItem from '../../../src/collapse-item'
  export default {
    components: {
      'w-collapse':Collapse,
      'w-collapse-item':CollapseItem,
    },
    data(){
      return{
        selectedTab:['1','2']
      }
    }
  }
</script>
