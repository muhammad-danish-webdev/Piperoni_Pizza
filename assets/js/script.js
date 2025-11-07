// Function to check if an element is in the viewport
const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// Function to handle the animation application
const animateHeroSection = () => {
  // Select the main containers we want to animate
  const headingContainer = document.querySelector(".hero-container-heading");
  const imageContainer = document.querySelector(".hero-container-image");

  // Check if the main hero section is visible
  const heroSection = document.querySelector(".pizza-hero-section");

  if (heroSection && isElementInViewport(heroSection)) {
    // 1. Add class to the image container
    imageContainer.classList.add("is-visible");

    // 2. Add class to the heading container (which controls h1 and p)
    headingContainer.classList.add("is-visible");

    // Remove the event listener once the animation has been triggered
    window.removeEventListener("scroll", animateHeroSection);
    window.removeEventListener("resize", animateHeroSection);
  }
};

// Add event listeners to check on page load and scroll
window.addEventListener("load", animateHeroSection);
window.addEventListener("scroll", animateHeroSection);
window.addEventListener("resize", animateHeroSection);
