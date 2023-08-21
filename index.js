const { render } = require('prettyjson')
const data = require('./lib/data')
const format = require('./lib/format')

module.exports = ({ json }) => json ? JSON.stringify(data) : format({ data })
