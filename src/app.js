import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Content from './content'
import Footer from  './footer'
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

Vue.component('w-button',Button)
Vue.component('w-icon',Icon)
Vue.component('w-button-group',ButtonGroup)
Vue.component('w-input',Input)
Vue.component('w-row',Row)
Vue.component('w-col',Col)
Vue.component('w-layout',Layout)
Vue.component('w-content',Content)
Vue.component('w-footer',Footer)
Vue.component('w-header',Header)
Vue.component('w-sider',Sider)
Vue.component('w-toast',Toast)
Vue.use(plugin)
Vue.component('w-tabs',Tabs)
Vue.component('w-tabs-head',TabsHead)
Vue.component('w-tabs-item',TabsItem)
Vue.component('w-tabs-body',TabsBody)
Vue.component('w-tabs-pane',TabsPane)
Vue.component('w-popover',Popover)
Vue.component('w-collapse',Collapse)
Vue.component('w-collapse-item',CollapseItem)

new Vue({
  el:'#app',
  data:{
    selected:'1',
    selectedTab:['2','1']
  },
  created() {
  },
  methods:{
    showToast(position){
      this.$toast('你好呀',{
        position,
      })
    },
  }
})

