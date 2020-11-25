// array of questions for user
const questions = require("./questions");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

function writeToFile() {
inquirer.prompt(questions).then((response) => {

  const readmeTemplate = generateMarkdown(response)

  fs.writeFile(
    "README.md", readmeTemplate,
    (err) =>
      err
        ? console.log(err)
        : console.log("Success!Take a look at your README.md")
  );
});
}

// function to initialize program
function init() {
  writeToFile();
}

// function call to initialize program
init();
