---
title:Grid  网格
---

# Grid 网格

## 功能介绍
Grid网格布局，分为24小格，可满足不同需求。
* **span** ： 设置跨度的多少

* **gutter** ： 设置每个网格之间的间隔

* **offset** ： 设置单独网格左侧的空格

* **alight** ： 设置布局对齐方式`left` `right` `center`

* 提供响应式布局，默认为手机布局，`:ipad`、`:narrow-pc`、`:pc`、`:wide-pc`

## 常用例子
<br>

**预览样式**

<ClientOnly>
<grid-demos1></grid-demos1>
</ClientOnly>

<br>

**使用方法**
```html
<style>
*{
  box-sizing: border-box;
}
</style>

<w-row class="rowDemo">
  <w-col span="8">
    <div class="colDemo">8</div>
  </w-col>
  <w-col span="8">
    <div class="colDemo">8</div>
  </w-col>
  <w-col span="8"><div class="colDemo">8</div>
  </w-col>
</w-row>

<w-row class="rowDemo">
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
</w-row>

<w-row class="rowDemo">
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
</w-row>

<w-row class="rowDemo">
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
</w-row>
```

## 设置gutter
<br>

**预览样式**

<ClientOnly>
<grid-demos2></grid-demos2>
</ClientOnly>

<br>

**使用方法**
```html
<style>
*{
  box-sizing: border-box;
}
</style>

<w-row class="rowDemo" gutter="10">
  <w-col span="8">
    <div class="colDemo">8</div>
  </w-col>
  <w-col span="8">
    <div class="colDemo">8</div>
  </w-col>
  <w-col span="8">
    <div class="colDemo">8</div>
  </w-col>
</w-row>

<w-row class="rowDemo" gutter="10">
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
</w-row>
```

## 设置offset
<br>

**预览样式**

<ClientOnly>
<grid-demos3></grid-demos3>
</ClientOnly>

<br>

**使用方法**

```html
<style>
*{
  box-sizing: border-box;
}
</style>

<w-row class="rowDemo">
  <w-col span="8">
    <div class="colDemo">8</div>
  </w-col>
  <w-col span="8" offset="8">
    <div class="colDemo">8</div>
  </w-col>
</w-row>

<w-row class="rowDemo" gutter="10">
  <w-col span="6" offset="6">
    <div class="colDemo" >6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
</w-row>

<w-row class="rowDemo">
  <w-col span="4" >
    <div class="colDemo" >4</div>
  </w-col>
  <w-col span="4" offset="4">
    <div class="colDemo">4</div>
  </w-col>
  <w-col span="4" >
    <div class="colDemo" >4</div>
  </w-col>
  <w-col span="4" offset="4" >
    <div class="colDemo" >4</div>
  </w-col>
</w-row>

<w-row class="rowDemo" gutter="10">
  <w-col span="2" offset="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="2" offset="2">
    <div class="colDemo">2</div>
  </w-col>
</w-row>
```

## 设置align
<br>

**预览样式**

<ClientOnly>
<grid-demos4></grid-demos4>
</ClientOnly>

<br>

**使用方法**

```html
<style>
*{
  box-sizing: border-box;
}
</style>

<w-row class="rowDemo" align="left">
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
</w-row>

<w-row class="rowDemo" align="center">
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
</w-row>

<w-row class="rowDemo" align="right">
  <w-col span="2">
    <div class="colDemo">2</div>
  </w-col>
  <w-col span="4">
    <div class="colDemo">4</div>
  </w-col>
  <w-col span="6">
    <div class="colDemo">6</div>
  </w-col>
  <w-col span="8">
    <div class="colDemo">8</div>
  </w-col>
</w-row>
```






<script>
  import GridDemos4 from "../.vuepress/components/grid-demos4";
  export default {
    components: {GridDemos4}
  }
</script>

## 响应式布局
<br>

**预览样式**

<ClientOnly>
<grid-demos5></grid-demos5>
</ClientOnly>

<br>

**使用方法**
```html
<style>
*{
  box-sizing: border-box;
}
</style>

<w-row class="rowDemo" align="left">
  <w-col span="24" :ipad={span:6}  :pc="{span:8}">
    <div class="colDemo">24/6/8 </div>
  </w-col>
  <w-col span="24" :ipad={span:12}  :pc="{span:8}">
    <div class="colDemo">24/12/8</div>
  </w-col>
  <w-col w-col span="24" :ipad={span:6}  :pc="{span:8}">
    <div class="colDemo">24/6/8</div>
  </w-col>
</w-row>
```