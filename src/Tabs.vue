<template>
  <div class="tabs-wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'

  export default {
    name: 'CubeTabs',
    props: {
      selected: {
        type: String,
        required: true
      },
    },
    data() {
      return {eventBus: new Vue()}
    },
    provide() {
      return {eventBus: this.eventBus}
    },
    methods: {
      checkChildren() {
        if (this.$children.length === 0) {
          console && console.warn &&
          console.warn('tabs的子组件应该是tabs-head和tabs-body')
        }
      },
      selectTab () {
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'CubeTabsHead') {
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'CubeTabsItem'
                && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted() {
      this.checkChildren();
      this.selectTab();
    }
  }
</script>

<style lang="scss" scoped>
  .tabs-wrapper {
  }
</style>