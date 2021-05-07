const plugin = require('tailwindcss/plugin')

module.exports = plugin(({ addUtilities, theme, e, variants }) => {
  const fontVariantVariants = variants('fontVariant', [])

  const fontVariantUtilities = [
    {
      '.smallcaps': { fontVariantCaps: 'small-caps' },
    },
    {
      '.allsmallcaps': { fontVariantCaps: 'all-small-caps' },
    },
    {
      '.nicezero': { fontVariantNumeric: 'slashed-zero' },
    },
    {
      '.hist': { fontVariantLigatures: 'historical-ligatures' },
    },
    {
      '.noligs': { fontVariantLigatures: 'no-common-ligatures' },
    },
    {
      '.tabular': { fontVariantNumeric: 'tabular-nums' },
    },
  ]

  addUtilities(fontVariantUtilities, fontVariantVariants)
})
