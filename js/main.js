/* =====================================================
   SmartHire - Full Animation JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ================= SECTION REVEAL ================= */
  const sections = document.querySelectorAll(".section");

  const revealSections = () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 120) {
        section.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", revealSections);
  revealSections();

  /* ================= FLOAT IMAGE DELAY ================= */
  document.querySelectorAll(".section img").forEach((img, index) => {
    img.style.animationDelay = `${index * 0.6}s`;
  });

  /* ================= STATS COUNTER ================= */
  const counters = document.querySelectorAll(".stat-box h3");
  let started = false;

  const runCounter = () => {
    counters.forEach(counter => {
      const targetText = counter.innerText;
      const target = parseInt(targetText.replace(/\D/g, ""));
      const suffix = targetText.replace(/[0-9]/g, "");
      let count = 0;

      const update = () => {
        if (count < target) {
          count += Math.ceil(target / 80);
          counter.innerText = count + suffix;
          requestAnimationFrame(update);
        } else {
          counter.innerText = target + suffix;
        }
      };
      update();
    });
  };

  window.addEventListener("scroll", () => {
    const stats = document.querySelector(".stats");
    if (!stats) return;

    if (stats.getBoundingClientRect().top < window.innerHeight - 150 && !started) {
      started = true;
      runCounter();
    }
  });

  /* ================= PARALLAX EFFECT ================= */
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".section img").forEach(img => {
      const speed = 0.08;
      img.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
  });

  /* ================= MOBILE TOUCH FEEDBACK ================= */
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("touchstart", () => {
      btn.style.transform = "scale(0.95)";
    });
    btn.addEventListener("touchend", () => {
      btn.style.transform = "scale(1)";
    });
  });

});
