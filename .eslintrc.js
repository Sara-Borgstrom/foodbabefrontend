module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "react-hooks"
  ],
  "rules": {
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "brace-style": [
      "error",
      "1tbs",
      {
        "allowSingleLine": true
      }
    ],
    "comma-dangle": [
      "error",
      "never"
    ],
    "consistent-return": "off",
    "curly": "error",
    "eol-last": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/href-no-hash": "off",
    "no-alert": "off",
    "no-console": "off",
    "no-debugger": "off",
    "no-else-return": "off",
    "no-irregular-whitespace": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "no-param-reassign": "off",
    "no-restricted-syntax": "off",
    "object-curly-newline": [
      "error",
      {
        "ObjectExpression": {
          "consistent": true
        },
        "ObjectPattern": {
          "multiline": true
        }
      }
    ],
    "prefer-template": "error",
    "react/destructuring-assignment": "off",
    "react/forbid-prop-types": "off",
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "selfClosing": "after-props",
        "nonEmpty": "after-props"
      }
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never",
        "children": true
      }
    ],
    "react/jsx-filename-extension": "off",
    "react/jsx-no-bind": "error",
    "react/jsx-uses-react": "warn",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/no-array-index-key": "off",
    "react/no-danger": "off",
    "react/no-did-mount-set-state": "error",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-multi-comp": [
      "error",
      {
        "ignoreStateless": true
      }
    ],
    "react/no-string-refs": "error",
    "react/prop-types": "off",
    "react/require-extension": "off",
    "react/sort-comp": "off",
    "react/jsx-indent": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "semi": "off"
  }
};