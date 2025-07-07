document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('mobile-menu');
  const nav = document.querySelector('.nav-links');
  
  toggle.addEventListener('click', function() {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });
  
  // Close menu when clicking links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
      toggle.classList.remove('active');
      nav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });
});

// Mobile Menu Toggle (Same as homepage)
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('menu-open');
});

// Close when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.classList.remove('menu-open');
  });
});

// Mobile Menu Toggle - Match Homepage Exactly
const menuToggle = document.getElementById('mobile-menu');
// Removed duplicate declaration of navLinks

function toggleMenu() {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  document.body.classList.toggle('menu-open');
}

menuToggle.addEventListener('click', function(e) {
  e.stopPropagation();
  toggleMenu();
});

// Close when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', toggleMenu);
});

// Close when clicking outside
document.addEventListener('click', function(e) {
  if (!e.target.closest('.nav') && navLinks.classList.contains('active')) {
    toggleMenu();
  }
});

// Close on escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && navLinks.classList.contains('active')) {
    toggleMenu();
  }
});