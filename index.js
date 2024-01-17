// Require necessary libraries
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

// Function to prompt user input
function getUserInput() {
    // Use inquirer to prompt the user for input
    return inquirer.prompt([
        {
            type: 'input',
            name: 'color',
            message: 'Enter your desired color:'
        },
        {
            type: 'input',
            name: 'shape',
            message: 'Enter your desired shape:'
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter your logo text:'
        }
    ])
}

// Function to generate SVG content
function generateSVG(input) {
    // Use the user input(color, shape, text) and the SVG.js library to create an SVG string, then return it as svcString
    
}

// Function to save SVG to a file
function saveSVG(svgContent, fileName) {
    // Write the file to the current working directory
    fs.writeFile(fileName, svgContent, (err) =>
        err ? console.error(err) : console.log('File saved successfully!')
    );
}

// Main function to run the application
async function main() {
    const userInput = await getUserInput();
    const svgContent = generateSVG(userInput);
    saveSVG(svgContent, './examples/output.svg');
    console.log('SVG Logo created successfully! Check the examples folder for the output file.');
}

// Run the application
main();