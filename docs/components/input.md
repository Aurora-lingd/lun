---
title:Input 输入框
---

# Input 输入框

## 功能介绍
输入框拥有四种状态，基本、禁用、错误、只读，可支持双向绑定

## 常用例子
<br>

**预览样式**

<ClientOnly>
<input-demos1></input-demos1>
</ClientOnly>

<br>

**使用方法**
```html
<w-input value="您好"></w-input>
<w-input value="您好" readonly></w-input>
<w-input value="您好" disabled></w-input>
<w-input value="您好" error="错误"></w-input>
```
## 双向绑定
<br>

**预览样式**

<ClientOnly>
<input-demos2></input-demos2>
</ClientOnly>

<br>

**使用方法**
```html
data:{
  value:'您好'
}
<w-input value="您好" v-model="value"></w-input>
<div>value: {{value}}</div>
```




