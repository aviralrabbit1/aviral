const omit = require('lodash.omit')
const { render } = require('prettyjson')

const renderOptions = {
  dashColor: 'red',
  keysColor: 'blue',
  stringColor: 'black',
  numberColor: 'rainbow',
  multilineStringColor: 'red',
  inlineArrays: true,
  noAlign: true,
  defaultIndentation: 4,
  escape: true,
}

const fields = (data) => render(omit(data, ['name', 'title', 'contact']), renderOptions)

module.exports = ({ data }) => `${fields(data)}`
