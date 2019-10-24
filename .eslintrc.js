module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react', 'react-app'],
  parser: "babel-eslint",
  env: {
      browser: true,
      jest: true,
      node: true,
      es6: true,
  },
  "settings": {
        'ecmascript': 9,
        'jsx': true
  },
  "parserOptions": {
      "ecmaVersion": 2018,
      "ecmaFeatures": {
          "experimentalObjectRestSpread": true,
          "experimentalDecorators": true,
          "jsx": true
      },
      "sourceType": "module"
  },
  plugins: ['prettier', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    camelcase: 0,
    'react/no-array-index-key': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-underscore-dangle': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'no-use-before-define': 0,
  },
};
