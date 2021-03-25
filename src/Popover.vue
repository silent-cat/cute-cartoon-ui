<template>
  <div class="cc-popover" ref="popover">
    <div class="cc-popover-content-wrapper" ref="contentWrapper" v-if="visible"
         :class="{[`cc-position-${position}`]:true}">
      <slot name="content" :close="close"></slot>
    </div>
    <span ref="triggerWrapper" class="cc-popover-trigger-wrapper">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    props: {
      position: {
        type: String,
        default: 'top',
        validator(value) {
          return ['top', 'bottom', 'left', 'right'].indexOf(value) >= -1
        }
      },
      trigger: {
        type: String,
        default: 'click',
        validator(value) {
          return ['click', 'hover'].indexOf(value) >= -1
        }
      },
    },
    data() {
      return {
        visible: false
      }
    },

    mounted() {
      if (this.trigger === 'click') {
        this.$refs.popover.addEventListener('click', this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter', this.open)
        this.$refs.popover.addEventListener('mouseleave', this.close)
      }
    },
    destroyed() {
      if (this.trigger === 'click') {
        this.$refs.popover.removeEventListener('click', this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter', this.open)
        this.$refs.popover.removeEventListener('mouseleave', this.close)
      }
    },
    computed: {
      openEvent() {
        if (this.trigger === 'click') {
          return 'click'
        } else {
          return 'mouseenter'
        }
      },
      closeEvent() {
        if (this.trigger === 'click') {
          return 'click'
        } else {
          return 'mouseleave'
        }
      }
    },

    methods: {
      positionContent() {
        const {contentWrapper, triggerWrapper} = this.$refs
        document.body.appendChild(contentWrapper)
        const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
        const {height: height2} = contentWrapper.getBoundingClientRect()
        let positions = {
          top: {top: top + window.scrollY, left: left + window.scrollX,},
          bottom: {top: top + height + window.scrollY, left: left + window.scrollX},
          left: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX
          },
          right: {
            top: top + window.scrollY + (height - height2) / 2,
            left: left + window.scrollX + width
          },
        }
        contentWrapper.style.left = positions[this.position].left + 'px'
        contentWrapper.style.top = positions[this.position].top + 'px'
      },
      onClickDocument(e) {
        if (this.$refs.popover &&
          (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) {
          return
        }
        this.close()
      },
      open() {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close() {
        this.visible = false
        document && document.removeEventListener('click', this.onClickDocument)
      },
      onClick(event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    },
  }

</script>

<style lang="scss" scoped>
  $border-color: #fff;
  $border-radius: 4px;
  .cc-popover {
    display: inline-block;
    vertical-align: top;
    position: relative;
  }

  .cc-popover-content-wrapper {
    position: absolute;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    box-shadow:2px 2px 6px rgba(0,0,0,.2);
    background: white;
    padding: .5em 1em;
    max-width: 20em;
    word-break: break-all;

    &::before, &::after {
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }

    &.cc-position-top {
      transform: translateY(-100%);
      margin-top: -10px;

      &::before, &::after {
        left: 10px;
      }

      &::before {
        border-top-color: #fff;
        border-bottom: none;
        top: 100%;
      }

      &::after {
        border-top-color: white;
        border-bottom: none;
        top: calc(100% - 1px);
      }
    }

    &.cc-position-bottom {
      margin-top: 10px;

      &::before, &::after {
        left: 10px;
      }

      &::before {
        border-bottom-color: #fff;
        border-top: none;
        bottom: 100%;
      }

      &::after {
        border-bottom-color: white;
        border-top: none;
        bottom: calc(100% - 1px);
      }
    }

    &.cc-position-left {
      transform: translateX(-100%);
      margin-left: -10px;

      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }

      &::before {
        border-left-color: #fff;
        border-right: none;
        left: 100%;
      }

      &::after {
        border-left-color: white;
        border-right: none;
        left: calc(100% - 1px);
      }
    }

    &.cc-position-right {
      margin-left: 10px;

      &::before, &::after {
        transform: translateY(-50%);
        top: 50%;
      }

      &::before {
        border-right-color: #fff;
        border-left: none;
        right: 100%;
      }

      &::after {
        border-right-color: white;
        border-left: none;
        right: calc(100% - 1px);
      }
    }

  }

  .cc-popover-trigger-wrapper {
    display: inline-block;
  }
</style>