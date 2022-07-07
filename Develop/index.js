const inquirer = require('inquirer');

// // TODO: Create an array of questions for user input
// const questions = [];
// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// var readmeDataArgs = process.argv.slice(2, process.argv.length);
// console.log(readmeDataArgs);

const promptUser = data => {
    return inquirer.prompt([      
    {
        type: 'input',
        name: 'title',
        message: 'What is title of the project?',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter a project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of the project',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a project description!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'install',
        message: 'Enter the installation instructions',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please enter the installation instructions!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines',
        validate: contributionInput => {
          if (contributionInput) {
            return true;
          } else {
            console.log('Please enter the contribution guidelines for this project!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter the usage information for this project!');
            return false;
          }
        }
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'Which licenses apply to this project? (Check all that apply)',
        choices: ['APACHE', 'MIT', 'MOZILLA', 'PERL', 'ISC', 'IBM']
        //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
            return true;
            } else {
            console.log('Please enter your email address!');
            return false;
            }
           }
       }, 
         {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: githubInput => {
            if (githubInput) {
            return true;
            } else {
            console.log('Please enter your GitHub username!');
            return false;
            }
           }
       },  
    ]);
  };


promptUser().then((data)=> console.log(data))

// console.log(data.title)


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
