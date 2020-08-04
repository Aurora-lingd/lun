
//import Vue from 'vue'
import Col from '../../src/col'
import chai,{expect} from 'chai'
import sinon from "sinon";
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import Vue from "vue";
import {shallowMount,mount} from "@vue/test-utils";
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col',()=>{
  it('存在.', () => {
    expect(Col).to.exist
  })
  describe('props',()=>{
    it('接收 span 属性',()=>{
      const wrapper = mount(Col,{
        propsData: {
          span: 1,
        }
      })
      const vm = wrapper.vm
      expect(vm.$el.classList.contains('col-1')).to.eq(true)
    })
    it('接收 offset 属性',()=>{
      const wrapper = mount(Col,{
        propsData: {
          offset: 1,
        }
      })
      const vm = wrapper.vm
      const element = vm.$el
      expect(element.classList.contains('offset-1')).to.eq(true)
    })
    it('接收 pc 属性',()=>{
      const wrapper = mount(Col,{
        propsData: {
          pc: {span:1,offset:2},
        }
      })
      const vm = wrapper.vm
      const element = vm.$el
      expect(element.classList.contains('col-pc-1')).to.eq(true)
      expect(element.classList.contains('offset-pc-2')).to.eq(true)
    })
    it('接收 ipad 属性',()=>{
      const wrapper = mount(Col,{
        propsData: {
          ipad: {span:1,offset:2},
        }
      })
      const vm = wrapper.vm
      const element = vm.$el
      expect(element.classList.contains('col-ipad-1')).to.eq(true)
      expect(element.classList.contains('offset-ipad-2')).to.eq(true)
    })
    it('接收 narrowPc 属性',()=>{
      const wrapper = mount(Col,{
        propsData: {
          narrowPc: {span:1,offset:2},
        }
      })
      const vm = wrapper.vm
      const element = vm.$el
      expect(element.classList.contains('col-narrowPc-1')).to.eq(true)
      expect(element.classList.contains('offset-narrowPc-2')).to.eq(true)
    })
    it('接收 pc 属性',()=>{
      const wrapper = mount(Col,{
        propsData: {
          pc: {span:1,offset:2},
        }
      })
      const vm = wrapper.vm
      const element = vm.$el
      expect(element.classList.contains('col-pc-1')).to.eq(true)
      expect(element.classList.contains('offset-pc-2')).to.eq(true)
    })
    it('接收 widePc 属性',()=>{
      const wrapper = mount(Col,{
        propsData: {
          widePc: {span:1,offset:2},
        }
      })
      const vm = wrapper.vm
      const element = vm.$el
      expect(element.classList.contains('col-widePc-1')).to.eq(true)
      expect(element.classList.contains('offset-widePc-2')).to.eq(true)
    })
  })
})