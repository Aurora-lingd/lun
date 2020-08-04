import Button from "../../src/button";

import chai,{expect} from 'chai'
import sinon from "sinon";
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
import {shallowMount,mount} from "@vue/test-utils";
import Vue from 'vue'
import Row from '../../src/row'
import Col from '../../src/col'
import Collapse from "../../src/collapse";
Vue.component('w-col',Col)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it('存在.', () => {
    expect(Row).to.exist
  })
  // it('接受 selected.', () => {
  //   const wrapper = mount(Collapse,{
  //     slots:{
  //       default:{template:`
  //       <div>
  //       <w-collapse-item title="标题1" name="1"><span id="content-1">1</span></w-collapse-item>
  //       <w-collapse-item title="标题2" name="2"><span id="content-2">2</span></w-collapse-item>
  //       <w-collapse-item title="标题3" name="3"><span id="content-3">3</span></w-collapse-item>
  //     </div>
  //       `}
  //     },
  //     propsData:{
  //       selected:['1','2']
  //     }
  //   })
  //   const vm = wrapper.vm
  //   vm.$nextTick(()=>{
  //     expect(vm.$el.querySelector('#content-1')).to.exist
  //     expect(vm.$el.querySelector('#content-2')).to.exist
  //     expect(vm.$el.querySelector('#content-3')).to.not.exist
  //   })
  // })
  describe('props',()=>{
    xit('接收 gutter',()=>{
        const wrapper = mount(Row,{
          slots:{
            default:{template:`
          <div>
          <w-col span="12"></w-col>
            <w-col span="12"></w-col>      
         </div>    
                  
            `}
          },
          propsData:{
            gutter:'20'
          }
        })
        const vm = wrapper.vm
        const row = vm.$el.querySelector('.row')
        const cols = vm.$el.querySelectorAll('.col')
        vm.$nextTick(()=>{
          expect(getComputedStyle(row).marginLeft).to.eq('-10px')
          expect(getComputedStyle(row).marginRight).to.eq('-10px')
          expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
          expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
        })
    })

    xit('接收 align属性 ', () => {
      const wrapper = mount(Col,{
        propsData:{
          align: 'center',
        }
      })
      const useElement = wrapper.vm.$el
      expect(getComputedStyle(useElement).justifyContent).to.eq('center')
    })

  })
})