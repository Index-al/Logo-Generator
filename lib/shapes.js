// Description: This file contains the shapes functions
// Path: lib/shapes.js

// Function to create a circle SVG
function createCircle(color, text) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`
}

// Function to create a square SVG
function createSquare(color, text) {
    return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="${color}" />
    <text x="150" y="175" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`;
}

// Function to create a triangle SVG
function createTriangle(color, text) {
    return `<svg version="1.1" width="300" height="260" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 250,230 50,230" fill="${color}" />
    <text x="150" y="175" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`;
}

// Exporting the function
module.exports = {
    createCircle,
    createSquare,
    createTriangle
};