<template>
  <div class="gutter-wrapper">
    <c-row gutter="30">
      <c-col class="item" span="8"> <span> col-8; gutter-30;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-30;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-30;</span> </c-col>
    </c-row>
    <c-row gutter="20">
      <c-col class="item" span="8"> <span> col-8; gutter-20;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-20;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-20;</span> </c-col>
    </c-row>
    <c-row gutter="10">
      <c-col class="item" span="8"> <span> col-8; gutter-10;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-10;</span> </c-col>
      <c-col class="item" span="8"> <span> col-8; gutter-10;</span> </c-col>
    </c-row>
  </div>
</template>

<script>
  import Col from '../../../src/Col'
  import Row from '../../../src/Row'

  export default {
    components: {
      'c-col': Col,
      'c-row': Row
    },
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .gutter-wrapper { padding-top: $wrapper-top;
    .item { text-align: center; color: $font-color;
      > span { display: block; background: $background; }
    }
  }

</style>