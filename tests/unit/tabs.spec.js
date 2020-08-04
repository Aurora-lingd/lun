import TabsHead from "../../src/tabs-head";

import chai,{expect} from 'chai'
import sinon from "sinon";
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import {shallowMount,mount} from "@vue/test-utils";

import Vue from 'vue'
import Tabs from '../../src/tabs'
import TabsItem from "../../src/tabs-item";
import TabsBody from "../../src/tabs-body";
import TabsPane from "../../src/tabs-pane";
import Collapse from "../../src/collapse";

Vue.component('w-tabs',Tabs)
Vue.component('w-tabs-head',TabsHead)
Vue.component('w-tabs-item',TabsItem)
Vue.component('w-tabs-body',TabsBody)
Vue.component('w-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
  it('接收 selected', () => {
    const wrapper = mount(Collapse,{
      slots:{
        default:{template:`
      <div>
        <w-tabs-head>
        <w-tabs-item name="yang">养生</w-tabs-item>
        <w-tabs-item name="weibo">微博</w-tabs-item>
       <w-tabs-item name="dou" disabled>抖音</w-tabs-item>
      </w-tabs-head>
      <w-tabs-body>
        <w-tabs-pane name="yang">养生相关资讯</w-tabs-pane>
        <w-tabs-pane name="weibo" disabled>微博相关资讯</w-tabs-pane>
        <w-tabs-pane name="dou">抖音相关资讯</w-tabs-pane>
      </w-tabs-body>
     </div>
        `}
      },
      propsData:{
        selected:"yang"
      }
    })
    const vm = wrapper.vm
    const x = vm.$el.querySelector(`.tabs-item[data-name="yang"]`);
    vm.$nextTick(()=>{
      expect(x.classList.contains('active')).to.be.true
    })
    // const x = vm.$el.querySelector(`.tabs-item[data-name="yang"]`);
    // vm.$nextTick(()=>{
    //   expect(x.classList.contains('active')).to.be.true
    // })
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   div.innerHTML=`
  //  <w-tabs selected="yang" >
  //   <w-tabs-head>
  //     <w-tabs-item name="yang">养生</w-tabs-item>
  //     <w-tabs-item name="weibo">微博</w-tabs-item>
  //     <w-tabs-item name="dou" disabled>抖音</w-tabs-item>
  //   </w-tabs-head>
  //   <w-tabs-body>
  //     <w-tabs-pane name="yang">养生相关资讯</w-tabs-pane>
  //     <w-tabs-pane name="weibo" disabled>微博相关资讯</w-tabs-pane>
  //     <w-tabs-pane name="dou">抖音相关资讯</w-tabs-pane>
  //   </w-tabs-body>
  // </w-tabs>
  //   `
  //  let vm = new Vue({
  //     el:div,
  //   })
  //   vm.$nextTick(()=>{
  //     const x = vm.$el.querySelector(`.tabs-item[data-name="yang"]`);
  //     expect(x.classList.contains('active')).to.be.true
  //     done()
  //   })

    it('可以接受 direction prop', function () {

    });
  })
})