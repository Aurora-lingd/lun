---
title:Layout - 布局
---

# 布局

## 功能介绍
提供整个网页的布局方式，方便快速搭建页面结构，在`sider`侧边栏可设置按钮，动画宽度需手动设置。

## 常用例子
<br>

**预览样式**

<ClientOnly>
<layout-demos1></layout-demos1>
</ClientOnly>

<br>

**使用方法**
```html
<w-layout>
  <w-header style="height: 50px;background: #f3dc9f">header</w-header>
  <w-content style="height: 100px;background: #f6b57c">content</w-content>
  <w-footer style="height: 50px;background: #f3dc9f">footer</w-footer>
</w-layout>
```
## 内部分栏
<br>

**预览样式**

<ClientOnly>
<layout-demos2></layout-demos2>
</ClientOnly>

<br>

**使用方法**
```html
<w-layout>
  <w-header style="height: 50px;background: #e3dfc8">header</w-header>
  <w-layout>
    <w-sider style="height: 100px;background: #96bb7c;width: 200px" >sider</w-sider>
    <w-content style="height: 100px;background: #f6b57c">content</w-content>
  </w-layout>
  <w-footer style="height: 50px;background: #f3dc9f">footer</w-footer>
</w-layout>
```
## 左右分栏
<br>

**预览样式**

<ClientOnly>
<layout-demos3></layout-demos3>
</ClientOnly>

<br>

**使用方法**
```html
<style>
  .slide-enter,.slide-leave-to{
    margin-left: -150px;
  }
</style>

<w-layout style="overflow: hidden">
  <w-sider style="background: #96bb7c;width: 150px" button>sider</w-sider>
  <w-layout>
    <w-header style="height: 50px;background: #e3dfc8">header</w-header>
    <w-content style="height: 100px;background: #f6b57c">content</w-content>
    <w-footer style="height: 50px;background: #f3dc9f">footer</w-footer>
  </w-layout>
</w-layout>
```

