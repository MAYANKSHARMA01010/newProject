// scripts.js

// Example: smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(link.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // You can add more interactivity here (e.g., toggle mobile menu)
  