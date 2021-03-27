<template>
  <div>
    <c-switch disabled></c-switch>
    <c-switch disabled v-model="value"></c-switch>
  </div>
</template>

<script>
import Switch from '../../../src/Switch'
export default {
  components: {
    'c-switch': Switch
  },
  data(){
    return {
      value:true
    }
  }
}
</script>
