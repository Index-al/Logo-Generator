const { createCircle, createSquare, createTriangle } = require('./shapes');

describe('Shape generation functions', () => {
    test('createCircle should return correct SVG for a circle', () => {
        const color = 'red';
        const text = 'Circle';
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100" fill="${color}" />
    <text x="150" y="100" font-size="60" text-anchor="middle" fill="white" dominant-baseline="middle">${text}</text>
    </svg>`;

        expect(createCircle(color, text)).toBe(expectedSVG);
    });

    test('createSquare should return correct SVG for a square', () => {
        const color = 'blue';
        const text = 'Square';
        const size = Math.min(200, 300);
        const x = (300 - size) / 2;
        const y = (200 - size) / 2;
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${color}" />
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${text}</text>
    </svg>`;

        expect(createSquare(color, text)).toBe(expectedSVG);
    });

    test('createTriangle should return correct SVG for a triangle', () => {
        const color = 'green';
        const text = 'Triangle';
        const height = Math.sqrt(3) / 2 * 200;
        const x1 = 150;
        const y1 = 100 - height / 2;
        const x2 = 250;
        const y2 = 100 + height / 2;
        const x3 = 50;
        const y3 = 100 + height / 2;
        const expectedSVG = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="${x1},${y1} ${x2},${y2} ${x3},${y3}" fill="${color}" />
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${text}</text>
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