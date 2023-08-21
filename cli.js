#!/usr/bin/env node

console.log('Working fine')

// const pkg = require('..')
// console.log(pkg())

const minimist = require('minimist')
const pkg = require('.')

const options = {
  alias: { json: 'j' }
}

// `npx package_name -j` flag will help get the raw JSON

const argv = minimist(process.argv.slice(2), options)

console.log(pkg(argv))