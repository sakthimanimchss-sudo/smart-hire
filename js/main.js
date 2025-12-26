// Hamburger menu toggle (future ready)
document.querySelector(".hamburger").addEventListener("click", () => {
  alert("Mobile menu toggle ready");
});

// Smooth scroll effect
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
  });
});
