<template>
  <div>
    <c-button @click="test">点击</c-button>
    <br />
    <c-button disabled>禁用</c-button>
    <br />
    <c-button size="small">小型按钮</c-button>
    <c-button>中型按钮</c-button>
    <c-button size="large">大型按钮</c-button>
    <br />
    <c-button circle size="small">小圆</c-button>
    <c-button circle>中圆</c-button>
    <c-button circle size="large">大圆</c-button>
    <br />
    <c-button type="primary">主要</c-button>
    <c-button type="success">成功</c-button>
    <c-button type="info">信息</c-button>
    <c-button type="warning">警告</c-button>
    <c-button type="danger">危险</c-button>
    <br />
    <pre>
        <code>
            {{content}}
        </code>
    </pre>
  </div>
</template>

<script>
import Button from '../../../src/Button'
export default {
  components: {
    'c-button': Button
  },
  methods: {
    test() {
      alert('检测按钮的点击事件')
    }
  },
  data() {
    return {
      content: `      
    <c-button @click="test">点击</c-button>
    <br />
    <c-button disabled>禁用</c-button>
    <br />
    <c-button size="small">小型按钮</c-button>
    <c-button>中型按钮</c-button>
    <c-button size="large">大型按钮</c-button>
    <br />
    <c-button circle size="small">小圆</c-button>
    <c-button circle>中圆</c-button>
    <c-button circle size="large">大圆</c-button>
    <br />
    <c-button type="primary">主要</c-button>
    <c-button type="success">成功</c-button>
    <c-button type="info">信息</c-button>
    <c-button type="warning">警告</c-button>
    <c-button type="danger">危险</c-button>
    <br />
  
          `
    }
  }
}
</script>

<style></style>
