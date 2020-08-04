<template>
  <div>
    <w-collapse :selected.sync="selectedTab" single>
      <w-collapse-item title="标题1" name="1">11</w-collapse-item>
      <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
      <w-collapse-item title="标题3" name="3">内容3</w-collapse-item>
    </w-collapse>
    <w-button icon="settings">111</w-button>
    {{selectedTab}}
    <w-button disabled>默认按钮</w-button>
    <w-tabs :selected="selected">
      <w-tabs-head>
        <w-tabs-item name="1">标题1</w-tabs-item>
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
  import Button from './button'
  import Icon from './icon'
  import ButtonGroup from './button-group'
  import Input from './input'
  import Row from './row'
  import Col from './col'
  import Layout from './layout'
  import Content from './content'
  import Footer from './footer'
  import Header from './header'
  import Sider from './sider'
  import Toast from './toast'
  import plugin from './plugin'
  import Tabs from './tabs'
  import TabsHead from './tabs-head'
  import TabsItem from './tabs-item'
  import TabsBody from './tabs-body'
  import TabsPane from './tabs-pane'
  import Popover from './popover'
  import Collapse from './collapse'
  import CollapseItem from './collapse-item'
  import x from '../dist/myLib.umd'
  console.log(x)

  export default {
    name: 'App',
    components: {
      'w-button': Button,
      'w-icon': Icon,
      'w-button-group': ButtonGroup,
      'w-input': Input,
      'w-row': Row,
      'w-col': Col,
      'w-layout': Layout,
      'w-content': Content,
      'w-footer': Footer, 'w-collapse': Collapse,
      'w-collapse-item': CollapseItem,
      'w-tabs': Tabs,
      'w-tabs-head': TabsHead,
      'w-tabs-item': TabsItem,
      'w-tabs-body': TabsBody,
      'w-tabs-pane': TabsPane,
      'w-popover': Popover
    },
    data() {
      return {
        selected: '1',
        selectedTab: ['2', '1']
      }
    },
    created() {
    },
    methods: {
      showToast(position) {
        this.$toast('你好呀', {
          position,
        })
      },
    }
  }
</script>