<template>
  <button class="cute-cartoon-button" :size="size" :circle="circle">
    <slot />
  </button>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: 'medium',
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss">
$height: 36px;
$small-height: $height * 0.8;
$large-height: $height * 1.2;
$bg: #ffab85;
$forbidden-bg: #ffcbb3;
$font-color: #fff;
$font-size: 16px;
$border-style: solid;
$border-color: #fff;
$border-width: 2px;
$border-radius: 4px;
.cute-cartoon-button {
  font-size: $font-size;
  vertical-align: middle;
  height: $height;
  background: $bg;
  padding: 0 1em;
  box-shadow: none;
  color: $font-color;
  border-style: $border-style;
  border-color: $border-color;
  border-width: $border-width;
  border-radius: $border-radius;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
  &[disabled] {
    cursor: not-allowed;
    background-color: $forbidden-bg;
  }
  &[circle] {
    width: $height * 1.2;
    height: $height * 1.2;
    border-radius: $height * 1.2/2;
    padding: 0;
  }
  &:active {
    background-color: #faaf8d;
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.15) inset,
      1px 1px 3px rgba(0, 0, 0, 0.3);
  }
  &:focus {
    outline: none;
  }
  //小型按钮
  &[size='small'] {
    padding: 0 0.8em;
    height: $small-height;
    font-size: $font-size * 0.8;
    border-width:$border-width*0.8;
    &:active {
      background-color: #faaf8d;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15) inset,
        1px 1px 2px rgba(0, 0, 0, 0.3);
    }
    &[circle] {
      width: $small-height * 1.2;
      height: $small-height * 1.2;
      border-radius: $small-height * 1.2/2;
      padding: 0;
    }
  }
  //大型按钮
  &[size='large'] {
    padding: 0 1.2em;
    height: $large-height;
    font-size: $font-size * 1.2;
    border-width:$border-width*1.2;
    &:active {
      background-color: #faaf8d;
      box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.15) inset,
        1px 1px 4px rgba(0, 0, 0, 0.3);
    }
    &[circle] {
      width: $large-height * 1.2;
      height: $large-height * 1.2;
      border-radius: $large-height * 1.2/2;
      padding: 0;
    }
  }
}
</style>
