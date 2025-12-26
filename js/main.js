/* =====================================================
   SmartHire – Final JavaScript
   Purpose:
   - Hamburger & mobile menu
   - Section reveal on scroll
   - Navbar blur on scroll
   - Search input UX
   - Safe text animation control
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= NAVBAR & HAMBURGER ================= */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const navbar = document.querySelector(".navbar");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeMenu) {
    closeMenu.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  /* Close menu when clicking any mobile link */
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  /* ================= NAVBAR SCROLL EFFECT ================= */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.style.background = "rgba(2,6,23,0.85)";
      navbar.style.backdropFilter = "blur(16px)";
    } else {
      navbar.style.background = "rgba(2,6,23,0.7)";
    }
  });

  /* ================= SECTION REVEAL ON SCROLL ================= */
  const sections = document.querySelectorAll(".section");

  const revealSections = () => {
    const triggerPoint = window.innerHeight - 120;

    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;

      if (top < triggerPoint) {
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealSections);
  revealSections();

  /* ================= SEARCH INPUT UX ================= */
  document.querySelectorAll(".search-box input").forEach(input => {
    input.addEventListener("focus", () => {
      input.style.boxShadow = "0 0 0 2px rgba(56,189,248,0.6)";
    });

    input.addEventListener("blur", () => {
      input.style.boxShadow = "none";
    });
  });

  /* ================= REDUCED MOTION SUPPORT ================= */
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("*").forEach(el => {
      el.style.animation = "none";
      el.style.transition = "none";
    });
  }

});
