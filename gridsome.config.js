// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Go2zo',
  siteDescription: 'Simple is the best.',
  siteUrl: 'https://go2zo.github.io',

  metadata: {
    author: 'Go2zo',
    github: 'go2zo',
  },

  templates: {
    Post: '/:path',
    Tag: '/tag/:id',
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
        },
        remark: {
          plugins: [
            ['@noxify/gridsome-plugin-remark-embed', {
              enabledProviders: ['Gist', 'Codesandbox'],
              Codesandbox: {
                editorsize: 100,
              },
            }],
          ],
        },
      },
    },
  ],

  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs',
      ],
    },
  },
};
