# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合

## 基础用法

基础的、简洁的标签页
<ClientOnly>
<tabs-demo></tabs-demo>
</ClientOnly>

```vue
  <c-tabs :selected.sync="selectedTab">
    <c-tabs-head>
      <c-tabs-item name="tab1">Tab1</c-tabs-item>
      <c-tabs-item name="tab2">Tab2</c-tabs-item>
      <c-tabs-item name="tab3" disabled>Tab3</c-tabs-item>
      <c-tabs-item name="tab4">Tab4</c-tabs-item>
    </c-tabs-head>
    <c-tabs-body>
      <c-tabs-panel name="tab1">内容1</c-tabs-panel>
      <c-tabs-panel name="tab2">内容2</c-tabs-panel>
      <c-tabs-panel name="tab3">内容3</c-tabs-panel>
      <c-tabs-panel name="tab4">内容4</c-tabs-panel>
    </c-tabs-body>
  </c-tabs>

  <script>
  export default {
    data() {
      return {
        selectedTab: 'tab1'
      }
    }
  }
  </script>
```

### Tabs 属性
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| :------------ | :--------------- | :------ | :---------- | :------ |
| selected | 默认标签栏 | String | - | - |

### TabsItem 属性

| 参数     | 说明                                                 | 类型    | 可选值       | 默认值 |
| :------- | :--------------------------------------------------- | :------ | :----------- | :----- |
| name     | 与选项卡绑定值 selected 对应的标识符，表示选项卡别名 | String  | -            | -      |
| disabled | 禁用指定选项卡                                       | Boolean | false / true | false  |
