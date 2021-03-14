<template>
  <div>
    <c-switch :value.sync="checked"></c-switch>
    <c-switch disabled></c-switch>
    <pre>
        <code>
            {{content}}
        </code>
    </pre>
  </div>
</template>

<script>
import Switch from '../../../src/Switch'
export default {
  components: {
    'c-switch': Switch
  },
  data() {
    return {
      content: `
          <c-switch :value.sync="checked"></c-switch>
          <c-switch disabled></c-switch>
          `,
      checked:false
    }
  }
}
</script>

<style></style>
