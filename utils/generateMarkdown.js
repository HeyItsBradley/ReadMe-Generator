//This functions will take the inputed license name and create a cool badge for it.
function renderLicenseBadge(license) {
  if (license === "") {
    return license;
  } else {
    let Badge = `[![License:${license}](https://img.shields.io/badge/License-${license}-blue.svg)]`;
    return Badge;
  }
}

//this function will take the license and create a new link with it that will take you to a description of the license
function renderLicenseLink(license) {
  if (license === "") {
    return license;
  } else {
    let link = `(https://opensource.org/licenses/${license})`;
    return link;
  }
}

//this function will take the link and the badge and put them together.
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  let fullLicense = badge + link;
  return fullLicense;
}

//This functions takes the user input and appends data to a new readMe file,
//also appends the license badge/link that is created.
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
//This will export the generate markdown function so it can be used in the index.js file.
module.exports = generateMarkdown;
