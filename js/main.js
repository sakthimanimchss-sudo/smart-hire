/* =====================================================
   HAMBURGER MENU
===================================================== */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}

/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */
const revealElements = document.querySelectorAll(
  ".section, .reference-card, .ai-card, .category-grid div, .company-grid img"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      el.classList.add("revealed");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* =====================================================
   ADD REVEAL STYLE DYNAMICALLY
===================================================== */
const style = document.createElement("style");
style.innerHTML = `
  .section,
  .reference-card,
  .ai-card,
  .category-grid div,
  .company-grid img {
    opacity: 0;
    transform: translateY(40px);
    transition: 0.8s ease;
  }

  .revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

/* =====================================================
   FLOATING TEXT EFFECT
===================================================== */
const floatingText = document.querySelectorAll("h1, h2");

floatingText.forEach((el, i) => {
  el.style.animation = `floatText 6s ease-in-out infinite`;
  el.style.animationDelay = `${i * 0.4}s`;
});

const textStyle = document.createElement("style");
textStyle.innerHTML = `
  @keyframes floatText {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`;
document.head.appendChild(textStyle);

/* =====================================================
   JUMPING BUTTONS (CTA)
===================================================== */
const buttons = document.querySelectorAll("button, .btn, .cta");

buttons.forEach((btn, i) => {
  btn.style.animation = `jump 5s ease-in-out infinite`;
  btn.style.animationDelay = `${i * 0.6}s`;
});

const btnStyle = document.createElement("style");
btnStyle.innerHTML = `
  @keyframes jump {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }
`;
document.head.appendChild(btnStyle);

/* =====================================================
   STATS COUNT-UP ANIMATION
===================================================== */
const stats = document.querySelectorAll(".stats strong");

const animateStats = () => {
  stats.forEach(stat => {
    const target = parseInt(stat.innerText.replace(/\D/g, ""));
    let count = 0;
    const speed = target / 120;

    const update = () => {
      count += speed;
      if (count < target) {
        stat.innerText = Math.floor(count) + "+";
        requestAnimationFrame(update);
      } else {
        stat.innerText = target + "+";
      }
    };
    update();
  });
};

let statsPlayed = false;
window.addEventListener("scroll", () => {
  const statsSection = document.querySelector(".stats");
  if (!statsSection) return;

  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && !statsPlayed) {
    statsPlayed = true;
    animateStats();
  }
});

/* =====================================================
   PARALLAX BACKGROUND MOTION (LIGHT)
===================================================== */
window.addEventListener("scroll", () => {
  const offset = window.scrollY * 0.08;
  document.body.style.backgroundPosition = `center ${offset}px`;
});

/* =====================================================
   SMOOTH SCROLL FOR INTERNAL LINKS
===================================================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href"))
      ?.scrollIntoView({ behavior: "smooth" });
  });
});
