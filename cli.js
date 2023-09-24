#!/usr/bin/env node

import clear from 'clear';
clear();

import { exec } from 'child_process';

exec('pokesay \"Hello there! My name is AviralVerma and i am a software     Engineer. Here is my info: \" pikachu', (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${err}`);
    return;
  }

  console.log(`${stdout}`);
});


import minimist from 'minimist';
import pkg from './index.mjs';

const options = {
  alias: { json: 'j' } // -j is a flag to access raw json data,
  //  running `npx package_name -j`
}

const argv = minimist(process.argv.slice(2), options)

setTimeout(() => {  
  console.log(pkg(argv));
}, 2600);
