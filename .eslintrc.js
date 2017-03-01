module.exports = {
  'extends': 'standard',
  'plugins': [
    'standard',
    'promise',
    'react'
  ],
  'env': {
    'browser': true,
    'node': true,
    'jasmine': true
  },
  'ecmaFeatures': {
    'jsx': true,
    'modules': true
  },
  'env': {
    'browser': true,
    'node': true
  },
  'parser': 'babel-eslint',
  'rules': {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2
  }
}