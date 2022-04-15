import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  lang: 'zh-CN',
  title: '清单',
  description: '网站 🎉 软件 ✨ 配置',
  head: [['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }]],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.svg',
    navbar: [
      {
        text: '网站',
        link: '/website/',
      },
      {
        text: '软件',
        link: '/software/',
      },
    ],
    lastUpdatedText: '最后更新',
    contributorsText: '贡献值',
    backToHome: '打开首页',
  },
})
