import data from './lib/data.cjs';
import format from './lib/format.cjs';
// const data = require('./lib/data.cjs')
// const format = require('./lib/format.cjs');

import boxen from 'boxen';
// const boxen = require('boxen');

const box = boxen(format({ data }), {
    title: 'About me', 
    titleAlignment: 'center', 
    padding: 2, 
    margin: 3, 
    borderStyle: 'double',
    borderColor: '#e27d60',
    fullscreen: false,
    float: 'center',
    backgroundColor: '#41b3a3',
    // backgroundColor: '#553d67',
    textAlignment: 'left'
})

export default ({ json }) => json ? JSON.stringify(data) : box
