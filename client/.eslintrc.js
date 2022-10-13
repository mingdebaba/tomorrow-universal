module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "eol-last": 0,
    "indent": 0,
    'vue/multi-word-component-names': 0,
    "no-tabs": 0, 
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "vue/no-multiple-template-root":'off' ,
    "quotes": [1,"single"],
  }
}