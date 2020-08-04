//import Vue from 'vue'
import Collapse from '../../src/collapse'
import CollapseItem from '../../src/collapse-item'
import chai,{expect} from 'chai'
import sinon from "sinon";
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import Vue from "vue";
import {shallowMount,mount} from "@vue/test-utils";
Vue.component('w-collapse-item',CollapseItem)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
  it('存在.', () => {
    expect(Collapse).to.exist
  })
  it('接受 selected.', () => {
    const wrapper = mount(Collapse,{
      slots:{
        default:{template:`
        <div>
        <w-collapse-item title="标题1" name="1"><span id="content-1">1</span></w-collapse-item>
        <w-collapse-item title="标题2" name="2"><span id="content-2">2</span></w-collapse-item>
        <w-collapse-item title="标题3" name="3"><span id="content-3">3</span></w-collapse-item>
      </div> 
        `}
      },
      propsData:{
        selected:['1','2']
      }
    })
    const vm = wrapper.vm
    vm.$nextTick(()=>{
      expect(vm.$el.querySelector('#content-1')).to.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
    })
  })

  it('接受 single', (done) => {
    const wrapper = mount(Collapse,{
      slots:{
        default:{template:`
        <div>
        <w-collapse-item title="标题1" name="1"><span id="content-1">1</span></w-collapse-item>
        <w-collapse-item title="标题2" name="2"><span id="content-2">2</span></w-collapse-item>
        <w-collapse-item title="标题3" name="3"><span id="content-3">3</span></w-collapse-item>
      </div> 
        `}
      },
      propsData:{
        selected:['1'],
        single:true
      }
    })
    const vm = wrapper.vm
    wrapper.find('[data-name="2"]').trigger('click')
    vm.$nextTick(()=>{
      expect(vm.$el.querySelector('#content-1')).to.not.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      done()
    })

  })

  xit('触发 update:selected', () => {
    const callback = sinon.fake();
    const wrapper = mount(Collapse,{
      slots:{
        default:{template:`
        <div>
        <w-collapse-item title="标题1" name="1"><span id="content-1">1</span></w-collapse-item>
        <w-collapse-item title="标题2" name="2"><span id="content-2">2</span></w-collapse-item>
        <w-collapse-item title="标题3" name="3"><span id="content-3">3</span></w-collapse-item>
      </div> 
        `}
      },
      propsData:{
        selected:['1'],
      },
      methods:{
        onSelect:callback
      }
    })
    const vm = wrapper.vm
    wrapper.find('[data-name="2"]').trigger('click')
      vm.$nextTick(()=>{
        expect(callback).to.have.been.called
      })

    // const callback = sinon.fake();
    // const vm = new Vue({
    //   el:div,
    //   data:{
    //     xxx:['1']
    //   },
    //   methods:{
    //     onSelect:callback
    //   }
    // })
    // vm.$nextTick(()=>{
    //   vm.$el.querySelector('[data-name="2"]').click()
    //   vm.$nextTick(()=>{
    //     expect(callback).to.have.been.called
    //     done()
    //   })
    // })
  })

})