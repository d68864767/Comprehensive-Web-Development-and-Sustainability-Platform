```javascript
// Importing required modules
const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

// Reading the frontend.js file
const frontend = fs.readFileSync(path.resolve(__dirname, './frontend.js'), 'utf-8');

// Setting up the DOM environment for testing
const { window } = new JSDOM(`<!DOCTYPE html><nav><ul><li><a href="#">Link 1</a></li><li><a href="#">Link 2</a></li></ul></nav>`);
const { document } = window;
global.window = window;
global.document = document;

// Evaluating the frontend.js script in the DOM environment
eval(frontend);

// Testing the handleNavClick function
describe('handleNavClick', () => {
    test('should add active class to clicked link', () => {
        const link = document.querySelector('nav ul li a');
        const event = new window.MouseEvent('click');

        link.dispatchEvent(event);

        expect(link.classList.contains('active')).toBe(true);
    });

    test('should remove active class from other links', () => {
        const links = document.querySelectorAll('nav ul li a');
        const event = new window.MouseEvent('click');

        links[0].classList.add('active');
        links[1].dispatchEvent(event);

        expect(links[0].classList.contains('active')).toBe(false);
        expect(links[1].classList.contains('active')).toBe(true);
    });
});
```
