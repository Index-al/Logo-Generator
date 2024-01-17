const { createCircle, createSquare, createTriangle } = require('./shapes.js');

describe('Shape generation functions', () => {

    // Test createCircle function
    test('createCircle should return correct SVG for a circle', () => {
        const color = 'red';
        const text = 'Test';
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="80" fill="${color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`;

        expect(createCircle(color, text)).toBe(expectedSVG);
    });

    // Test createSquare function
    test('createSquare should return correct SVG for a square', () => {
        const color = 'blue';
        const text = 'Test';
        const expectedSVG = `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="50" width="200" height="200" fill="${color}" />
    <text x="150" y="175" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`;

        expect(createSquare(color, text)).toBe(expectedSVG);
    });

    // Test createTriangle function
    test('createTriangle should return correct SVG for a triangle', () => {
        const color = 'green';
        const text = 'Test';
        const expectedSVG = `<svg version="1.1" width="300" height="260" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 250,230 50,230" fill="${color}" />
    <text x="150" y="175" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`;

        expect(createTriangle(color, text)).toBe(expectedSVG);
    });
});

// Run the test with the following command:
// npm test

// The test output should look something like this:
// PASS  lib/shapes.test.js
//   Shape generation functions
//     ✓ createCircle should return correct SVG for a circle (3 ms)
//     ✓ createSquare should return correct SVG for a square (1 ms)
//     ✓ createTriangle should return correct SVG for a triangle
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.468 s
// Ran all test suites.

// The test output shows that all the tests passed. This means that the shape generation functions are working as expected.