<template>
  <div>
    <c-row>
      <c-button icon="add" type="success">添加</c-button>
      <c-button icon="edit">编辑</c-button>
      <c-button icon="delete" type="danger">删除</c-button>
    </c-row>
    <c-row>
      <c-button icon="add" type="success" icon-position="right">添加</c-button>
      <c-button icon="edit" icon-position="right">编辑</c-button>
      <c-button icon="delete" type="danger" icon-position="right">删除</c-button>
    </c-row>
  </div>
</template>

<script>
import Button from '../../../src/Button'
import Row from '../../../src/Row'
export default {
  components: {
    'c-button': Button,
    'c-row': Row
  }
}
</script>

<style></style>
