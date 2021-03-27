# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法
双向绑定
<ClientOnly>
<switch-demo></switch-demo>
</ClientOnly>

```vue
    <c-switch v-model="value"></c-switch>
    <script>
        export default {
            data() {
                return {
                    value:false
                }
            }
        }
    </script>
```

## 禁用状态

开关处于禁用状态
<ClientOnly>
<switch-disabled-demo></switch-disabled-demo>
</ClientOnly>

```vue
    <c-switch disabled></c-switch>
    <c-switch disabled v-model="value"></c-switch>
    <script>
        export default {
            data(){
                return {
                    value:true
                }
            }
        }
    </script>
```
### Props 属性
| 参数              | 说明             | 类型    | 可选值                   | 默认值  |
| :------------    | :--------------- | :------ | :---------- | :------ |
| v-model        | 双向绑定             | boolean / string / boolean  | - | - |
| disabled         | 禁用             | boolean | - | false |