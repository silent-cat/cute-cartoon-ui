<template>
  <div class="span-wrapper">
    <c-row class="row">
      <c-col class="item" span="8"> <span>col-8</span> </c-col>
      <c-col class="item" span="8"> <span>col-8</span> </c-col>
      <c-col class="item" span="4" > <span>col-4</span> </c-col>
    </c-row>
    <c-row class="row">
      <c-col class="item" span="8"> <span>col-8</span> </c-col>
      <c-col class="item" span="5" > <span>col-5</span> </c-col>
      <c-col class="item" span="4" > <span>col-4</span> </c-col>
    </c-row>
    <c-row class="row">
      <c-col class="item" span="2" > <span>col-2</span> </c-col>
      <c-col class="item" span="5" > <span>col-5</span> </c-col>
      <c-col class="item" span="4" > <span>col-4</span> </c-col>
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
    }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";
  .span-wrapper { padding-top: $wrapper-top;
    > .row {
      > .item { text-align: center; color: $font-color;
        > span { display: block; background: $background; }
      }
    }
  }
</style>