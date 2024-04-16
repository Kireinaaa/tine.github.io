// Add smooth scrolling to anchor links
const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor link behavior

    const href = this.getAttribute('href');
    const target = document.querySelector(href);

    // Get target Y position (accounting for header height)
    const targetY = target.offsetTop - headerHeight;

    // Animate scroll to target position
    scroll({
      top: targetY,
      behavior: 'smooth'
    });
  });
});

// Get header height for smooth scroll calculation
const headerHeight = document.querySelector('header').offsetHeight;
