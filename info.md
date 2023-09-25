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

### Inquirer - A Comprehensive Library for common Interactive Command Line Interfaces
Inquirer is a versatile JavaScript library that provides a robust set of tools for creating interactive command-line user interfaces. It empowers developers to efficiently gather user input, facilitate choices, and manage dialogues within terminal applications. Install it using:
```sh
npm install inquirer
```

If you intend to use `Inquirer` as a development dependency, ensuring it doesn't affect other libraries,
```sh
# To install as devDependency
npm install --save inquirer
```

#### Implementation 
To utilize Inquirer within your script, import it and create a prompt module.

```js
import inquirer from 'inquirer';
const prompt = inquirer.createPromptModule(); // creates a self contained inquirer module,
// doesn't interfere with other libraries that use Inquirer when overwriting or adding new prompt types.

inquirer
  .prompt([
    // Define your questions here e.g.
    /* const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      }
    ] */   
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    // e.g. console.log(`Hello, ${answers.name}! Have a great day ahead!`);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Handle the scenario where the prompt couldn't be rendered
    } else {
      // Handle other error scenarios
    }
  });
```

Furthermore, we can encapsulate our prompts and questions within a function, which can either be synchronous or asynchronous: E.g.
```js
// inquiry.mjs
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

export default inquiry; // This function can be imported and used in another file (e.g., cli.js)
```

#### Miscellaneous: Installing additional functionality `inquirer-prompt-suggest` devDependency,
```sh
npm install --save inquirer-prompt-suggest
```

Once installed, you can incorporate `inquirer-prompt-suggest` into your script:
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
For example, this feature cancreate dynamic suggestions for user input, making the command-line interfaces even more user-friendly and efficient. 
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

To add subsequent inquiries one by one, e.g choosing between sending a mail or quitting the terminal,
```js
function inquiry() {
  const questions = [
    {
      type: 'input',
      name: 'username', // Input and store user's name
      message: 'What is your name?',
    },
    {
      type: 'list',
      name: 'action',
      message: ({ username }) => `What would you like to do, ${username}?`, // utilising the username here
      choices: [
        'Send me an email',
        'Quit',
      ],
    },
  ];

  return inquirer
    .prompt(questions)
    .then(answers => {
        const { username, action } = answers;
        switch (action) {
            case 'Send me an email':
                console.log(`Sending me an email?}`);
                // email sending logic here
                break;    
            case 'Quit':
                console.log(`Have a great day ahead, ${answers.username}!`);
                console.log('Goodbye!');
                process.exit(0); // exit terminal
          }
        })    
    .catch(error => {
      console.error('Error:', error);
    });
}
```
