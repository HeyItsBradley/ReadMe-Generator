// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${response.title}

## Description

${response.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

${response.installation}

## Usage

${response.usage}

![alt text](assets/images/screenshot.png)

## License

${response.license}

## How to Contribute

${response.contributing}

## Tests

${response.tests}

    `;
}

module.exports = generateMarkdown;
