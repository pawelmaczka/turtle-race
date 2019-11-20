module.exports = {
    "env": {
      "browser": true,
      "es6": true,
      "jest": true,
    },
    "extends": [
      "airbnb",
      "eslint:recommended",
      "plugin:import/recommended",
      "plugin:react/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "prettier/react",
      "prettier/@typescript-eslint",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "prettier",
        "@typescript-eslint",
        "react-hooks",
    ],
    "rules": {
      "prettier/prettier": [2,
        {
          "semi": true,
          "singleQuote": true,
          "trailingComma": "es5",
          "printWidth": 100,
          "tabWidth": 2,
          "arrowParens": "always",
          "jsxSingleQuote": false,
          "jsxBracketSameLine": false,
        }
      ],
      "no-restricted-imports": [
        "error",
        {
          "paths": [{
            "name": "styled-components",
            "message": "Please import from styled-components/macro."
          }],
          "patterns": [
            "!styled-components/macro"
          ]
        }
      ],
      "import/no-unresolved": 0,
      "import/prefer-default-export": 0,
      "react-hooks/exhaustive-deps": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-filename-extension": 0,
      "react/prop-types": 0,
      "react/jsx-props-no-spreading": 0,
    }
};
