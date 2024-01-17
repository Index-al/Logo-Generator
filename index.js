// Require necessary libraries
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes.js');

// Function to prompt user input
function getUserInput() {
    // Define the color options
    const colorOptions = ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Black', 'Gray'];

    // Use inquirer to prompt the user for input
    return inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select your desired shape:',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'list',
            name: 'color',
            message: 'Select your desired color:',
            choices: colorOptions
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter your logo text:',
            validate: function (input) {
                if (input.length > 4) {
                    return 'Logo text should not exceed 4 characters.';
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
    saveSVG(svgContent, './examples/output.svg');
    console.log('SVG Logo created successfully! Check the examples folder for the output file.');
}

// Run the application
main();