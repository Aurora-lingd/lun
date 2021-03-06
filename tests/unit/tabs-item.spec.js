import TabsHead from "../../src/tabs-head";
import Collapse from '../../src/collapse'
import CollapseItem from '../../src/collapse-item'
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

Vue.component('w-tabs',Tabs)
Vue.component('w-tabs-head',TabsHead)
Vue.component('w-tabs-item',TabsItem)
Vue.component('w-tabs-body',TabsBody)
Vue.component('w-tabs-pane',TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  it('存在.', () => {
    expect(TabsItem).to.exist
  })
  it('接受 name 属性', () => {
    const  Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData:{
        name:'xxx'
      }
    }).$mount()
      expect(vm.$el.getAttribute('data-name')).to.eq('xxx');
  })
  it('disabled属性', () => {
    const  Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData:{
        disabled:true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true;
    const callback = sinon.fake()
    vm.$on('click',callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })

  //   it('可以接受 direction prop', function () {
  //
  //   });
  // })
})