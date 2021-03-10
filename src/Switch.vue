<template>
  <button
    class="cc-switch"
    :class="{ 'cc-switch-checked': value }"
    @click="toggle"
  >
    <span></span>
  </button>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle() {
      this.$emit('update:value', !this.value)
    }
  }
}
</script>

<style lang="scss">
$height: 32px;
$width: 84px;
$bg: #fff;
.cc-switch {
  position: relative;
  height: $height;
  width: $width;
  background-color: $bg;
  outline: none;
  border: 2px solid #ffffff;
  filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.25));
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25) inset;
  border-radius: 18px;
  & > span {
    width: 26px;
    height: 26px;
    border-radius: 13px;
    position: absolute;
    left: 1px;
    top: 1px;
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.25);
    border-radius: 13px;
    transition: all 250ms ease-in-out;
  }
  //   开关打开
  &-checked {
    background-color: #409eff;
    & > span {
      left: 53px;
      box-shadow: -2px 2px 6px rgba(0, 0, 0, 0.25);
    }
  }
  //   禁用按钮
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
}
</style>
