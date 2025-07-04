import type { NextConfig } from 'next'


const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self' https:;;
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://yastatic.net https://passport.yandex.ru;
              style-src 'self' 'unsafe-inline' https://yastatic.net https://fonts.googleapis.com;
              img-src 'self' data: https:;
              frame-src https://*.yandex.ru https://passport.yandex.ru;
              connect-src *;
              font-src 'self' https://fonts.gstatic.com https:;
            `.replace(/\n/g, ''),
          }
        ],
      },
    ]
  },

      
    

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

export default nextConfig
