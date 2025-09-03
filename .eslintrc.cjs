module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    parser: {
      js: 'espree',
      ts: '@typescript-eslint/parser',
      '<template>': 'espree',
    },
  },
  plugins: ['vue'],
  globals: {
    definePageMeta: 'readonly',
    useHead: 'readonly',
    ref: 'readonly',
    onMounted: 'readonly',
    computed: 'readonly',
    watch: 'readonly',
    nextTick: 'readonly',
    clearError: 'readonly',
  },
  rules: {
    // Vue specific rules
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'error',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    'vue/no-v-html': 'warn',
    
    // General rules
    'no-console': 'off', // Allow console for debugging
    'no-debugger': 'error',
    'no-unused-vars': 'warn',
    'prefer-const': 'error',
    'no-var': 'error',
    
    // Code style
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'indent': 'off', // Let Prettier handle Vue files
      },
    },
  ],
};
