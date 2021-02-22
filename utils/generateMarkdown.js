// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![Github License](https://img.shields.io/badge/license-${license}-green)`
  } 
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `![Github License](https://img.shields.io/badge/license-${license}-green)`
  } 
  return '';
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
      return `## License
      
        This project is licensed under the ${license} License.
      `
    }
    return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Questions](#questions)
  
  ## Installation

  To install dependencies run the following command
  ${data.installation}

  ## Usage

  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributions}

  ## Test

  ${data.test}

  ## Questions

  If there are any further questions, please feel free to reaach out to ${data.name} by email or GitHub. \n\n
  - ${data.email} \n
  - [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
