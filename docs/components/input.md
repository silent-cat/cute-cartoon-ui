# Input 输入框

## 基础用法

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
