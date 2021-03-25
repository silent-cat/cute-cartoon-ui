module.exports = {
  base:'/cute-cartoon-ui/',
  title: 'cute-cartoon-ui',
  description: '一个好用的组件库',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/install/' },
      { text: 'GitHub', link: 'https://github.com/wh2887/init-ui/' },
    ],
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-started/']
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
        ]
      }
    ]
  }
}
