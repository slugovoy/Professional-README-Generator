// Variable for array of questions
const questions = require("./questions");
// Variables for packages
const { prompt } = require("inquirer");
const { writeFile } = require("fs/promises");
// Variable for function from external file
const generateMarkdown = require("./utils/generateMarkdown");

// function to initialize program
async function init() {
  try {
    //   Variable to keep promise
    let response = await prompt(questions);
    // Variable for generated template
    const template = generateMarkdown(response);
   
    // Write template to file body
    await writeFile("README'sExample.md", template);
    console.log("Done!");
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
