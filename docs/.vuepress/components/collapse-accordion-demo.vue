<template>
  <div>
    <c-collapse :selected.sync="selectedTab" accordion>
      <c-collapse-item title="水果" name="fruits">Fruits</c-collapse-item>
      <c-collapse-item title="蔬菜" name="vegetables">Vegetables</c-collapse-item>
      <c-collapse-item title="牛奶" name="milk">Milk</c-collapse-item>
    </c-collapse>
  </div>
</template>

<script>
import Collapse from '../../../src/Collapse'
import CollapseItem from '../../../src/CollapseItem'
export default {
  components: {
    'c-collapse': Collapse,
    'c-collapse-item': CollapseItem
  },
  data() {
    return {
      selectedTab: ['fruits']
    }
  }
}
</script>

<style></style>
