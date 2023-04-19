// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) return " ";
  return `[![License](https://img.shields.io/badge/License-BSD_3-${license}-Clause-blue.svg)]`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPL v3") {
    return "(https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "IBM") {
    return "(https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "BSD-2") {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "MOZILLA") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--${license}-blue.svg)] `
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  https://github.com/${data.github}/${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  To install the necessary dependencies, run the following command:
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## License
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  ${data.contributors}
  
  ## Tests
  To run tests, run the following command:
  ${data.tests}
  
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [${data.github}](https://github.com/${data.github}/).
  `;
}

module.exports = generateMarkdown;
