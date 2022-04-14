import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  lang: 'zh-CN',
  title: '清单',
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/logo.svg',
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '网站',
        link: '/website/',
      },
      {
        text: '软件',
        link: '/software/',
      },
    ],
  },
})
