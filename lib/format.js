const { EOL } = require('os')

const omit = require('lodash.omit')
const { render } = require('prettyjson')

const renderOpts = {
  dashColor: 'cyan',
  keysColor: 'magenta',
  stringColor: 'yellow',
  numberColor: 'rainbow',
  multilineStringColor: 'red',
  inlineArrays: true,
  noAlign: true,
  defaultIndentation: 4,
  escape: true,
}

const fields = (data) => render(omit(data, ['name', 'title', 'contact']), renderOpts)

module.exports = ({ data }) => `${fields(data)}`
