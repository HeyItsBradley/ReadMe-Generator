//This will include the packages needer to run this program
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

//This away will contain the questions to be asked to the user

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
    type: "confirm",
    message: "Would you like an image template?",
    name: "image",
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
    type: "list",
    message: "Which license are you using?",
    choices: ["MIT", "Apache", "GPLv2", "BSD 3-clause", "other"],
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

//This function will take in a filename and the data generated from the generate readMe functions and actually create the new file with the data.
function writeToFile(fileName, data) {
  fs.writeFile(`./Created-Readme/${fileName}`, data, (err) => {
    err ? console.error(err) : console.log("success!");
  });
}

//This will ask the user the questions, then store those responses and then pass the data from the questions into a new functions.
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    let MadeREADME = generateMarkdown(response);
    writeToFile("README.md", MadeREADME);
  });
}

//Whent the JS file is called, the program will kick off
init();
