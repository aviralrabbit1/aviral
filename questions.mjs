import inquirer from "inquirer";
import open  from "open";
import axios from 'axios' // for making http request
import fs from 'fs';
import path from 'path';
import os from 'os';
// import gdown from 'gdown';
import { exec } from 'child_process'; // For running commands from terminal

const prompt = inquirer.createPromptModule(); // creates a self contained inquirer module,

function greeting(name) {
    setTimeout(() => {
        console.log(`Have a great day ahead, ${name}!`);
        console.log('Goodbye!');
    }, 1500);
}

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
      message: ({ username }) => `What action would you like to take, ${username}?`, // utilising the username here
      choices: [
        'Send me an email',
        'Schedule a chat/meeting?',
        // 'Download my resume?',
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
                    console.log("\nSee you soon at the inbox!\n");    
                    greeting(answers.username);                
                }, 1500);
                break;

            case 'Schedule a chat/meeting?':
                console.log(`Scheduling a time...`);
                open("https://www.picktime.com/abdd237e-2bff-4ad3-b24a-fea96c268a7a");
                setTimeout(() => {
                    console.log("\nWill see you there!\n");
                    greeting(answers.username);                    
                }, 1500);    
                break;

            // case 'Download my resume?':
            //     console.log(`Downloading resume...`);
            //     downloadPDF();
            //     // curlPDF();
            //     setTimeout(() => {  
            //         greeting(answers.username);                
            //     }, 1500);

            case 'Quit':
                console.log(`Have a great day ahead, ${answers.username}!`);
                setTimeout(() => {
                    console.log('Goodbye!');
                    process.exit(0);
                }, 1900);
        }
    })    
    .catch(error => {
      console.error('Error:', error);
    });
}

export default inquiry;
