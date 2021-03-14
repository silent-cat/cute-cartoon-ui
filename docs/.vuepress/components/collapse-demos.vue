<template>
  <div>
    <c-collapse :selected.sync="selectedTab" single>
      <c-collapse-item title="水果" name="1">Fruits</c-collapse-item>
      <c-collapse-item title="蔬菜" name="2">Vegetables</c-collapse-item>
      <c-collapse-item title="奶类" name="3">Milk</c-collapse-item>
    </c-collapse>
    <pre>
        <code>
            {{content}}
        </code>
    </pre>
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
      content: `
    <c-collapse :selected.sync="selectedTab" single>
      <c-collapse-item title="水果" name="1">Fruits</c-collapse-item>
      <c-collapse-item title="蔬菜" name="2">Vegetables</c-collapse-item>
      <c-collapse-item title="奶类" name="3">Milk</c-collapse-item>
    </c-collapse>
          `,
      selectedTab: ['1']
    }
  }
}
</script>

<style></style>
