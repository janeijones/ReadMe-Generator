// Require packages for application fs, inquirer 
const fs = require('fs')
const inquirer = require('inquirer')

// Array of question objects to be asked for user input
const questions = [
    {
        type: "input",
        message: "Enter the project name:",
        name: "title"
    },

    {
        type: "input",
        message: "Enter the project description:",
        name: "description"
    },

    {
        type: "input",
        message: "Enter the steps required for install:",
        name: "installation"
    },

    {
        type: "input",
        message: "Enter the instructions and examples for use:",
        name: "usage"
    },


    {
        type: "input",
        message: "Enter any collaborator used (including github linkes and third-party assets):",
        name: "credits"
    },

    {
        type: "input",
        message: "Enter instructions for testing:",
        name: "test"
    },

    {
        type: "list",
        choices: ['MIT', 'Mozilla'],
        name: "license"
    },

    {
        type: "input",
        message: "Choose badge type:",
        name: "badge"
    },

    {
        type: "input",
        message: "Enter GitHub ID:",
        name: "githubId"
    },

    {
        type: "input",
        message: "Enter the deployed website url:",
        name: "websiteUrl"
    },

    {
        type: "input",
        message: "Enter email address:",
        name: "email"
    },
];

// TODO: C
inquirer.
    prompt(questions)
    .then((response) => {

        
        

        writeToRead(response)
        
    })




function renderBadge(licenseType) {
    if (licenseType === `MIT`) {
        return `[![License](https://img.shields.io/badge/License-MIT-pink.svg)](https://opensource.org/licenses/MIT)`
    }
    else if (licenseType === `Mozilla`) {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }
}

function renderLicenseInfo(licenseType) {
    if (licenseType === `MIT`) {
       var licenseData = `<ul> <li> <a href = "https://opensource.org/licenses/MIT"> MIT License </a></li> <li> This project is licensed under MIT</li> </ul>`
            
    }
    else if (licenseType === `Mozilla`) {
        licenseData = `<ul> <li> <a href = "https://opensource.org/licenses/MPL-2.0"> Mozilla Public License 2.0 </a></li> <li> This project is licensed under Mozilla</li> </ul>`
    }
    return licenseData
}

function writeToRead(response) {
    var licenseName = response.license
    var badge = renderBadge(licenseName)
    var licenseInfo = renderLicenseInfo(licenseName)

    fs.writeFile("README.md",

`# ${response.title} ${badge}
                       

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#Tests)
- [License](#license)
- [Questions](#quesions)

## Installation
${response.installation}
    
## Usage
${response.usage}

## Credits 
${response.credits}

## Tests
${response.test}

## License ${badge}
<h3> ${licenseName}: </h3>
${licenseInfo}

## Questions
<ul> <li><a href = "https://github.com/${response.githubId}">GitHub Profile </li>
<li> <a href = "https://${response.websiteUrl}">Visit Deployed Website</li>
<li>Email: ${response.email} </li>` //generate the README. 

        , function (error) {
            if (error) {
                console.log(error)
            }
        })
}


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
