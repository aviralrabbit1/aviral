#!/usr/bin/env node

var clear = require('clear');
clear();

const { exec } = require('child_process');

exec('pokesay \"Hello there! My name is AviralVerma and i am a software     Engineer. Here is my info: \" pikachu', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`${stdout}`);
});


const minimist = require('minimist')
const pkg = require('.')

const options = {
  alias: { json: 'j' } // -j is a flag to access raw json data,
                      //  running `npx package_name -j`
}

const argv = minimist(process.argv.slice(2), options)

setTimeout(() => {  
  console.log(pkg(argv))
}, 1600);
