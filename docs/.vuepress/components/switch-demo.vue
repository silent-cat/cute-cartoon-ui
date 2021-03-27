<template>
  <div>
    <c-switch v-model="value"></c-switch>
    <p>switch value: {{value}}</p>
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
      value: true
    }
  }
}
</script>

<style></style>
