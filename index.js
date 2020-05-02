const fs = require("fs");
const inquirer = require("inquirer");
const api = require("./utils/api");


const questions = [{
    message: "Enter your GitHub username:",
    name: "username"
  },
  {
  message: "Enter your project title:",
  name: "title"
},


];

function writeToFile(fileName, data) {
}


function init() {
    inquirer
  .prompt(questions)
  .then(function(response) {
    api.getUser(response.username).then(function(data){
        console.log(response);
    response.email = data.data.email;
    response.picture = data.data.avatar_url;
    console.log(response);
        // console.log(email);
        // console.log(picture);
        // console.log(data);
    })
  });

};

init();

