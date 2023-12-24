```javascript
// Selecting DOM elements
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

// Function to handle navigation click events
function handleNavClick(event) {
    event.preventDefault();

    // Remove active class from all links
    navLinks.forEach(link => link.classList.remove('active'));

    // Add active class to clicked link
    event.target.classList.add('active');

    // Load content for clicked link
    loadContent(event.target.href);
}

// Function to load content
function loadContent(url) {
    // Here you can fetch the content from the server using AJAX
    // For simplicity, we will just log the url
    console.log(`Loading content from ${url}`);
}

// Add click event listener to all navigation links
navLinks.forEach(link => link.addEventListener('click', handleNavClick));
```
