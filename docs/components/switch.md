# Switch 开关

## 基本用法
表示两种相互对立的状态间的切换，多用于触发「开/关」
<ClientOnly>
<switch-demo></switch-demo>
</ClientOnly>

```vue
    <c-switch v-model:value="checked"></c-switch>
    <script>
        export default {
        data() {
            return {
                checked:false
            }
        }
    </script>
```

## 禁用状态

<ClientOnly>
<switch-disabled-demo></switch-disabled-demo>
</ClientOnly>

```vue
    <c-switch disabled></c-switch>
    <c-switch disabled :value="true"></c-switch>
```
属性
| 参数          | 说明             | 类型    | 可选值                   | 默认值  |
| :------------ | :--------------- | :------ | :---------- | :------ |
| value / v-model          | 绑定值             | boolean |false / true| false |
| disabled         | 禁用             | boolean | false /true  | false |