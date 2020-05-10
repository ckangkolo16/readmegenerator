const path = require("path");
const fs = require("fs");
const api = require("./utils/api");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is your github user name?",
    name: "username",
  },

  {
    type: "input",
    message: "What is the description of the app?",
    name: "description",
  },

  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },

  {
    type: "input",
    message: "What did you use to install?",
    name: "install",
  },

  {
    type: "input",
    message: "What licenses did you use?",
    name: "license",
  },

  {
    type: "input",
    message: "Who are the collobarators on this project?",
    name: "contributors",
  },

  {
    type: "input",
    message: "What tests should be ran on this project?",
    name: "tests",
  },

  {
    type: "input",
    message: "What questions do you have?",
    name: "questions",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
  inquirer.prompt(questions).then((inquirerResponse) => {
    api.getUser(inquirerResponse.username).then(({ data }) => {
      writeToFile(
        "README.md",
        generateMarkdown({ ...inquirerResponse, ...data })
      );
    });
  });
}

//console.log(data);

init();
