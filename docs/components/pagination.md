# Pagination 分页
当数据量过多时，使用分页分解数据

## 基础用法
<ClientOnly>
<pagination-demo></pagination-demo>
</ClientOnly>

```vue
  <template v-if="total">
      <ul>
        <li v-for="(item, index) in data" :key="index">{{ item.id }}</li>
      </ul>
      <c-pagination
        :page-number="pageNumber"
        :total="total"
        :page-size="pageSize"
        @change="pageChange"
      >
      </c-pagination>
  </template>

  <script>
  export default {
    data() {
      return {
        pageNumber: 1,
        total: 0,
        pageSize: 3,
        data: []
      }
    },
    mounted() {
      this.getList(this.pageNumber)
    },
    methods: {
      getList(pageNumber) {
        // 应该从接口获得数据，这里使用假数据，获取到的数据是由当前页数和每页的数据条数决定的
        this.total = 24
        this.data = [
          { id: `第${pageNumber}页-${pageNumber * 10}` },
          { id: `第${pageNumber}页-${pageNumber * 10 + 1}` },
          { id: `第${pageNumber}页-${pageNumber * 10 + 2}` }
        ]
      },
      pageChange(pageNumber) {
        this.pageNumber = pageNumber
        this.getList(this.pageNumber)
      }
    }
  }
  </script>

```

### Pagination 属性

| 参数          | 说明             | 类型    | 可选值                                      | 默认值  |
| :------------ | :--------------- | :------ | :------------------------------------------ | :------ |
| page-number          | 第几页            | Number  | - | 1 |
| page-size          | 每页显示的数据数目             | Number  | -                     | 10  |
| total        | 总数据条数     | Number | -                               | 0  |

### Event 事件
| 参数          | 说明             |   回调参数|
| :------------ | :--------------- | :------ |
| change        | 当pageNumber改变时触发            | 当前页pageNumber  |

