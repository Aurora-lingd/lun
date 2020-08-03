---
title:Popover 弹出层
---

# Popover 弹出层

## 功能介绍
点击按钮或鼠标hover时提示的信息

* **position**：设置弹出层的位置，默认为`top`，参数`top`、`bottom`、`left`、`right`

* **trigger**：设置触发方式，默认为`click`，参数`click`、`hover`

## 常用例子
<br>

**预览样式**

<ClientOnly>
<popover-demos1></popover-demos1>
</ClientOnly>

<br>

**使用方法**
```html
<w-popover>
  <w-button>上方弹出</w-button>
  <template slot="content">
    这是一段文字
  </template>
</w-popover>

<w-popover position="bottom">
  <w-button>下方弹出</w-button>
  <template slot="content">
    这是一段文字
  </template>
</w-popover>

<w-popover position="left">
  <w-button>左边弹出</w-button>
  <template slot="content">
    这是一段文字
  </template>
</w-popover>

<w-popover position="right">
  <w-button>右边弹出</w-button>
  <template slot="content">
    这是一段文字
  </template>
</w-popover>
```
## 设置触发方式为hover
<br>

**预览样式**

<ClientOnly>
<popover-demos2></popover-demos2>
</ClientOnly>

<br>

**使用方法**
```html
<w-popover trigger="hover">
  <w-button>上方弹出</w-button>
  <template slot="content">
    这是一段文字
  </template>
</w-popover>
<w-popover position="bottom"  trigger="hover">
  <w-button>下方弹出</w-button>
  <template slot="content">
    这是一段文字
  </template>
</w-popover>
<w-popover position="left"  trigger="hover">
  <w-button>左边弹出</w-button>
  <template slot="content">
    这是一段文字
  </template>
</w-popover>
<w-popover position="right"  trigger="hover">
  <w-button>右边弹出</w-button>
  <template slot="content">
    这是一段文字
  </template>
</w-popover>
```
