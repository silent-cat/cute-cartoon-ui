<template>
  <div>
    <c-container>
      <c-aside>aside</c-aside>
      <c-container>
        <c-header>header</c-header>
        <c-content>content</c-content>
        <c-footer>footer</c-footer>
      </c-container>
    </c-container>
  </div>
</template>

<script>
import Header from '../../../src/Header'
import Content from '../../../src/Content'
import Footer from '../../../src/Footer'
import Aside from '../../../src/Aside'
import Container from '../../../src/Container'
export default {
  components: {
    'c-aside': Aside,
    'c-header': Header,
    'c-content': Content,
    'c-footer': Footer,
    'c-container': Container
  }
}
</script>

<style></style>
