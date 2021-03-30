<template>
  <section class="cube-container" :class="{ hasAside: bool }">
    <slot></slot>
  </section>
</template>

<script>
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Aside from './Aside'

export default {
  components: {
    'c-aside': Aside,
    'c-header': Header,
    'c-content': Content,
    'c-footer': Footer
  },
  data() {
    return {
      bool: false
    }
  },
  mounted() {
    console.log(this.$slots.default)
    this.$slots.default.forEach(item => {
      // console.log()
      if (item.componentOptions && item.componentOptions.tag === 'c-aside') {
        this.bool = true
      }
    })
  }
}
</script>

<style lang="scss">
.cube-container {
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  color: #fff;
}
.hasAside {
  flex-direction: row;
}
</style>
