function generateMarkdown(data) {
  return `
	![GitHub](https://img.shields.io/github/license/Macymo/READMEGenerator)
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
