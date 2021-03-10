import Vue from 'vue'
import Button from './Button'
import Switch from './Switch'
import Loading from './Loading'

Vue.component('c-button', Button)
Vue.component('c-switch', Switch)
Vue.component('c-loading', Loading)
new Vue({
  el: '#app',
  created() {},
  data() {
    return {
      checked: false,
      checked1:true
    }
  },
  methods: {
    f1() {
      alert(1)
    }
  }
})
