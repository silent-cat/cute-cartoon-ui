<template>
  <div>
    <c-icon name="edit"></c-icon>
    <c-icon name="settings"></c-icon>
    <c-icon name="delete"></c-icon>
    <c-icon name="cancel"></c-icon>
    <c-icon name="down"></c-icon>
    <br />
    <pre>
        <code>
            {{content}}
        </code>
    </pre>
  </div>
</template>

<script>
import Icon from '../../../src/Icon'
export default {
  components: {
    'c-icon': Icon
  },
  methods: {
  },
  data() {
    return {
      content: `      
   <c-icon name="edit"></c-icon>
    <c-icon name="settings"></c-icon>
    <c-icon name="delete"></c-icon>
    <c-icon name="cancel"></c-icon>
    <c-icon name="down"></c-icon>
  
          `
    }
  }
}
</script>

<style></style>
