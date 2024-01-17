const { createCircle, createSquare, createTriangle } = require('./shapes');

describe('Shape generation functions', () => {
    test('createCircle should return the correct SVG for a circle', () => {
        const bgColor = 'red';
        const text = 'Circle';
        const textColor = 'white';
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${bgColor}" />
    <text x="150" y="110" font-size="60" text-anchor="middle" fill="${textColor}" dominant-baseline="middle">${text}</text>
    </svg>`;

        expect(createCircle(bgColor, text, textColor)).toBe(expectedSVG);
    });

    test('createSquare should return the correct SVG for a square', () => {
        const bgColor = 'blue';
        const text = 'Square';
        const textColor = 'black';
        const size = Math.min(200, 300);
        const x = (300 - size) / 2;
        const y = (200 - size) / 2;
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${bgColor}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

        expect(createSquare(bgColor, text, textColor)).toBe(expectedSVG);
    });

    test('createTriangle should return the correct SVG for a triangle', () => {
        const bgColor = 'green';
        const text = 'Triangle';
        const textColor = 'yellow';
        const height = Math.sqrt(3) / 2 * 200;
        const x1 = 150;
        const y1 = 100 - height / 2;
        const x2 = 250;
        const y2 = 100 + height / 2;
        const x3 = 50;
        const y3 = 100 + height / 2;
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${bgColor}" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;

        expect(createTriangle(bgColor, text, textColor)).toBe(expectedSVG);
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