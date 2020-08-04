
import Input from '../../src/input'
import chai,{expect} from 'chai'
import sinon from "sinon";
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import Vue from "vue";
import {shallowMount,mount} from "@vue/test-utils";
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.exist
  })

  describe('props',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('接收 value',()=>{
      vm = new Constructor({
        propsData: {
          value: '哈哈'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('哈哈')
    })

    it('接收 disabled',()=>{
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })

    it('接收 readonly',()=>{
       vm = new Constructor({
        propsData: {
          readonly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })

    it('接收 error',()=>{
      vm = new Constructor({
        propsData: {
          error: '111'
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.message-error')
      expect(errorMessage.innerHTML).to.equal('111')
    })
  })
  describe('事件',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('支持 change/input/focus/blur事件',()=>{
      ['change','input','focus','blur']
        .forEach((eventName)=>{
          vm = new Constructor({}).$mount()
          const callback = sinon.fake();
          vm.$on(eventName,callback)
          let event = new Event(eventName)
          Object.defineProperty(
            event,'target',{
              value:{value:'hi'},enumerable:true
            }
          )
          let inputElement = vm.$el.querySelector('input')
          inputElement.dispatchEvent(event)
          expect(callback).to.have.been.calledWith('hi')
      })
    })
  })
})