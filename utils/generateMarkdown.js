// function to generate markdown for README
function generateMarkdown({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
  github,
  email,
}) {
  return  ` 
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
}

module.exports = generateMarkdown;
