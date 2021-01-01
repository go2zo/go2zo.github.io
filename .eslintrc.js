module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    node: true,
  },
  plugins: [
    'prettier',
    'import',
  ],
  extends: [
    'airbnb-base',
    'plugin:gridsome/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    '@vue/prettier',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-indent': ['error', 2],
    'vue/no-v-html': 'off',
    // 'import/extensions': ['error', 'always'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['^~', path.resolve(__dirname, './src')],
        ],
        extensions: ['.js', '.vue'],
      },
    },
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
