<template>
  <div>
    <c-switch disabled></c-switch>
    <c-switch disabled :value="true"></c-switch>
  </div>
</template>

<script>
import Switch from '../../../src/Switch'
export default {
  components: {
    'c-switch': Switch
  }
}
</script>
