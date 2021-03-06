
import Popover from '../../src/popover'
import chai,{expect} from 'chai'
import sinon from "sinon";
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import Vue from "vue";
import {shallowMount,mount} from "@vue/test-utils";
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('可以设置position.', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('button').trigger('click')
    const vm = wrapper.vm
    vm.$nextTick(()=>{
      let classes = wrapper.find('.content-wrapper').classes()
      expect(classes).to.include('position-bottom')
    })
  })
  it('可以设置 trigger', () => {
    const wrapper = mount(Popover, {
      slots: {
        default: {template: `<button>点我</button>`},
        content: '<div>弹出内容</div>'
      },
      propsData: {
        position: 'bottom',
        trigger: 'hover'
      }
    })
    const vm = wrapper.vm
    expect(wrapper.find('.content-wrapper').element).to.not.exist
    wrapper.find('.popover').trigger('mouseenter')
    vm.$nextTick(()=>{
      expect(wrapper.find('.content-wrapper').element).to.exist
    })
  })

})
