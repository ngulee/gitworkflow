module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'func-names': 0,
    'no-debugger': 1,
    'no-param-reassign': 0,
    'no-underscore-dangle': 0,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
    'no-unused-vars': 1,
    'import/prefer-default-export': 0,
    'max-len': ['error', { code: 120 }],
  },
  globals: {
    DEBUG: true,
    SDK_VERSION: true,
    STUB_VERSION: true,
    PLUGIN_VERSION: true,
    mockBoxConfig: true,
    $mockBox: true,
    $YLHUnionAdSdk: true,
    $YLHSDK: true,
  },
};
