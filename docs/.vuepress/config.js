module.exports = {
  title: '主题配置',
  description: 'theme config',
  dest: 'dist',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Hello, World.',
      text: 'english',
      description: '📦 🎨 A api-friendly theme for VuePress.',
    },
    '/zh/': {
      lang: 'zh-hans',
      title: 'Hello, World.',
      text: '中文',
      description: '📦 🎨 一个面向 RESTful API 设计的开箱即用主题。',
    },
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
      },
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/berlinen/interview-highlights',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
      // 假如文档放在一个特定的分支下：
    docsBranch: 'master',

    repoLabel: '查看源码',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我改善此页面！',
    // editLinkText: 'Help us improve this page',
    lastUpdated: 'Last Updated', // string | boolean

    sidebarGroupOrder: [
      'getting-started',
      'configurations'
    ],
  },
  serviceWorker: false,
  markdown: {
    lineNumbers: true
  },
  plugins: [
    [
      'vuepress-plugin-yuque', {
        html: true,
        repoUrl: 'https://souche.yuque.com/souche_blog/hxqhhs',
        authToken: 'm3DjDKg7PQVrORVj6ClSpLUjXX2toG8CtwtBLRsO'
      }
    ]
   ]
}