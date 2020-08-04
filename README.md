# 微光 - 一个Vue UI组件

[![Build Status](https://www.travis-ci.org/Aurora-lingd/lun.svg?branch=master)](https://www.travis-ci.org/Aurora-lingd/lun)

## 介绍

这是我在学习 Vue 的过程中做的一个 UI 框架，希望对你有用。


## 开始使用

1. 添加 CSS 样式

    使用本框架前，请在 CSS 中开启 border-box
    
    ```
    *,*::before,*::after{box-sizing:border-box;}
    ```
>    IE 8 及以上浏览器都支持此样式。

2.  安装 weiguang
    ```sh
    npm install weiguang
    //或者
    yarn add weiguang
    ```
3. 引入组件

<br>

* **全局引入**

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

<br>

* **组件引用**
```js
import {Button,ButtonGroup,Row,Col,Header,Footer,Content,Sider,Layout,Icon,Input,Toast,plugin,Tabs,TabsHead,TabsBody,TabsItem,TabsPane,Collapse,CollapseItem,Popover} from 'weiguang'
import 'weiguang/dist/weiGuang.css'

export default {
 components: {
    'w-button':Button,
    'w-icon':Icon,
    'w-button-group': ButtonGroup,
    'w-input':Input,
    ...    
 }
}
```

## 文档

## 题问

## 变更记录

## 联系方式

## 贡献代码
