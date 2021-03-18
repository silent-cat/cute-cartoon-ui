import Vue from 'vue'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Icon from './Icon'
import Switch from './Switch'
import Loading from './Loading'
import Collapse from './Collapse'
import CollapseItem from './CollapseItem'
import Input from './Input'


Vue.component('c-button', Button)
Vue.component('c-button-group', ButtonGroup)
Vue.component('c-icon', Icon)
Vue.component('c-switch', Switch)
Vue.component('c-loading', Loading)
Vue.component('c-collapse', Collapse)
Vue.component('c-collapse-item', CollapseItem)
Vue.component('c-input',Input)
new Vue({
  el: '#app',
  created() {},
  data() {
    return {
      checked: false,
      checked1: true,
      selectedTab: ['1'],
      value1:'',
    }
  },
  methods: {
    f1() {
      alert(1)
    },
    fn(){
      console.log('事件被触发')
    }
  }
})
