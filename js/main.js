/* =====================================================
   SmartHire - Final JavaScript
   Purpose: Navbar, Hamburger, Text Animation Control
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= HAMBURGER MENU ================= */
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

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

  /* Close menu when clicking a link */
  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  /* ================= SECTION REVEAL ================= */
  const sections = document.querySelectorAll(".section");

  const revealOnScroll = () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 120;

      if (top < triggerPoint) {
        section.classList.add("active");

        /* Title jump ONLY ONCE */
        const title = section.querySelector("h2");
        if (title && !title.classList.contains("jumped")) {
          title.classList.add("jumped");
          setTimeout(() => title.classList.remove("jumped"), 700);
        }
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();

  /* ================= STAGGER TEXT (OPTIONAL SAFE) ================= */
  document.querySelectorAll(".section p").forEach((para, index) => {
    para.style.animationDelay = `${index * 0.08}s`;
  });

  /* ================= SEARCH BOX FOCUS UX ================= */
  document.querySelectorAll(".search-box input").forEach(input => {
    input.addEventListener("focus", () => {
      input.style.boxShadow = "0 0 0 2px rgba(56,189,248,0.6)";
    });
    input.addEventListener("blur", () => {
      input.style.boxShadow = "none";
    });
  });

  /* ================= NAVBAR SCROLL EFFECT ================= */
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      navbar.style.background = "rgba(2,6,23,0.85)";
      navbar.style.backdropFilter = "blur(16px)";
    } else {
      navbar.style.background = "rgba(2,6,23,0.7)";
    }
  });

  /* ================= REDUCED MOTION SUPPORT ================= */
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll("*").forEach(el => {
      el.style.animation = "none";
      el.style.transition = "none";
    });
  }

});
