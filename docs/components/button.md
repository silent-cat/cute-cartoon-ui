# Button 按钮
常见的操作按钮

## 基础用法
基础的按钮用法
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
<c-row>
      <c-button type="primary" loading>加载中</c-button>
    </c-row>
```

## 不同尺寸

点击按钮后进行数据加载操作，在按钮上显示加载状态
<ClientOnly>
<button-size-demo></button-size-demo>
</ClientOnly>

## 属性

| 参数          | 说明             | 类型    | 可选值                                      | 默认值  |
| :------------ | :--------------- | :------ | :------------------------------------------ | :------ |
| type          | 类型             | string  | primary / success / info / warning / danger | primary |
| size          | 尺寸             | string  | middle / small / large                      | middle  |
| circle        | 是否圆形按钮     | boolean | false / true                                | false   |
| disabled      | 是否禁用按钮     | boolean | false / true                                | false   |
| icon          | 是否有图标       | string  | -                                         | -     |
| icon-position | 图标的位置       | string  | left / right                                | left    |
| loading       | 是否处于加载状态 | boolean | false / true                                | false   |

