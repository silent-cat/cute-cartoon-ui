<template>
  <ul class="cube-pagination">
    <c-button
      :class="['cube-pagination-item', 'cube-pagination-item--prev']"
      :disabled="index === 1"
      @click="prev"
      icon="left"
    >
    </c-button>
    <c-button
      :class="['cube-pagination-item', 'cube-pagination-item--first']"
      :disabled="index === 1"
      @click="first"
    >
      首页
    </c-button>
    <c-button
      :class="['cube-pagination-item', 'cube-pagination-item--more']"
      v-if="showPrevMore"
    >
      ...
    </c-button>
    <c-button
      :class="[
        'cube-pagination-item',
        { 'cube-pagination-item--current': index === pager }
      ]"
      v-for="pager in pagers"
      @click="go(pager)"
    >
      {{ pager }}
    </c-button>
    <c-button
      :class="['cube-pagination-item', 'cube-pagination-item--more']"
      v-if="showNextMore"
    >
      ...
    </c-button>
    <c-button
      :class="['cube-pagination-item', 'cube-pagination-item--last']"
      :disabled="index === pages"
      @click="last"
    >
      尾页
    </c-button>
    <c-button
      :class="['cube-pagination-item', 'cube-pagination-item--next']"
      :disabled="index === pages"
      @click="next"
      icon="right"
      position="right"
    >
    </c-button>
  </ul>
</template>
<script>
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Icon from './Icon'
export default {
  components: {
    'c-button': Button,
    'c-button-group': ButtonGroup,
    'c-icon': Icon
  },
  //通过props来接受从父组件传递过来的值
  props: {
    //页面中的可见页码，其他的以...替代, 必须是奇数
    perPages: {
      type: Number,
      default: 5
    },

    //当前页码
    pageNumber: {
      type: Number,
      default: 1
    },

    //每页显示条数
    pageSize: {
      type: Number,
      default: 10
    },

    //总记录数
    total: {
      type: Number,
      default: 0
    }
  },
  methods: {
    prev() {
      if (this.index > 1) {
        this.go(this.index - 1)
      }
    },
    next() {
      if (this.index < this.pages) {
        this.go(this.index + 1)
      }
    },
    first() {
      if (this.index !== 1) {
        this.go(1)
      }
    },
    last() {
      if (this.index != this.pages) {
        this.go(this.pages)
      }
    },
    go(page) {
      if (this.index !== page) {
        this.index = page
        //父组件通过change方法来接受当前的页码
        this.$emit('change', this.index)
      }
    }
  },
  computed: {
    //计算总页码
    pages() {
      return Math.ceil(this.size / this.limit)
    },

    //计算页码，当count等变化时自动计算
    pagers() {
      const array = []
      const perPages = this.perPages
      const pageCount = this.pages
      let current = this.index
      const _offset = (perPages - 1) / 2

      const offset = {
        start: current - _offset,
        end: current + _offset
      }

      //-1, 3
      if (offset.start < 1) {
        offset.end = offset.end + (1 - offset.start)
        offset.start = 1
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount)
        offset.end = pageCount
      }
      if (offset.start < 1) offset.start = 1

      this.showPrevMore = offset.start > 1
      this.showNextMore = offset.end < pageCount

      for (let i = offset.start; i <= offset.end; i++) {
        array.push(i)
      }

      return array
    }
  },
  data() {
    return {
      index: this.pageNumber, //当前页码
      limit: this.pageSize, //每页显示条数
      size: this.total || 1, //总记录数
      showPrevMore: false,
      showNextMore: false
    }
  },
  watch: {
    pageNumber(val) {
      this.index = val || 1
    },
    pageSize(val) {
      this.limit = val || 10
    },
    total(val) {
      this.size = val || 1
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.cube-pagination {
  > .cube-pagination-item {
    background-color: #f4f4f5;
    color: #2c3e50;
    margin-left: 0.2rem;
    &:first-child {
      margin-left: 0;
    }
    &:nth-child(2) {
      margin-left: 0;
    }
    &:nth-child(3) {
      margin-left: 0;
    }
    &:nth-last-child(2) {
      margin-left: 0;
    }
    &:last-child {
      margin-left: 0;
    }
    &.cube-pagination-item--more {
      background-color: #fff;
      color: #505050;
    }
    //禁用
    &.cube-pagination-item--more,
    &.cube-pagination-item--current {
      cursor: default;
    }
    //选中
    &.cube-pagination-item--current {
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
