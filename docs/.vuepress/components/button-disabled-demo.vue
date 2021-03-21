<template>
  <div>
    <c-row>
      <c-button type="primary" disabled>主要</c-button>
      <c-button type="success" disabled>成功</c-button>
      <c-button type="info" disabled>信息</c-button>
      <c-button type="warning" disabled>警告</c-button>
      <c-button type="danger" disabled>危险</c-button>
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
