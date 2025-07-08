document.addEventListener('DOMContentLoaded', function() {
  // Get elements for mobile menu
  const mobileMenuToggle = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  const body = document.body;

  // Function to toggle mobile menu state
  function toggleMobileMenu() {
    mobileMenuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open'); // Prevents scrolling when menu is open
  }

  // Event listener for the mobile menu toggle button
  mobileMenuToggle.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent click from propagating to document
    toggleMobileMenu();
  });

  // Close mobile menu when a navigation link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
  });

  // Close mobile menu when clicking outside of the navigation area
  document.addEventListener('click', function(e) {
    // Check if the click is outside the header (which contains the nav and toggle)
    if (!e.target.closest('header') && navLinks.classList.contains('active')) {
      toggleMobileMenu();
    }
  });

  // Close mobile menu on Escape key press
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
      toggleMobileMenu();
    }
  });

  // Auto-update copyright year in the footer
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Add 'scrolled' class to header on scroll for styling
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust scroll threshold as needed
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
});