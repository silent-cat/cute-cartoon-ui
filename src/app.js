import Vue from 'vue'
import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Icon from './Icon'
import Switch from './Switch'
import Loading from './Loading'
import Collapse from './Collapse'
import CollapseItem from './CollapseItem'
import Input from './Input'
import Col from './Col'
import Row from './Row'
import Tabs from './Tabs'
import TabsBody from './TabsBody'
import TabsHead from './TabsHead'
import TabsItem from './TabsItem'
import TabsPanel from './TabsPanel'

Vue.component('c-button', Button)
Vue.component('c-button-group', ButtonGroup)
Vue.component('c-icon', Icon)
Vue.component('c-switch', Switch)
Vue.component('c-loading', Loading)
Vue.component('c-collapse', Collapse)
Vue.component('c-collapse-item', CollapseItem)
Vue.component('c-input', Input)
Vue.component('c-col', Col)
Vue.component('c-row', Row)
Vue.component('c-tabs', Tabs)
Vue.component('c-tabs-body', TabsBody)
Vue.component('c-tabs-head', TabsHead)
Vue.component('c-tabs-item', TabsItem)
Vue.component('c-tabs-panel', TabsPanel)
new Vue({
  el: '#app',
  created() {},
  data() {
    return {
      checked: false,
      checked1: true,
      selected: ['1'],
      value1: '',
      selectedTab: 'tab1'
    }
  },
  methods: {
    f1() {
      alert(1)
    },
    fn() {
      console.log('事件被触发')
    }
  }
})
