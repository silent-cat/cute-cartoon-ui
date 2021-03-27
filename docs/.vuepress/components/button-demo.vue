<template>
  <div>
    <c-row>
      <c-button type="primary">主要</c-button>
      <c-button type="success">成功</c-button>
      <c-button type="info">信息</c-button>
      <c-button type="warning">警告</c-button>
      <c-button type="danger">危险</c-button>
    </c-row>
    <c-row>
      <c-button type="primary" circle>主要</c-button>
      <c-button type="success" circle>成功</c-button>
      <c-button type="info" circle>信息</c-button>
      <c-button type="warning" circle>警告</c-button>
      <c-button type="danger" circle>危险</c-button>
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
