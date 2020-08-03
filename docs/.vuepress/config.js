module.exports = {
  base:'/lun/',
  title: '微光UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav:[
      {text:'主页',link:'/'},
      {text:'文档',link:'/install/'},
    ],
    sidebar: [
      {
        collapsable: false,
        title: '入门',
        children: ['/install/', '/get-started/',]
      },
      {
        collapsable: false,
        title: '组件',
        children: [
          '/components/button',
          '/components/grid',
          '/components/input',
          '/components/layout',
          '/components/popover',
          '/components/tabs',
          '/components/toast',
          '/components/collapse'
        ]
      },
    ]
  }
}