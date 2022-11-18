// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let Badge = `[![License:${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`;
  return Badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = `(https://opensource.org/licenses/${license})`;
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  let fullLicense = badge + link;
  return fullLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}
    
${renderLicenseSection(data.license)}

## Description

${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

## Installation

To install necessary depenencies, run the follwing command:

\`\`\`md
${data.installation}
\`\`\`

## Usage

${data.usage}


![alt text](assets/images/screenshot.png)

## How to Contribute

${data.contributing}

## Tests

${data.tests}

## Questions?

Reach out to me!

-GitHub: [${data.username}](https://github.com/${data.username})

-Email: ${data.email}

    `;
}

module.exports = generateMarkdown;
