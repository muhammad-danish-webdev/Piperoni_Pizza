/**
 * Toggles the visibility and position of the mobile navigation menu.
 */
function toggleMobileMenu() {
  // 1. Get the main navigation element
  const navList = document.querySelector(".pizza-navbar-list");

  // 2. Get the toggle button elements
  const burgerIcon = document.querySelector(".burger-icon");
  const navCloseIcon = document.querySelector(".nav-close-icon");

  // 3. Get all navigation links inside the list
  const navLinks = document.querySelectorAll(".pizza-navbar-list .navbar-link");

  if (!navList) return;

  // Function to hide the menu (slides out to left: 100%)
  const hideMenu = () => {
    navList.style.left = "100%";
  };

  // Function to show the menu (slides in to left: 0)
  const showMenu = () => {
    navList.style.left = "0%";
  };

  // --- Attach Event Listeners ---

  // 1. Burger Icon (to open the menu)
  if (burgerIcon) {
    burgerIcon.addEventListener("click", showMenu);
  }

  // 2. Close Icon (to close the menu) - This is the element that should now work reliably
  if (navCloseIcon) {
    navCloseIcon.addEventListener("click", hideMenu);
  }

  // 3. Close menu after clicking a link inside the menu
  navLinks.forEach((link) => {
    link.addEventListener("click", hideMenu);
  });
}

// Ensure the script runs after the entire HTML document is fully loaded
document.addEventListener("DOMContentLoaded", toggleMobileMenu);
