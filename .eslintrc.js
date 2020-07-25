'use strict';

module.exports = {
  'extends': [ 'plugin:react/recommended' ],
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'modules': true
    }
  },
  'plugins': [ 'react' ],
  "rules": {
    "react/prop-types": 1,
}
};