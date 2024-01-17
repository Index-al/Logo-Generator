// Require necessary libraries
const inquirer = require('inquirer');
const fs = require('fs');
const open = require('open');
const shapes = require('./lib/shapes.js');

// Function to prompt user input
function getUserInput() {

    // Use inquirer to prompt the user for input
    return inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select your desired shape:',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'color',
            message: 'Type your desired color:'
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter your logo text:',
            validate: function (input) {
                if (input.length > 3) {
                    return 'Logo text should not exceed 3 characters.';
                }
                return true;
            }
        }
    ])
}

// Function to generate SVG content
function generateSVG(input) {
    // Get the shape function from the shapes object
    const shapeFunction = shapes[`create${input.shape}`];

    // Call the shape function to get the SVG string
    const svgString = shapeFunction(input.color, input.text);

    // Return the SVG string
    return svgString;
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
    doWeRoll(userInput.text);
    saveSVG(svgContent, './examples/logo.svg');
    console.log('SVG Logo created successfully! Check the examples folder for the output file.');
}

function doWeRoll(inputText) {
    const characters = inputText.toLowerCase();
    const counts = { r: 0, i: 0, c: 0, k: 0 };

    for (let char of characters) {
        if (counts.hasOwnProperty(char)) {
            counts[char]++;
        }
    }

    const total = Object.values(counts).reduce((acc, count) => acc + count, 0);
    if (total >= 3) {
        open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}

// Run the application
main();