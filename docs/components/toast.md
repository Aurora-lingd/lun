---
title:Toast 提示
---

# Toast 提示

## 功能介绍
用于消息提示，点击按钮后可提示信息。参数一：为提示的文字，参数二：可选项。

**可选项功能**
* **position** :设置提示信息位置，默认为`top`，参数有 `top`、`middle`、`bottom`

* **autoClose** :设置提示信息是否自动关闭，默认 5s 自动关闭，参数可设置 `fase`关闭、数字（几秒后关闭）

* **closeButton** :设置提示信息按钮文字和回调，默认文字为关闭，参数一：`text`设置文字，参数二：`callback`回调函数

* **enableHtml** :设置是否可写html格式，默认为false，参数为`Boolean`


## 常用例子
<br>

**预览样式**

<ClientOnly>
<toast-demos1></toast-demos1>
</ClientOnly>

<br>

**使用方法**
```html
methods:{
    showToast(position){
      this.$toast('你好呀',{
        position,
      })
    },
  }
<w-button @click="showToast('top')">上方弹出</w-button>
<w-button @click="showToast('middle')">中间弹出</w-button>
<w-button @click="showToast('bottom')">下发弹出</w-button>
```
## 设置关闭按钮
<br>

**预览样式**

<ClientOnly>
<toast-demos2></toast-demos2>
</ClientOnly>

<br>

**使用方法**
```html
methods: {
  showToast() {
    this.$toast('电磁电量仅剩10%，请连接充电器', {
      autoClose:8,
      closeButton:{
        text:'知道了',
        callback:()=>{console.log('他知道了')}
      },
    })
  },
}
<w-button @click="showToast('top')">上方弹出</w-button>
```
## 设置html
<br>

**预览样式**

<ClientOnly>
<toast-demos3></toast-demos3>
</ClientOnly>

<br>

**使用方法**
```html
methods: {
      showToast() {
        this.$toast('<strong>加粗提醒</strong>', {
          autoClose:false,
          enableHtml:true,
          closeButton:{
            text:'OK',
          },
        })
      },
    }

<w-button @click="showToast('top')">上方弹出</w-button>
```
