// Description: This file contains the shapes functions
// Path: lib/shapes.js

// Function to create a circle SVG
function createCircle(color, text) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${color}" />
    <text x="150" y="110" font-size="60" text-anchor="middle" fill="white" dominant-baseline="middle">${text}</text>
    </svg>`
}

// Function to create a square SVG
function createSquare(color, text) {
    const size = Math.min(200, 300); // Calculate the size based on the minimum dimension
    const x = (300 - size) / 2; // Calculate the x-coordinate to center the square
    const y = (200 - size) / 2; // Calculate the y-coordinate to center the square

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`;
}

// Function to create an equilateral triangle SVG
function createTriangle(color, text) {
    const height = Math.sqrt(3) / 2 * 200; // Calculate the height of the equilateral triangle
    const x1 = 150; // x-coordinate of the top vertex
    const y1 = 100 - height / 2; // y-coordinate of the top vertex
    const x2 = 250; // x-coordinate of the right vertex
    const y2 = 100 + height / 2; // y-coordinate of the right vertex
    const x3 = 50; // x-coordinate of the left vertex
    const y3 = 100 + height / 2; // y-coordinate of the left vertex

    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${color}" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`;
}

// Exporting the function
module.exports = {
    createCircle,
    createSquare,
    createTriangle
};