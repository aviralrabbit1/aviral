# [Aviral](https://www.npmjs.com/package/aviral)

## To interact in your terminal, run command - 
```sh
# <package_manager> aviral, where <package_manager> = npx, pnpx or bun. For optimized loading, use
bunx aviral
```

## To check the current package version, run
- ```sh
  # For updating the patch version:
  npm version patch
  ```
- ```sh
  # For updating the major version:
  npm version major
  ```

## To publish the package [npm](https://www.npmjs.com/) registry, run
```sh
npm publish
```

### To rename a npm package,

1. #### Unpublishing a Package from the npm registry Within 24 Hours of Publication,
  ```sh
  npm unpublish <package_name> --force
  ```

2. #### Unpublishing a Package Within 72 Hours (Subject to Specific Requirements):
  ```sh
  npm unpublish <package_name> -f
  ```

3. #### Renaming and Publishing a New Package Name:
  ```sh
  pkg-rename old-package-name --publish
  ```

### To enhance the aesthetic presentation of our output, employ
```sh
npm install prettyjson
```

### For selectively excluding particular data points within a JSON dataset,
```sh
npm install lodash.omit
```

### Pokesay: A command-line application with a Pokémon theme,
- Install with
  ```sh
  npm install pokesay
  ```

#### Pokesay operates as follows:
```bash
pokesay "message" pokemon-name
```

where 
- `"message"` is the second argument,
- `pokemon-name`: denotes one of the following options:  **pikachu**(default), **bulbasaur**, **squirtle** or **charmander**.

### To utilize the available modules within Pokesay, update the `bin` section in the package.json file as follows:
- Previously set as `./cli.js`,
- Now configured as:
  ```sh
  npm run start
  ``` 
Within the package.json, the "start" script is defined as:
- ```json
  "start" : "pokesay \\" `Message` \\" `pokemon-name` && `./cli.js`"
  ```

#### To make use of Pokesay, incorporate the following script into `./cli.js`:
```js
const pkg = require('..') //package name
console.log(pkg())
```

For example, to parse command-line arguments:
```js
const minimist = require('minimist')
const pkg = require('.')

const options = {
  alias: { json: 'j' } // Define an alias for accessing raw JSON data using the -j flag, e.g., `npx package_name -j`
}

const argv = minimist(process.argv.slice(2), options)

console.log(pkg(argv))
```

### To clear the terminal screen prior to displaying output, you can employ the `clear` module by executing the following command:,
```
npm install clear
```

To incorporate this functionality into your JavaScript script, import the "clear" module
```js
const clear = require('clear');
clear();
```
This will ensure that the terminal screen is cleared before your script's output is presented.

### To efficiently interact with Operating System (OS) functionalities via system commands, 

- install the `child_process` module
```sh
npm install child_process
```
We can utilize the spawn function from the child_process module to initiate the execution of a system command within a new child process. This function enables us to pass various arguments and configure the command execution as needed. 

```js
const { spawn } = require('child_process');
const child = spawn('commandName', ['arg1', 'arg2', ...], { options });
```
In this code snippet:

- `commandName` represents the name of the system command you want to execute.
- `[arg1, arg2, ...]` is an array of arguments to be passed to the command.
- `{ options }` refers to an optional configuration object where you can specify various options for the child process.