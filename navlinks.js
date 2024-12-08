// navlinks.js
fetch('navlinks.html')
  .then(response => response.text())
  .then(data => {
    // Insert the fetched navigation links into the
    const navElement = document.querySelector('header nav');
    navElement.innerHTML = data;

    // Highlight the active link based on the current URL
    const currentPath = window.location.pathname; // Get the current page's path
    const links = navElement.querySelectorAll('a'); // Get all <a> tags in the navigation

    links.forEach(link => {
      if (link.getAttribute('href') === currentPath || currentPath.endsWith(link.getAttribute('href'))) {
        link.classList.add('active'); // Add the 'active' class to the matching link
      }
    });
  })
  .catch(error => console.error('Error loading navigation links:', error));
