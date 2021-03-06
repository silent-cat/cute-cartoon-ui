module.exports = {
  base:'/cube-ui-pc/',
  title: 'Cube UI',
  description: '一个好用的组件库',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', items:[{text:'开发指南',link:'/components/intro'},{text:'组件',link:'/components/button'}]},
      { text: 'GitHub', link: 'https://github.com/silent-cat/cube-ui-pc' },
    ],
    sidebar: [
      {
        title: '开发指南',
        children: ['/components/intro', '/components/get-started']
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/switch',
          '/components/collapse',
          '/components/icon',
          '/components/grid',
          '/components/pagination',
          '/components/tabs',
          '/components/toast',
          '/components/popover',
          '/components/input',
          '/components/container'
        ]
      }
    ],
    lastUpdated: '最近更新', // string | boolean
  },
}
