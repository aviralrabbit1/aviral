const { EOL } = require('os')

const omit = require('lodash.omit')
const { render } = require('prettyjson')

const renderOpts = {
  dashColor: 'cyan',
  keysColor: 'blue',
  stringColor: 'white'
}

const fields = (data) => render(omit(data, ['name', 'title']), renderOpts)

module.exports = ({ data }) => `${fields(data)}`