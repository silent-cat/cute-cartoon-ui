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
import Pagination from './Pagination'
import Toast from './Toast'
import plugin from './plugin'
import Popover from './Popover'
import Container from './Container'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Aside from './Aside'

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
Vue.component('c-pagination', Pagination)
Vue.component('c-toast',Toast)
Vue.use(plugin)
Vue.component('c-popover',Popover)
Vue.component('c-container',Container)
Vue.component('c-header',Header)
Vue.component('c-content',Content)
Vue.component('c-footer',Footer)
Vue.component('c-aside',Aside)
new Vue({
  el: '#app',
  created() {},
  data() {
    return {
      checked: false,
      checked1: true,
      selected: ['1'],
      value1: '',
      selectedTab: 'tab1',
      // 分页组件
      pageSize: 2, //每页显示20条数据
      currentPage: 1, //当前页码
      count: 0, //总记录数
      items: [],
      // 日历组件

      selMode: 'singleSel', // singleSel, mutiSel, rangeSel
      list: [
        {
          year: '2019',
          month: '8',
          day: '21'
        },
        {
          year: '2019',
          month: '8',
          day: '20'
        },
        {
          year: '2019',
          month: '7',
          day: '10'
        }
      ],
      curSel: {
        year: '2019',
        month: '8',
        day: '23'
      },

      items:[
        {name:'选项一',isChecked:true},
        {name:'选项二',isChecked:false},
        {name:'选项三',isChecked:false},
      ]
    }
  },
  mounted() {
    //请求第一页数据
    this.getList()
  },
  methods: {
    f1() {
      alert(1)
    },
    fn() {
      console.log('事件被触发')
    },
    getList() {
      //模拟
      // let url = `/api/list/?pageSize=${this.pageSize}&currentPage=${this.currentPage}`
      // this.$http.get(url).then(({ body }) => {
      //   //子组件监听到count变化会自动更新DOM
      //   this.count = body.count
      //   this.items = body.list
      // })

      this.count = 25
      this.items = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 25 }
      ]
    },

    // //从page组件传递过来的当前page
    pageChange(page) {
      console.log(page)
      this.currentPage = page
      this.getList()
    },

    showToast() {
      this.$toast(`<strong style="color:red">message11${parseInt(Math.random() * 100)}</strong>`, {
        enableHtml: true,
        position: 'top',
        autoClose:false,
        closeButton: {
          text: '关闭',
          callback: () => {
            console.log('关闭成功')
          }
        },
      })
    }
  }
})
