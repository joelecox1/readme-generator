// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Your name is required.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Your Github username is required.')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Your email address is required.')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Project title is required.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project. (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Project description is required.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do users install your project?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Project installation instrustions are required.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your application?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Project usage explanation is required.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to this project?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Project contributions are required.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command is typed to run tests on your project?',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log("Type the command to run tests. If not applicable please type 'n/a'");
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license is being used if any?',
    choices: ['APACHE 2.0', 'MIT', 'ISC', 'UNLICENSE', 'None']
  }
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(inquirerResponses => {
    console.log('Generating Readme...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
};

// Function call to initialize app
init();
