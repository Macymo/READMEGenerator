function generateMarkdown(data) {
  return `
  
# ${data.title}

## Description 
${data.description}

## Table of Contents



## Installation
${data.installation}

## Tests
${data.tests}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributions}

## Questions
${data.username}
${data.picture}

`;
}

module.exports = generateMarkdown;
