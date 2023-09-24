# UI

### For selectively excluding particular data points from within a JSON dataset, use `omit` function provided by the [Lodash](https://www.npmjs.com/package/lodash) library
```sh
npm install lodash.omit
```

### To enhance the aesthetic presentation of our output, employ [prettyjson](https://www.npmjs.com/package/prettyjson)
```sh
npm install prettyjson
```

- It formats JSON data in a visually appealing way when displayed in the console or any other text-based output.
- It display the data with proper indentation, colors, and formatting, making it easier to read and understand.

To use it, Add in your script: 
```js
const omit = require('lodash.omit')
const { render } = require('prettyjson')

const renderOptions = { style }

// function to format and display specific fields
const fields = (data) => render(omit(data, ['data_to_be_omitted']), renderOptions)

// Export the formatted data
module.exports = ({ data }) => `${fields(data)}` 
```

### To clear the terminal screen prior to displaying output, employ the `clear` module by executing the following command:,
```
npm install clear
```

- To incorporate this functionality into your JavaScript script, import the "clear" module
    ```js
    const clear = require('clear');
    clear();
    ```
- This will ensure that the terminal screen is cleared before your script's output is presented.

### Pokesay: A command-line application with a Pokémon theme,
- Install with
  ```sh
  npm install pokesay
  ```

- Pokesay operates as follows:
    ```bash
    pokesay "message" pokemon-name
    ```

where 
- `"message"` is the second argument,
- `pokemon-name`: denotes one of the following options:  **pikachu**(default), **bulbasaur**, **squirtle** or **charmander**.

#### To utilize the available modules within Pokesay, update the `bin` section in the package.json file as follows:
- Previously set as `./cli.js`,
- Now configured as:
  ```sh
  npm run start
  ``` 
- Within the package.json, the "start" script is defined as:
  ```json
  "start" : "pokesay \\" `Message` \\" `pokemon-name` && `./cli.js`"
  ```

### To enclose the data within a box for a visually appealing presentation, use [boxen](https://www.npmjs.com/package/boxen)
```sh
npm install boxen
```

1. Ensure that the data and format modules you're importing are in CommonJS format (e.g., data.cjs, format.cjs).
2. Modify the main script (e.g., index.js) to use ES modules by renaming it to index.mjs.

    ```js
    import data from './lib/data.cjs'; // Import raw JSON data
    import format from './lib/format.cjs'; // Import the prettyjson formatter
    import boxen from 'boxen';

    const box = boxen(format({ data }), { style });

    export default ({ parameter }) => parameter ? JSON.stringify(data) : box
    ```
- Make the follwing changes in `package.json`
  ```json
  {
    ...
    "main": "index.mjs",
    "type": "module",
    ...
  }
  ```
  