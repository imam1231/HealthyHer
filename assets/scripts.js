// Toggle mobile navbar
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  navToggle.addEventListener('click', function() {
    if(mainNav.style.display === 'flex'){
      mainNav.style.display = 'none';
    } else {
      mainNav.style.display = 'flex';
    }
  });

  // Highlight active link
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    if(link.href === window.location.href) {
      link.classList.add('active');
    }
  });
});
