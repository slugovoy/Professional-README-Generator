// array of questions for user
const questions = require("./questions");
const inquirer = require("inquirer");
const fs = require("fs");

function writeToFile() {
inquirer.prompt(questions).then((response) => {
  JSON.stringify(response);

  const {
    title,
    description,
    installation,
    usage,
    contribution,
    test,
    license,
    github,
    email,
  } = response;

  const readmeTemplate = ` 
# ${title}

![License](https://img.shields.io/badge/License-${license}-blue)
       
## Description
${description}
       
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#tests)
* [License](#license)
* [Questions](#questions)
       


## Installation
\`\`\`
${installation}
\`\`\`

## Usage
${usage}

       
## Contributing
${contribution}
       
## Test
${test}
       
## License
${license}

## Questions
GitHub profile:  https://github.com/${github}

Email: ${email}`;

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
