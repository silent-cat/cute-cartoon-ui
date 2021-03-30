<template>
  <div class="cube-collapse-item">
    <div class="cube-title" @click="toggle">
      {{ title }}
    </div>
    <div class="cube-content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String
    }
  },
  data() {
    return {
      open: false
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus &&
      this.eventBus.$on('update:selected', names => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true
        } else {
          this.open = false
        }
      })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.eventBus && this.eventBus.$emit('update:removeselected', this.name)
      } else {
        this.eventBus && this.eventBus.$emit('update:addselected', this.name)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.cube-collapse-item {
  color: #fff;
  > .cube-title {
    cursor: pointer;
    border: 1px solid #fff;
    margin: -1px -1px 0px -1px;
    min-height: 48px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    background-color: #409eff;
    &:hover {
      background-color: #4f97df;
    }
  }
  &:first-child {
    > .cube-title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .cube-title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      margin-bottom: -1px;
    }
  }
  > .cube-content {
    padding: 16px;
    background-color: #333;
  }
}
</style>
