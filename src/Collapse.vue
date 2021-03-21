<template>
  <div class="cc-collpase">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props: {
    accordion: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Array
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    // if(this.accordion){
    return {
      eventBus: this.eventBus
      // }
    }
  },
  mounted() {
    this.eventBus.$emit('update:selected', this.selected)
    this.eventBus.$on('update:addselected', name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      if (this.accordion) {
        selectedCopy = [name]
      } else {
        selectedCopy.push(name)
      }
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })

    this.eventBus.$on('update:removeselected', name => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected))
      let index = selectedCopy.indexOf(name)
      selectedCopy.splice(index, 1)
      this.eventBus.$emit('update:selected', selectedCopy)
      this.$emit('update:selected', selectedCopy)
    })
  }
}
</script>

<style lang="scss" scoped>
.cc-collpase {
//   border: 2px solid #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  overflow: hidden;
}
</style>
