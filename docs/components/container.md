# Container 布局容器

常见的布局容器

## 上中下
最普通的布局
<ClientOnly>
<container-demo></container-demo>
</ClientOnly>

```vue
  <c-container>
    <c-header>header</c-header>
    <c-content>content</c-content>
    <c-footer>footer</c-footer>
  </c-container>
```

## 内部侧边栏
在内部显示侧边栏
<ClientOnly>
<container-inner-demo></container-inner-demo>
</ClientOnly>

```vue
  <c-container>
    <c-header>header</c-header>
    <c-container>
      <c-aside>aside</c-aside>
      <c-content>content</c-content>
    </c-container>
    <c-footer>footer</c-footer>
  </c-container>
```

## 外部侧边栏
在外部显示侧边栏
<ClientOnly>
<container-outer-demo></container-outer-demo>
</ClientOnly>

```vue
  <c-container>
    <c-aside>aside</c-aside>
    <c-container>
      <c-header>header</c-header>
      <c-content>content</c-content>
      <c-footer>footer</c-footer>
    </c-container>
  </c-container>
```
