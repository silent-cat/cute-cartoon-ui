<template>
  <div>
    <c-button-group>
        <c-button icon="left">上一页</c-button>
        <c-button icon="right" icon-position="right">下一页</c-button>
    </c-button-group>
  </div>
</template>

<script>
import Button from '../../../src/Button'
import ButtonGroup from '../../../src/ButtonGroup'
export default {
  components: {
    'c-button': Button,
    'c-button-group':ButtonGroup
  },
  methods: {},
  data() {
    return {}
  }
}
</script>

<style></style>
