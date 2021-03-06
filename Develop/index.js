const inq = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

//    <!-- Questions -->
const questions = [

    {
        type:'input',
        name:'github',
        message:'What is your github username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your email address?',
    },
    {
        type:'input',
        name:'title',
        message:'What is your Project Title?',
    },
    {
        type:'input',
        name:'details',
        message:'What are your Project Details?',
        
    },
    {
        type:'input',
        name:'installation',
        message:'What are the steps for installation?',
    },
    {
        type:'input',
        name:'benefits',
        message:'What are some benefits for the use of your project?',
    },
    {
        type:'list',
        name:'licenses',
        message:'What type of license(s) was chosen for your project?',
        choices:['MIT License', "APACHE 2.0", "None"]
    },
    {
       type:'input',
       name:'contributors',
       message:'Were there any contributions and/or collaborators to your project?',
    },
    {
      type:'input',
      name:'test',
      message:'What steps were taken to test project?',
   },
   {
       type:'input',
       name:'questions',
       message:'How can you be contacted for future contributions or questions about the project?'
   }
]
    function init() {
      inq.prompt(questions).then((data) => {
          console.log(data)
      fs.writeFile('GeneratedREADME/GeneratedREADME.md', generateMarkdown(data),(err) => err? console.error(err) : console.log("Success!"))})
   }

init();