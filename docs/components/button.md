---
title:按钮 Button
---

# Button 按钮

## 功能介绍

提供了单个按钮和按钮组，可添加图标、设置图标位置功能
## 单个按钮
<br>

**预览样式**

<ClientOnly>
<button-demos></button-demos>
</ClientOnly>

<br>

**使用方法**
```html
<w-button>默认按钮</w-button>
<w-button icon="settings">设置</w-button>
<w-button :loading="true" >加载</w-button>
<w-button icon="thumbs-up">点赞</w-button>
<w-button icon="upload">上传</w-button>
<w-button icon="download" icon-position="right">下载</w-button>
<w-button disabled>禁用</w-button>
```

## 按钮组
<br>

**预览样式**

<ClientOnly>
<button-group-demos></button-group-demos>
</ClientOnly>

<br>

**使用方法**
```html
<w-button-group>
  <w-button icon="left">上一页</w-button>
  <w-button>更多</w-button>
  <w-button icon="right" icon-position="right">下一页</w-button>
</w-button-group>
```


