'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

/// Page navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // Debugging: Log elements to console
  console.log('Navigation Links:', navigationLinks);
  console.log('Pages:', pages);

  navigationLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault(); // Prevent default behavior just in case
      
      // Get the target page name
      const targetPage = this.textContent.trim().toLowerCase();
      console.log('Clicked:', targetPage);

      // Update all pages
      pages.forEach(page => {
        const pageName = page.dataset.page.toLowerCase();
        console.log(`Checking page: ${pageName}`);
        
        if (pageName === targetPage) {
          console.log(`Activating page: ${pageName}`);
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      });

      // Update all navigation links
      navigationLinks.forEach(navLink => {
        const linkText = navLink.textContent.trim().toLowerCase();
        navLink.classList.toggle("active", linkText === targetPage);
      });
      
      window.scrollTo(0, 0);
    });
  });

  // Activate the initial page (About)
  const initialPage = document.querySelector('.about[data-page="about"]');
  if (initialPage) initialPage.classList.add('active');
});