
const generateTemplate = templateData => {
    const {title, description, install, contribution, usage, licenses, email, github} = templateData; 
    

var licenseString = ""
var licenseNav = ""
var licenseGenerator = function() {
    if(licenses.includes('APACHE')) {
        licenseString += "APACHE "        
    }
    if(licenses.includes('MIT')) {
        licenseString += "MIT "        
    }
    if(licenses.includes('MOZILLA')) {
        licenseString += "MOZILLA "        
    }
    if(licenses.includes('PERL')) {
        licenseString += "PERL "        
    }
    if(licenses.includes('ISC')) {
        licenseString += "ISC "        
    }
    if(licenses.includes('IBM')) {
        licenseString += "IBM "        
    }  
    if(licenseString) {
        licenseNav = "- [Licenses](#licenses)"
    }
   
}

licenseGenerator(licenses)

console.log(licenseString)
   
return `
# ${title}

## Description
${description}

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [Contribution Guidelines](#contributions)
- [Questions](#questions)
${licenseNav}


## Installation
${install}

## Usage
${usage}

## Contributions
${contribution}

## License
${licenseString}


## Questions
If you have any questions regarding this project please feel free to contact via [EMAIL](${email})

You can also find more of my projects on [GitHub]('https://www.github.com/'${github}) 

`
}
module.exports = generateTemplate;