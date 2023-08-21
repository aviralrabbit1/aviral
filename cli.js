#!/usr/bin/env node

const minimist = require('minimist')
const pkg = require('.')

const options = {
  alias: { json: 'j' } // -j is a flag to access raw json data,
                      //  running `npx package_name -j`
}

const argv = minimist(process.argv.slice(2), options)

console.log(pkg(argv))
