#!/usr/bin/env node

console.log('Working fine')

// const pkg = require('..')
// console.log(pkg())

const minimist = require('minimist')
const pkg = require('.')

const options = {
  alias: { json: 'j' } // -j is a flag to access raw json data,
                      //  running `npx package_name -j`
}

const argv = minimist(process.argv.slice(2), options)

console.log(pkg(argv))
