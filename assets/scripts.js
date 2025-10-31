document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const mainNav = document.getElementById('main-nav');

  // Mobile navbar toggle
  navToggle.addEventListener('click', function() {
    if(mainNav.style.display === 'flex'){mainNav.style.display='none';}
    else{mainNav.style.display='flex';}
  });

  // Highlight active link
  const navLinks = mainNav.querySelectorAll('a');
  navLinks.forEach(link => {
    if(link.href===window.location.href){link.classList.add('active');}
  });

  // Fade-in on scroll
  const fadeSections = document.querySelectorAll('.fade-section');
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('visible');}
    });
  },{threshold:0.1});
  fadeSections.forEach(section=>observer.observe(section));
});
