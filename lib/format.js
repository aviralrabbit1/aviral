const { EOL } = require('os')

const omit = require('lodash.omit')
const { render } = require('prettyjson')

const renderOpts = {
  dashColor: 'cyan',
  keysColor: 'magenta',
  stringColor: 'white',
  numberColor: 'yellow',
  multilineStringColor: 'red',
  noAlign: false,
  defaultIndentation: 4,
  escape: true,
}

const fields = (data) => render(omit(data, ['name', 'title']), renderOpts)

module.exports = ({ data }) => `${fields(data)}`
