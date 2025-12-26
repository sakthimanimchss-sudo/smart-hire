/* =====================================================
   SmartHire - Full Animation JavaScript
   Author: SmartHire UI
   Purpose: Scroll + Float + Mobile Animation
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= REVEAL ON SCROLL ================= */
  const revealElements = document.querySelectorAll("section, .block, .stat-box");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 120) {
        el.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();


  /* ================= FLOAT IMAGE RANDOM OFFSET ================= */
  const floatingImages = document.querySelectorAll(".block img");

  floatingImages.forEach((img, index) => {
    const delay = index * 0.6;
    img.style.animationDelay = `${delay}s`;
  });


  /* ================= STAT COUNTER ANIMATION ================= */
  const counters = document.querySelectorAll(".stat-box h3");
  let counterStarted = false;

  const animateCounters = () => {
    counters.forEach(counter => {
      const targetText = counter.innerText;
      const target = parseInt(targetText.replace(/\D/g, ""));
      const suffix = targetText.replace(/[0-9]/g, "");

      let count = 0;
      const speed = target / 100;

      const update = () => {
        if (count < target) {
          count += speed;
          counter.innerText = Math.floor(count) + suffix;
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + suffix;
        }
      };

      update();
    });
  };

  window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats");
    if (!statsSection) return;

    const top = statsSection.getBoundingClientRect().top;
    if (top < window.innerHeight - 150 && !counterStarted) {
      counterStarted = true;
      animateCounters();
    }
  });


  /* ================= PARALLAX SCROLL EFFECT ================= */
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".block img").forEach(img => {
      const speed = 0.05;
      const offset = window.scrollY * speed;
      img.style.transform = `translateY(${offset}px)`;
    });
  });


  /* ================= MOBILE TOUCH ANIMATION ================= */
  document.querySelectorAll(".block").forEach(block => {
    block.addEventListener("touchstart", () => {
      block.style.transform = "scale(0.97)";
    });

    block.addEventListener("touchend", () => {
      block.style.transform = "scale(1)";
    });
  });

});
