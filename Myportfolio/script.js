// script.js

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav .right a');

  // Function to remove 'active' class from all links
  function clearActiveLinks() {
    navLinks.forEach(link => link.classList.remove('active'));
  }

  // Highlight nav link based on scroll position
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        clearActiveLinks();
        const activeLink = document.querySelector(
          `nav .right a[href="#${section.id}"]`
        );
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });
  });
});