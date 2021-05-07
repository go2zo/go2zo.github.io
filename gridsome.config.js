// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals')

module.exports = {
  siteName: 'BlogStarter',
  siteDescription: 'Gridsome starter with TailwindCSS',
  icon: {
    favicon: 'src/assets/favicon.png',
    touhicon: 'src/assets/favicon.png',
  },
  chainWebpack: (config, { isServer }) => {
    config.module.rules.delete('svg')
    config.module.rule('svg')
      .test(/\.svg$/)
      .use('vue')
      .loader('vue-loader')
        .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')

    if (isServer) {
      config.externals(nodeExternals({
        allowlist: [
          /\.css$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/,
          /typeface-league-spartan/
         ]
      }))
    }
  },

  templates: {
    BlogPost: '/blog/:year/:month/:day/:slug',
  },
  plugins: [
    {
      use: "gridsome-plugin-extract-schema",
      options: {
        dest: `${__dirname}/src/.temp/schema.json` // Default
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPost',
        path: './content/blog/*/index.*',
        refs: {
          author: 'Author',
          tags: {
            typeName: 'Tag',
            create: true,
          }
        },
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
  ],
  transformers: {
    remark: {
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
