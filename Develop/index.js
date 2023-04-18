// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please describe the purpose of your project?",
    name: "description",
  },
  {
    type: "checkbox",
    message: "What is the license of your project?",
    name: "license",
    choices: ["GNU AGPL v3", "IBM", "MIT", "BSD-2", "MOZILLA"],
  },
  {
    type: "input",
    message: "List any project dependencies here.",
    name: "install",
  },
  {
    type: "input",
    message: "What languages or technologies are used in this project??",
    name: "usage",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "Please list any contributors.",
    name: "contributors",
  },
  {
    type: "input",
    message: "Please provide a walkthrough of any required tests?",
    name: "test",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.createPromptModule(questions).then(response => {
    console.log("Creating Professional README.md File");
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
}

// Function call to initialize app
init();
