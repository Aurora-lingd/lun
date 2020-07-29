const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
  it('存在.', () => {
    expect(Popover).to.exist
  })
  it('可以设置position.', (done) => {
    Vue.component('w-popover',Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
  <w-popover position="bottom" ref="a">
    <template slot="content">
      <div>弹出内容</div>
    </template>
    <button>下</button>
  </w-popover>
      `
    const vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      vm.$el.querySelector('button').click()
      vm.$nextTick(()=>{
        expect(vm.$refs.a.$refs.contentWrapper.classList.contains('position-bottom')).to.be.true;
        done()
      })
    })
  })

  xit('可设置 trigger', function (done) {
    Vue.component('w-popover',Popover)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
  <w-popover trigger="hover" ref="a">
    <template slot="content">
      <div>弹出内容</div>
    </template>
    <button>下</button>
  </w-popover>
      `
    const vm = new Vue({
      el:div
    })
    vm.$nextTick(()=>{
      const event = new Event('mouseenter')
      vm.$el.dispatchEvent(event)
      expect(vm.$refs.a.$refs.contentWrapper).to.exist
      done()
    })
  });
})