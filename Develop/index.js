// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require('util');

const generateMarkdown = require('./utils/generateMarkdown');

console.log('Are you ready to Create a REM-GEN 1');
// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your Project title?',
      name: 'title',
    },
    {
      type:'input',
      message: 'What is this project about? Please give an description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Table of Contents.',
      name:'Table of Contents'
    },
    {
      type: 'input',
      message: 'How do you Install your app?',
      name: 'installation',
      
    },
    {
      type: 'input',
      message: 'Are there any Instruction that need to be followed?',
      name: 'instructions',
      
    }, 
    {
      type: 'input',
      message: 'How is your app used? Give instructions',
      name: 'usage',
      
    },
    {
      type: 'List',
      message: 'What liscense did you need?',
      name: 'license',
      choices:'licenses'      
    },
    {
      type: 'input',
      message: 'What is your GitHub username:',
      name: 'git',
      
    },
    {
      type: 'input',
      message: 'What is your E-mails',
      name: 'email',
     
    },
    {
      type: 'input',
      message: 'Who contributed to this project',
      name: 'contributing',
    }

]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
      console.log(fileName)
      console.log(data)
      if(err) {
        return console.log(err)
      } else {
        console.log('success')
      }
    })
}

// TODO: Create a function to initialize app
function init() { 
  inquirer.prompt(questions)
  .then(function(data) {
    writeToFile('README.md', generateMarkdown(data));
    console.log(data)
  })

}
// Function call to initialize app
init();
