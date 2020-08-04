---
title:快速上手
---

# 快速上手


## 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

```css
*,*::before,*::after{box-sizing:border-box;}
```

> IE 8 及以上浏览器都支持此样式。

##  引用

### 全局引入
```js
import {Button,ButtonGroup,Row,Col,Header,Footer,Content,Sider,Layout,Icon,Input,Toast,plugin,Tabs,TabsHead,TabsBody,TabsItem,TabsPane,Collapse,CollapseItem,Popover} from 'weiguang'
import 'weiguang/dist/weiGuang.css'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row', Row)
Vue.component('w-col', Col)
Vue.component('w-layout', Layout)
Vue.component('w-header', Header)
Vue.component('w-footer', Footer)
Vue.component('w-sider', Sider)
Vue.component('w-content', Content)
Vue.component('w-tabs', Tabs)
Vue.component('w-tabs-head', TabsHead)
Vue.component('w-tabs-body', TabsBody)
Vue.component('w-tabs-item', TabsItem)
Vue.component('w-tabs-pane', TabsPane)
Vue.component('w-popover', Popover)
Vue.component('w-collapse', Collapse)
Vue.component('w-collapse-item', CollapseItem)
```
<br>

<font color=red size=4>⚠️ 注意：使用 `Toast` 组件，需要这样引用</font>

```js
import {Plugin} from 'weiguang'
Vue.use(Plugin)
```

### 组件引用
```js
 import {Button,Icon,ButtonGroup,Input...} from "weiguang";
export default {
  components: {
      'w-button':Button,
      'w-icon': Icon,
      'w-button-group': ButtonGroup,
      'w-input':Input,
      ...
    },
}
```




