// JavaScript for Amazon Clone Project

// Feature 1: Search Bar Interaction
const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('input', (event) => {
    console.log(`User is searching for: ${event.target.value}`);
});

// Feature 2: Cart Functionality
let cartCount = 0;
const navCart = document.querySelector('.nav-cart');
navCart.addEventListener('click', () => {
    cartCount++;
    alert(`Item added to cart! Total items in cart: ${cartCount}`);
});

// Feature 3: Responsive Navigation
const panelAll = document.querySelector('.panel-all');
const panelOps = document.querySelector('.panel-ops');
panelAll.addEventListener('click', () => {
    panelOps.style.display = panelOps.style.display === 'none' ? 'flex' : 'none';
});

// Feature 4: Scroll-to-Top Button
const backToTopButton = document.querySelector('.foot-panel1');
backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Feature 5: Dynamic Category Links
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        const category = box.querySelector('h2').innerText;
        alert(`Redirecting to the ${category} category page!`);
    });
});

// Feature 6: Hero Section Message Click
const heroMsgLink = document.querySelector('.hero-msg a');
heroMsgLink.addEventListener('click', (event) => {
    event.preventDefault();
    alert('Redirecting to Amazon India!');
});
