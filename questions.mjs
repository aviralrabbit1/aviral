import inquirer from "inquirer";
import open  from "open";

const prompt = inquirer.createPromptModule(); // creates a self contained inquirer module,

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
                console.log(`Opening gmail...`);
                open("mailto:aviral.robin@gmail.com");
                setTimeout(() => {
                    console.log("\n See you soon at the inbox!\n");                    
                }, 3000);                
                break;   
                 
            case 'Quit':
                console.log(`Have a great day ahead, ${answers.username}!`);
                console.log('Goodbye!');
                process.exit(0);
          }
        })    
    .catch(error => {
      console.error('Error:', error);
    });
}

export default inquiry;
