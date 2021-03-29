# Layout 布局

常见的基本布局

## 上中下

<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

```vue
  <c-layout>
    <c-header>header</c-header>
    <c-content>content</c-content>
    <c-footer>footer</c-footer>
  </c-layout>
```

## 内部侧边栏

<ClientOnly>
<layout-inner-demo></layout-inner-demo>
</ClientOnly>

```vue
  <c-layout>
    <c-header>header</c-header>
    <c-layout>
      <c-aside>aside</c-aside>
      <c-content>content</c-content>
    </c-layout>
    <c-footer>footer</c-footer>
  </c-layout>
```

## 外部侧边栏

<ClientOnly>
<layout-outer-demo></layout-outer-demo>
</ClientOnly>

```vue
  <c-layout>
    <c-aside>aside</c-aside>
    <c-layout>
      <c-header>header</c-header>
      <c-content>content</c-content>
      <c-footer>footer</c-footer>
    </c-layout>
  </c-layout>
```
