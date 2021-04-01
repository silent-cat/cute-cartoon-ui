# Grid 栅格
通过基础的 24 分栏，迅速简便地创建布局

## 基础用法
通过 row 和 col 组件，并通过 col 组件的 span 属性自由组合布局
<ClientOnly>
  <grid-demo></grid-demo>
</ClientOnly>

```vue
  <div class="grid-wrapper">
    <c-row class="row">
      <c-col class="item" span="24">col-24</c-col>
    </c-row>
    <c-row>
      <c-col class="item" span="12">col-12</c-col>
      <c-col class="item" span="12">col-12</c-col>
    </c-row>
    <c-row class="row">
      <c-col class="item" span="8">col-8</c-col>
      <c-col class="item" span="8">col-8</c-col>
      <c-col class="item" span="8">col-8</c-col>
    </c-row>
    <c-row class="row">
      <c-col class="item" span="6">col-6</c-col>
      <c-col class="item" span="6">col-6</c-col>
      <c-col class="item" span="6">col-6</c-col>
      <c-col class="item" span="6">col-6</c-col>
    </c-row>
  </div>

  <style lang="scss" scoped>
    *{
      box-sizing: border-box;
    }
    .grid-wrapper{
      $background: #3eaf7c;
      > .row{ padding: .2em;
        > .item { text-align: center; color: white;
          &:nth-child(odd){ background: $background; }
          &:nth-child(even){ background: lighten($background,20%); color: black; }
        }
      }
    }
  </style>
```
## 分栏间隔    
分栏之间存在间隔
<ClientOnly>
  <gutter-demo></gutter-demo>
</ClientOnly>

```vue
  <div class="gutter-wrapper">
    <c-row gutter="30">
      <c-col class="item" span="8"> <span> col-8; gutter-30;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-30;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-30;</span> </c-col>
    </c-row>
    <c-row gutter="20">
      <c-col class="item" span="8"> <span> col-8; gutter-20;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-20;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-20;</span> </c-col>
    </c-row>
    <c-row gutter="10">
      <c-col class="item" span="8"> <span> col-8; gutter-10;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-10;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-10;</span> </c-col>
    </c-row>
  </div>

  <style lang="scss" scoped>
    * { box-sizing: border-box; }
    .gutter-wrapper { padding-top: 10px;
      .item { text-align: center; color: white;
        > span { display: block; background: #3eaf7c; }
      }
    }
  </style>
```
## 排列方式
定义每行的排列方式
<ClientOnly>
  <align-demo></align-demo>
</ClientOnly>

```vue
  <div class="align-wrapper">
    <c-row class="row" align="left">
      <c-col class="item" span="8">left</c-col>
      <c-col class="item" span="8">left</c-col>
    </c-row>
    <c-row class="row" align="center">
      <c-col class="item" span="8">center</c-col>
      <c-col class="item" span="8">center</c-col>
    </c-row>
    <c-row class="row" align="right">
      <c-col class="item" span="8">right</c-col>
      <c-col class="item" span="8">right</c-col>
    </c-row>
  </div>

  <style lang="scss" scoped>
    $background: #3eaf7c;
    * { box-sizing: border-box; }
    .align-wrapper{ text-align: center; color: white;
      .row{ padding-top: 10px;
        > .item { text-align: center; color: white;
          &:nth-child(odd){ background: $background; }
          &:nth-child(even){ background: lighten($background,20%); color: black; }
        }
      }
    }
  </style>
```
## 分栏偏移
支持偏移指定的栏数
<ClientOnly>
    <offset-demo></offset-demo>
</ClientOnly>
```vue
  <div class="offset-wrapper">
    <c-row class="row">
      <c-col class="item" span="8"> <span>col-8</span> </c-col>
      <c-col class="item" span="8"> <span>col-8</span> </c-col>
      <c-col class="item" span="4" offset="4"> <span>col-4</span> </c-col>
    </c-row>
    <c-row class="row">
      <c-col class="item" span="8"> <span>col-8</span> </c-col>
      <c-col class="item" span="5" offset="3"> <span>col-5</span> </c-col>
      <c-col class="item" span="4" offset="4"> <span>col-4</span> </c-col>
    </c-row>
    <c-row class="row">
      <c-col class="item" span="2" offset="6"> <span>col-2</span> </c-col>
      <c-col class="item" span="5" offset="3"> <span>col-5</span> </c-col>
      <c-col class="item" span="4" offset="4"> <span>col-4</span> </c-col>
    </c-row>
  </div>

  <style lang="scss" scoped>
    $background: #3eaf7c;
    $wrapper-top: 10px;
    $font-color: white;
    * { box-sizing: border-box; }
    .offset-wrapper { padding-top: $wrapper-top;
      > .row {
        > .item { text-align: center; color: $font-color;
          > span { display: block; background: $background; }
        }
      }
    }
  </style>
```
### ROW 属性
| 参数          | 说明             | 类型    | 可选值                                      | 默认值  |
| :------------ | :--------------- | :------ | :------------------------------------------ | :------ |
| gutter        | 栅格间隔     | number | -                                | 0   |
| align      | 排列方式     | string |  left / center /right                               | left   |

### Column 属性
| 参数          | 说明             | 类型    | 可选值                                      | 默认值  |
| :------------ | :--------------- | :------ | :------------------------------------------ | :------ |
| span        | 栅格占据的列数     | string / number | -                                | 0   |
| offset      | 栅格左侧的间隔格数     | string /number |  -                              | 0   |


