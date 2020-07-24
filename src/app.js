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

new Vue({
  el:'#app',
  data:{
    loading1:false,
    message:'hi'
  },
  created() {
  },
  methods:{
    showToast(position){
      this.$toast('你好呀',{
        position,
        enableHtml: false,
        autoClose: false
      })
    },
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
      this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    }
  }
})

