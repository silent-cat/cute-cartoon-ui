<template>
  <div>
    <c-row>
      <c-button size="primary" loading>加载中</c-button>
    </c-row>
  </div>
</template>

<script>
import Button from '../../../src/Button'
import Row from '../../../src/Row'
export default {
  components: {
    'c-button': Button,
    'c-row': Row
  },
  methods: {},
  data() {
    return {}
  }
}
</script>

<style></style>
