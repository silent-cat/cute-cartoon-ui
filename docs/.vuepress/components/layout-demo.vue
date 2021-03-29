<template>
  <div>
    <c-layout>
      <c-header>header</c-header>
      <c-content>content</c-content>
      <c-footer>footer</c-footer>
    </c-layout>
  </div>
</template>

<script>
import Header from '../../../src/Header'
import Content from '../../../src/Content'
import Footer from '../../../src/Footer'
import Aside from '../../../src/Aside'
import Layout from '../../../src/Layout'
export default {
  components: {
    'c-aside': Aside,
    'c-header': Header,
    'c-content': Content,
    'c-footer': Footer,
    'c-layout': Layout
  }
}
</script>

<style></style>
