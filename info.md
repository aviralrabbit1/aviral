# Info

### **`#!/usr/bin/env node`**: 
This is called a "shebang" line and is used to tell the system that this script should be executed using the Node.js interpreter located in the user's PATH. 

#### To make use of [Pokesay](https://github.com/aviralrabbit1/aviral/blob/main/ui.md#pokesay-a-command-line-application-with-a-pok%C3%A9mon-theme), incorporate the following script into `./cli.js` to parse command-line arguments:
```js
import minimist from 'minimist';
import pkg from '.';  // e.g. import box from './index.mjs';
// imports the current directory (denoted by .) as a module. The package.json file of the current project is being imported. The pkg variable now contains the data from the project's package.json.

const options = {
  alias: { json: 'j' } // Define an alias for accessing raw JSON data using the -j flag, e.g., `npx package_name -j`
  // It configures options for the minimist module.
}

const argv = minimist(process.argv.slice(2), options)

console.log(pkg(argv))
```

- `process.argv` is an array that contains command-line arguments, with the first two items being the path to the Node.js executable and the path to the script itself.
- `slice(2)` is used to exclude these first two items. 
- The minimist function then parses the remaining arguments using the provided `options`.
- The result is stored in the `argv` variable.

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
In the above code snippet:

- `commandName` represents the name of the system command you want to execute.
- `[arg1, arg2, ...]` is an array of arguments to be passed to the command.
- `{ options }` refers to an optional configuration object where you can specify various options for the child process.

### Inquirer - a collection of common interactive command line user interfaces.
```sh
npm install inquirer
```
or
```sh
# To install as devDependency
npm install --save inquirer
```

To use `inquirer` in your script,
```js
import inquirer from 'inquirer';
const prompt = inquirer.createPromptModule(); // creates a self contained inquirer module,
// doesn't affect other libraries relying on inquirer when overwriting or adding new prompt types.

inquirer
  .prompt([
    /* Pass your questions in here 
    e.g.
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      }
    ]    
    */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // e.g. console.log(`Hello, ${answers.name}! Have a great day ahead!`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
```

Prompts and Questions can also be put together inside a function and used as callback.
e.g.
```js
function inquiry() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ];
  
  return inquirer
    .prompt(questions)
    .then(answers => {
      console.log(`Hello, ${answers.name}! Have a great day ahead!`);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

export default inquiry;
```

#### Miscellaneous: To install extra functional `inquirer` devDependency, add
```sh
npm install --save inquirer-prompt-suggest
```

To use `inquirer-prompt-suggest` in your script,
```js
import inquirer from 'inquirer';
import { promptSuggest } from "inquirer-prompt-suggest";

inquirer.prompt({
  type: 'suggest',
  name: 'some name',
  message: "Some Message",
  suggestions: ['Some Suggestions'],
});

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers, null, '  '));
});
```
example: 
```js
inquirer.prompt({
  type: 'suggest',
  name: 'day',
  message: "How's the day gonna be for you tomorrow?",
  suggestions: ['Fantastic', 'Great', 'Amazing', 'Happening', 'Fulfilling', 'Lovely'],
});

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers, null, '  '));
});
```
