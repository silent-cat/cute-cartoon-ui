# Button 按钮

常见的按钮

## 不同类型

类型、形状不同的按钮
<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

```vue
  <c-row>
    <c-button type="primary">主要</c-button>
    <c-button type="success">成功</c-button>
    <c-button type="info">信息</c-button>
    <c-button type="warning">警告</c-button>
    <c-button type="danger">危险</c-button>
  </c-row>
  <c-row>
    <c-button type="primary" circle>主要</c-button>
    <c-button type="success" circle>成功</c-button>
    <c-button type="info" circle>信息</c-button>
    <c-button type="warning" circle>警告</c-button>
    <c-button type="danger" circle>危险</c-button>
  </c-row>
```

## 禁用状态

按钮处于禁用状态
<ClientOnly>
<button-disabled-demo></button-disabled-demo>
</ClientOnly>

```vue
  <c-row>
    <c-button type="primary" disabled>主要</c-button>
    <c-button type="success" disabled>成功</c-button>
    <c-button type="info" disabled>信息</c-button>
    <c-button type="warning" disabled>警告</c-button>
    <c-button type="danger" disabled>危险</c-button>
  </c-row>
```
## 带图标的按钮

图标可以增强辨识度
<ClientOnly>
<button-icon-demo></button-icon-demo>
</ClientOnly>

```vue
  <c-row>
    <c-button icon="add" type="success">添加</c-button>
    <c-button icon="edit">编辑</c-button>
    <c-button icon="delete" type="danger">删除</c-button>
  </c-row>
  <c-row>
    <c-button icon="add" type="success" icon-position="right">添加</c-button>
    <c-button icon="edit" icon-position="right">编辑</c-button>
    <c-button icon="delete" type="danger" icon-position="right">删除</c-button>
  </c-row>
```

## 按钮组

以按钮组的方式出现，常用于多项类似操作
<ClientOnly>
<button-group-demo></button-group-demo>
</ClientOnly>

```vue
  <c-button-group>
    <c-button icon="left">上一页</c-button>
    <c-button icon="right" icon-position="right">下一页</c-button>
  </c-button-group>
```

## 加载按钮

点击按钮后进行数据加载操作，在按钮上显示加载状态
<ClientOnly>
<button-loading-demo></button-loading-demo>
</ClientOnly>

```vue
  <c-button type="primary" loading>加载中</c-button>
```

## 不同尺寸

三种不同尺寸的按钮
<ClientOnly>
<button-size-demo></button-size-demo>
</ClientOnly>

```vue
  <c-button size="small">小型按钮</c-button>
  <c-button size="middle">中型按钮</c-button>
  <c-button size="large">大型按钮</c-button>
  <c-button size="small" circle>小型</c-button>
  <c-button size="middle" circle>中型</c-button>
  <c-button size="large" circle>大型</c-button>
```

## 点击事件

触发click事件
<ClientOnly>
<button-click-demo></button-click-demo>
</ClientOnly>

```vue
  <c-button @click="clickEvent">点击</c-button>
  <script>
  export default {
    methods: {
      clickEvent() {
        alert('触发按钮的点击事件')
      }
    },
  }
</script>
```
### Props 属性

| 参数          | 说明             | 类型    | 可选值                                      | 默认值  |
| :------------ | :--------------- | :------ | :------------------------------------------ | :------ |
| type          | 类型             | string  | primary / success / info / warning / danger | primary |
| circle        | 是否圆形按钮     | boolean | false / true                                | false   |
| disabled      | 是否禁用按钮     | boolean | false / true                                | false   |
| icon          | 是否有图标       | string  | -                                           | -       |
| icon-position | 图标的位置       | string  | left / right                                | left    |
| loading       | 是否处于加载状态 | boolean | false / true                                | false   |
| size          | 尺寸             | string  | middle / small / large                      | middle  |

### Event 事件

| 事件名          | 说明             | 参数    |
| :------------ | :--------------- | :------ |
| click          | 点击事件            | -  | 



