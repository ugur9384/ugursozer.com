// navlinks.js
fetch('navlinks.html')
  .then(response => response.text())
  .then(data => {
   
    const navElement = document.querySelector('header nav');
    navElement.innerHTML = data;

    
    const currentPath = window.location.pathname;
    const links = navElement.querySelectorAll('a');

    links.forEach(link => {
      if (link.getAttribute('href') === currentPath || currentPath.endsWith(link.getAttribute('href'))) {
        link.classList.add('active'); 
      }
    });
  })
  .catch(error => console.error('Error loading navigation links:', error));
