import inquirer from "inquirer";

const prompt = inquirer.createPromptModule(); // creates a self contained inquirer module,

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