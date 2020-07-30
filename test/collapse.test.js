const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'
import CollapseItem from  '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
  it('存在.', () => {
    expect(Collapse).to.exist
  })
  it('接受 selected.', (done) => {
    Vue.component('w-collapse',Collapse)
    Vue.component('w-collapse-item',CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
  <w-collapse :selected.sync="xxx" >
    <w-collapse-item title="标题1" name="1"><span id="content-1">1</span></w-collapse-item>
    <w-collapse-item title="标题2" name="2"><span id="content-2">2</span></w-collapse-item>
    <w-collapse-item title="标题3" name="3"><span id="content-3">3</span></w-collapse-item>
  </w-collapse>
      `
    const vm = new Vue({
      el:div,
      data:{
        xxx:['1','2']
      }
    })
    vm.$nextTick(()=>{
      expect(vm.$el.querySelector('#content-1')).to.exist
      expect(vm.$el.querySelector('#content-2')).to.exist
      expect(vm.$el.querySelector('#content-3')).to.not.exist
      done()
    })
  })

  it('接受 single', (done) => {
    Vue.component('w-collapse',Collapse)
    Vue.component('w-collapse-item',CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
  <w-collapse :selected.sync="xxx" single>
    <w-collapse-item title="标题1" name="1"><span id="content-1">1</span></w-collapse-item>
    <w-collapse-item title="标题2" name="2"><span id="content-2">2</span></w-collapse-item>
    <w-collapse-item title="标题3" name="3"><span id="content-3">3</span></w-collapse-item>
  </w-collapse>
      `
    const vm = new Vue({
      el:div,
      data:{
        xxx:['1']
      }
    })
    vm.$nextTick(()=>{
      vm.$el.querySelector('[data-name="2"]').click()
      vm.$nextTick(()=>{
        expect(vm.$el.querySelector('#content-1')).to.not.exist
        expect(vm.$el.querySelector('#content-2')).to.exist
        done()
      })
    })
  })

  it('触发 update:selected', (done) => {
    Vue.component('w-collapse',Collapse)
    Vue.component('w-collapse-item',CollapseItem)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
  <w-collapse :selected.sync="xxx" @update:selected="onSelect">
    <w-collapse-item title="标题1" name="1"><span id="content-1">1</span></w-collapse-item>
    <w-collapse-item title="标题2" name="2"><span id="content-2">2</span></w-collapse-item>
    <w-collapse-item title="标题3" name="3"><span id="content-3">3</span></w-collapse-item>
  </w-collapse>
      `
    const callback = sinon.fake();
    const vm = new Vue({
      el:div,
      data:{
        xxx:['1']
      },
      methods:{
        onSelect:callback
      }
    })
    vm.$nextTick(()=>{
      vm.$el.querySelector('[data-name="2"]').click()
      vm.$nextTick(()=>{
        expect(callback).to.have.been.called
        done()
      })
    })
  })

})