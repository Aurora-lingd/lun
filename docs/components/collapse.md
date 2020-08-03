---
title:Tabs - 标签
---

# Collapse 手风琴

## 功能介绍
可折叠、展示对应内容

* **title**: 设置标题内容，必须填。

* **selected**: 设置默认展示的内容，参数为数组形式。

* **name**：用来辅助selected，控制的选项，必须填。

* **single**：设置展示区域是否为只能单选。


## 常用例子
<br>

**预览样式**

<ClientOnly>
<collapse-demos1></collapse-demos1>
</ClientOnly>

<br>

**使用方法**
```html
data(){
  return{
    selectedTab:['1','2']
  }
}
<w-collapse :selected.sync="selectedTab">
  <w-collapse-item title=发现 name="1">发现相关内容</w-collapse-item>
  <w-collapse-item title="消息" name="2">消息相关内容</w-collapse-item>
  <w-collapse-item title="通讯" name="3">通讯相关内容</w-collapse-item>
</w-collapse>
```
## 设置single
<br>

**预览样式**

<ClientOnly>
<collapse-demos2></collapse-demos2>
</ClientOnly>

<br>

**使用方法**
```html
data(){
  return{
    selectedTab:['1']
  }
}
<w-collapse :selected.sync="selectedTab" single>
  <w-collapse-item title=发现 name="1">发现相关内容</w-collapse-item>
  <w-collapse-item title="消息" name="2">消息相关内容</w-collapse-item>
  <w-collapse-item title="通讯" name="3">通讯相关内容</w-collapse-item>
</w-collapse>
```