// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [ //do this for all 2000000 questions; stack array of objects
    { type: "input", message: "What is yo mama name?", name: "question1" },
];

// TODO: Create a function to write README file
inquirer.
    prompt(questions)
    .then((response) => { 

  
    fs.writeFile("README.md",
        

        `# ${response.question1}` //change here

        , function (error) {
            if (error) {
                console.log(error)
            }
        })
    })

    console.log('get money')



// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
