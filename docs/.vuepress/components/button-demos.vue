<template>
  <div>
    <c-button>按钮</c-button>
    <c-button circle>圆形</c-button>
    <c-button type="danger">危险</c-button>
    <pre>
        <code>
            {{content}}
        </code>
    </pre>
  </div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  components: {
    'c-button': Button
  },
  data() {
    return {
      content: `
          <c-button>按钮</c-button>
          <c-button circle>圆形</c-button>
          <c-button type="danger">危险</c-button>
          `
    }
  }
}
</script>

<style></style>
