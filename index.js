// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
/*
descriptions
installation instructions, 
usage information
contribution guidelines
test instructions
*/
const questions = [
  {
    type: "input",
    message: "Please input a title:",
    name: "title",
  },
  {
    type: "input",
    message: "What will the description be?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What is the usage information",
    name: "usage",
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What are the test instructions?",
    name: "tests",
  },
  {
    type: "input",
    message: "Which license are you using?",
    name: "license",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions);
}

// Function call to initialize app
init();
