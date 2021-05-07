// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'prism-themes/themes/prism-vsc-dark-plus.css'
import '~/assets/style/index.scss'

import Typography from 'typography'
import DefaultLayout from '~/layouts/Default'
import Section from '~/components/Section'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.6,
  scaleRatio: 1.9,
  headerFontFamily: [
    'Jost',
    'Helvetica',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Jost',
    'Helvetica',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
})

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('Section', Section)

  // Add attributes to HTML tag
  head.htmlAttrs = { lang: 'ko' }

  head.style.push({
    type: 'text/css',
    cssText: typography.toString(),
  })
}
