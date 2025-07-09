import type { StorybookConfig } from '@storybook/nextjs'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async config => {
    // Добавляем алиасы
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src'),
      }
    }

    // Настройка для SVG
    const fileLoaderRule = config.module.rules.find(rule => rule.test?.test('.svg'))

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default config
