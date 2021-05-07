const _ = require('lodash')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme, e, variants }) => {
  const letterSpacing = theme('letterSpacing', {})
  const wordSpacingVariants = variants('wordSpacing', [])

  const wordSpacingUtilities = _.map(letterSpacing, (scale, name) => ({
    [`.word-spacing-${e(name)}`]: {
      wordSpacing: `${scale}`,
    },
  }))

  addUtilities(wordSpacingUtilities, wordSpacingVariants)
})
