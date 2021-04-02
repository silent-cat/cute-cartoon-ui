# 快速上手

## 安装

```bash
npm install cube-ui-pc
```
或
```bash
yarn add cube-ui-pc
```

## 使用
在main.js中
### 支持按需引入
main.js
```js
import {
    Button,
    ButtonGroup,
    Switch,
    Collapse,
    CollapseItem,
    Icon,
    Row,
    Col,
    Pagination,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPanel,
    Toast,
    plugin,
    Popover,
    Input,
    Container,
    Header,
    Content,
    Footer,
    Aside
    }  from "cube-ui-pc"; // 引入组件
import "cube-ui-pc/dist/index.css"; // 引入样式
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
