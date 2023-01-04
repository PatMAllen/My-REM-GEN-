// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
console.log('Are you ready to Create a REM-GEN 1');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your Project title?',
      name: 'title',
      validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'How do you Install your app?',
      name: 'installation',
      validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'Are there any Instruction that to be followed?',
      name: 'instructions',
      validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'The amount of Credits?',
      name: 'installation',
      validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'input',
      message: 'How do you use your app?',
      name: 'usage',
      validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },
    {
      type: 'List',
      message: 'What liscense did you need?',
      name: 'license',
      choices: ['The MIT License', 'The GPL Liscense', 'Apache Liscense', 'N/A']
      validate: (value)=>{if(value){return true} else {return 'I need a value to continue'}},
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { 

     return inquirer.prompt(questions);
}

// Function call to initialize app
init();
