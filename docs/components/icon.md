# Icon 图标

提供了一套常用的图标集合。

## 基础用法
<ClientOnly>
  <icon-demo></icon-demo>
</ClientOnly>

```vue
    <c-icon name="add"></c-icon>
    <c-icon name="edit"></c-icon>
    <c-icon name="delete"></c-icon>
```

## Button使用
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

### Props 属性

| 参数              | 说明             | 类型    | 可选值                   | 默认值  |
| :------------    | :--------------- | :------ | :---------- | :------ |
| name        | 设置图标名称             | string  | - | - |
