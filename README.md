<p align="center">
  <a href="https://silent-cat.github.io/cube-ui-pc/" target="_blank" rel="noopener noreferrer">
    <img width="100" src="https://z3.ax1x.com/2021/04/03/cnNHMT.png" alt="logo">
  </a>
</p> 

<p align="center">
  <a href="https://travis-ci.org/silent-cat/cube-ui-pc">
    <img alt="Travis (.org)" src="https://travis-ci.org/silent-cat/cube-ui-pc.svg?branch=main">
  </a>
</p>

作者： silent-cat 

## 介绍
一款基于 Vue2 实现的桌面端组件库
## 使用
1. 安装 cube-ui-pc
    ```
   npm install cube-ui-pc -S
    ```
    ```
   yarn add cube-ui-pc -S
    ```
2. 引入 cube-ui-pc

    main.js
    ```js
    import {
      Button,ButtonGroup,Switch,Collapse,CollapseItem,Icon,Row,Col,Pagination,Tabs,TabsHead,TabsBody,TabsItem,
      TabsPanel,Toast,plugin,Popover,Input,Container,Header,Content,Footer,Aside
    }  from "cube-ui-pc"; // 引入组件
    import "cube-ui-pc/dist/index.css"; // 引入样式
    // 注册组件
    Vue.component('c-button', Button)
    Vue.component('c-button-group', ButtonGroup)
    Vue.component('c-icon', Icon)
    Vue.component('c-switch', Switch)
    Vue.component('c-collapse', Collapse)
    Vue.component('c-collapse-item', CollapseItem)
    Vue.component('c-input', Input)
    Vue.component('c-col', Col)
    Vue.component('c-row', Row)
    Vue.component('c-tabs', Tabs)
    Vue.component('c-tabs-body', TabsBody)
    Vue.component('c-tabs-head', TabsHead)
    Vue.component('c-tabs-item', TabsItem)
    Vue.component('c-tabs-panel', TabsPanel)
    Vue.component('c-pagination', Pagination)
    Vue.component('c-toast',Toast)
    Vue.use(plugin)
    Vue.component('c-popover',Popover)
    Vue.component('c-container',Container)
    Vue.component('c-header',Header)
    Vue.component('c-content',Content)
    Vue.component('c-footer',Footer)
    Vue.component('c-aside',Aside)
    ```
## 文档
[官方文档](https://silent-cat.github.io/cube-ui-pc/)
## 提问
[issues](https://github.com/silent-cat/cube-ui-pc/issues)
