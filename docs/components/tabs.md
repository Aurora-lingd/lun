---
title:Tabs - 标签
---

# Tabs 标签页

## 功能介绍
可根据标签选择对应的内容

* **selected**: 设置默认的选项，必须填。

* **name**：用来关联对应内容的，必须填。

* **disabled**：设置禁用的选项


## 常用例子
<br>

**预览样式**

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

<br>

**使用方法**
```html
data(){
  return{
    selected:'2',
  }
}
<w-tabs :selected="selected">
<w-tabs-head>
  <w-tabs-item name="1" disabled>标题1</w-tabs-item>
  <w-tabs-item name="2">标题2</w-tabs-item>
  <w-tabs-item name="3">标题3</w-tabs-item>
</w-tabs-head>
 <w-tabs-body>
   <w-tabs-pane name="1">标题1相关内容</w-tabs-pane>
   <w-tabs-pane name="2">标题2相关内容</w-tabs-pane>
   <w-tabs-pane name="3">标题3相关内容</w-tabs-pane>
 </w-tabs-body>
</w-tabs>
```

