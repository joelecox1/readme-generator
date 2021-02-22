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
  * ${renderLicenseLink(data.license)}
  * [Contributors](#contributors)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributors

  ${data.contributors}

  ## Test

  Run the following commad to run tests on your application:

  ${data.test}

  ## Questions

  If there are any further questions, please feel free to reach out to me. 

  - Email: ${data.email}
  - GitHub: [${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
