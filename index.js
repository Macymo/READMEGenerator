const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);



const questions = [{
    message: "Enter your GitHub username:",
    name: "username"
  },
    {
    message: "Enter your project title:",
    name: "title"
  },
    {
    message: "Enter a short project description:",
    name: "description"
  },
    {
    message: "What kind of license should your project have?",
    name: "license"
  },
    {
    message: "What command should be run to install dependencies?",
    name: "installation"
  },
    {
    message: "What command should be run to run tests?",
    name: "tests"
  },
    {
    message: "What does the user need to know about using the repo?",
    name: "usage"
  },
    {
    message: "What does the user need to know about contributing to the repo?",
    name: "contributions"
  },
    
];

async function writeToFile(fileName, data) {
    try {
      await writeFileAsync(fileName, data);
    }
    catch (err) {
      return err
    }
  };



function init() {
    inquirer
  .prompt(questions)
  .then(function(response) {
    api.getUser(response.username).then(function(data){
        // console.log(response);
    response.email = data.data.email;
    response.picture = data.data.avatar_url;
    // console.log(response);
    const apiData = response
    console.log(apiData)
    const markdownData = generateMarkdown(apiData);
    console.log(markdownData)
      writeToFile("README.md", markdownData);
    });
  });
  
};

init();
