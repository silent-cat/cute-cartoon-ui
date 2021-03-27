# Toast 提示

分隔内容上有关联但属于不同类别的数据集合


## 基础使用

toast两秒后消失，可手动关闭
<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

```vue
    <c-button @click="$toast(`显示toast`)">显示toast</c-button>
```

## 关闭自动关闭
toast默认是自动关闭的，启动autoClose为true关闭自动关闭，只允许手动关闭
<ClientOnly>
<toast-auto-close-demo></toast-auto-close-demo>
</ClientOnly>

```vue
    <c-button @click="$toast(`显示toast`,{autoClose:false})">显示toast</c-button>
```

## 支持HTML

让toast的内容部分支持HTML
<ClientOnly>
<toast-enable-html-demo></toast-enable-html-demo>
</ClientOnly>

```vue
    <c-button @click="$toast(`<h3>显示toast</h3>`,{enableHtml:true})">支持HTML</c-button>
```

## 不同位置

通过指定position生成不同位置的toast
<ClientOnly>
<toast-position-demo></toast-position-demo>
</ClientOnly>

```vue
    <c-button @click="showToast('top')">上方显示</c-button>
    <c-button @click="showToast('center')">中间显示</c-button>
    <c-button @click="showToast('bottom')">下方显示</c-button>

    <script>
    export default {
      methods: {
        showToast(position) {
          this.$toast(`${position}显示`, 
            {
                position: position
            }
          )
        }
      }
    }
    </script>

```

### Toast 属性

| 参数     | 说明                                                 | 类型    | 可选值       | 默认值 |
| :------- | :--------------------------------------------------- | :------ | :----------- | :----- |
| autoClose     | 根据传入的数值确定多长时间后自动关闭，单位：秒 | boolean / number  | -            | 2     |
| enableHtml | toast的内容是否支持html                                       | boolean | false / true | false  |
| position | 生成的位置                                       | string | top / center /bottom | top  |
| zIndex | 设定 Toast 组件在当前堆叠上下文中的堆叠层级                                       | number | - | 20  |
| closeButton | 确定关闭按钮的文字text与callback函数                                     | object | - | {text: '关闭',callback: undefined}  |


