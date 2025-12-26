// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth floating on scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".info-block").forEach(block => {
    const rect = block.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      block.style.opacity = "1";
      block.style.transform = "translateY(0)";
    }
  });
});
