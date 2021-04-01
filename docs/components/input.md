# Input 输入框
通过鼠标或键盘输入字
## 基础用法
双向绑定
<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

```vue
<c-input v-model="value" placeholder="请输入内容" disabled></c-input>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>
```

## 禁用状态
禁用状态，无法进行操作
<ClientOnly>
<input-disabled-demo></input-disabled-demo>
</ClientOnly>

```vue
<c-input v-model="value" placeholder="禁用输入框" disabled></c-input>

<script>
export default {
  data() {
    return {
      value: '禁用'
    }
  }
}
</script>
```

## 只读状态
只读状态
<ClientOnly>
<input-readonly-demo></input-readonly-demo>
</ClientOnly>

```vue
<c-input v-model="value" placeholder="只读输入框" readonly></c-input>

<script>
export default {
  data() {
    return {
      value: '内容只读'
    }
  }
}
</script>
```

## 不同类型
输入框的类型多种多样
<ClientOnly>
<input-type-demo></input-type-demo>
</ClientOnly>

```vue
<c-input type="password" placeholder="password"></c-input>
<c-input type="time"></c-input>
<c-input type="date"></c-input>
<c-input type="search" placeholder="可清空"></c-input>
<c-input type="week"></c-input>
```

### Input 属性
| 参数          | 说明             | 类型    | 可选值                                      | 默认值  |
| :------------ | :--------------- | :------ | :------------------------------------------ | :------ |
| v-model / value         | 双向绑定 / 单向绑定             | string  | - | - |
| disabled        | 禁用     | boolean | false / true                                | false   |
| readonly      | 只读     | boolean | false / true                                | false   |
| placeholder          | 输入框占位文本       | string  | -                                           | -       |
| type | 类型 -继承原生Input的类型      | string  | -                                | -    |

### Event 事件

| 事件名          | 说明             | 参数    |
| :------------ | :--------------- | :------ |
| input          | 在 Input 值改变时触发            | -  | 
| focus          | 在 Input 获得焦点时触发           | -  | 
| blur          | 在 Input 失去焦点时触发	            | -  | 