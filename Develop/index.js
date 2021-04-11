// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [ //do this for all 2000000 questions; stack array of objects
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
        message: "Choose license type:",
        name: "license"
    },

    {
        type: "input",
        message: "Choose badge type:",
        name: "badge"
    },

    {
        type: "input",
        message: "What is your GitHub ID?",
        name: "githubId"
    },

    {
        type: "input",
        message: "What is your website URL?",
        name: "websiteUrl"
    },

    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
];

// TODO: Create a function to write README file
inquirer.
    prompt(questions)
    .then((response) => {


        fs.writeFile("README.md",
        
            `# ${response.title}

## Badge: ![License: ${response.license}]

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${response.installation}
            
## Usage
${response.usage}

## Credits 
${response.credits}

## License
${response.license}` //generate the README. 

            , function (error) {
                if (error) {
                    console.log(error)
                }
            })
    })





// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
