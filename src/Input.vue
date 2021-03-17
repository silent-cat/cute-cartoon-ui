<template>
  <div class="cc-input-wrapper" :class="{ error }">
    <label>
      <input
        type="text"
        :value="value"
        :disabled="disabled"
        :readonly="readonly"
        :placeholder="placeholder"
        :clearable="clearable"
        @change="$emit('change', $event.target.value)"
        @input="$emit('input', $event.target.value)"
        @focus="$emit('focus', $event.target.value)"
        @blur="$emit('blur', $event.target.value)"
      />
      <template v-if="error">
        <Icon class="cc-icon-error" name="error"></Icon>
        <span class="cc-error-message">{{ error }}</span>
      </template>
    </label>
  </div>
</template>

<script>
import Icon from './Icon'

export default {
  components: { Icon },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    },
    placeholder: {
      type: String
    },
    clearable: {
      type: Boolean,
      default:false
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" scoped>
$height: 42px;
$border-color: #686868;
$border-color-hover: #409eff;
$border-radius: 4px;
$font-size: 14px;
$red: #f1453d;
.cc-input-wrapper {
  font-size: $font-size;
  display: inline-block;
  align-items: center;

  > label {
    > :not(:last-child) {
      margin-right: 0.5em;
    }

    > input {
      height: $height;
      border: 2px solid #fff;
      border-radius: 4px;
      padding: 0 8px;
      font-size: inherit;
      box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3),
        inset 2px 2px 6px rgba(0, 0, 0, 0.2);
      transition: all 250ms;

      &:hover {
      }
      &:focus {
        outline: none;
      }

      &[disabled],
      &[readonly] {
        color: #bbb;
        cursor: not-allowed;
      }
    }
  }

  &.error {
    > label {
      > input {
        border-color: $red;
      }

      .cc-icon-error {
        fill: $red;
      }

      .cc-error-message {
        color: $red;
      }
    }
  }
}
</style>
