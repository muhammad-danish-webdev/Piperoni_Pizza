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

document.addEventListener("DOMContentLoaded", () => {
  // 1. Target the elements you want to animate
  const cards = document.querySelectorAll(".overview-card");

  // 2. Observer options
  const observerOptions = {
    root: null, // viewport ko root consider karega
    rootMargin: "0px",
    threshold: 0.1, // Jab element ka 10% dikhna shuru ho jaye
  };

  // 3. Create the observer function
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Jab element viewport mein enter kare, toh 'is-visible' class add karein
        // Yeh class animation ko trigger karegi
        entry.target.classList.add("is-visible");

        // Ek baar animation hone ke baad, observer ko stop kar dein
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 4. Har card ko observe karna shuru karein
  cards.forEach((card, index) => {
    // Staggered effect dene ke liye, CSS variable set karein
    card.style.setProperty("--animation-delay", `${index * 150}ms`);
    observer.observe(card);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Target the image containers
  const imageElements = document.querySelectorAll(".quality-image");

  // Observer options (jab 10% dikhna shuru ho jaye)
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  // Observer function
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 'is-visible' class add karein
        entry.target.classList.add("is-visible");
        // Ek baar animation hone ke baad, observing stop kar dein
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Har image element ko observe karna shuru karein aur delay set karein
  imageElements.forEach((image, index) => {
    // Staggered delay (50ms ka farq) set karein
    image.style.setProperty("--animation-delay", `${index * 50}ms`);
    observer.observe(image);
  });
});
