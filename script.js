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