module.exports = {
  "root": true,
  "env": {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "ts": true
    }
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
  ],
  "rules": {
    "no-unused-expressions": "error"
  }
};
