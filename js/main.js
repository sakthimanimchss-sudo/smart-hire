/* =====================================================
   SMART HIRE – MAIN JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAVBAR TOGGLE ================= */
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".navbar nav");

    if (menuToggle) {
        menuToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show");
        });
    }

    /* ================= SMOOTH SCROLL ================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({ behavior: "smooth" });
        });
    });

    /* ================= SCROLL ANIMATION ================= */
    const revealElements = document.querySelectorAll(
        ".category-card, .job-card, .why-card, .stat-box, .faq-item"
    );

    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("reveal");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    /* ================= FAQ TOGGLE ================= */
    document.querySelectorAll(".faq-item").forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("open");
        });
    });

    /* ================= JOB CARD HOVER EFFECT ================= */
    document.querySelectorAll(".job-card").forEach(card => {
        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-10px)";
        });
        card.addEventListener("mouseleave", () => {
            card.style.transform = "translateY(0)";
        });
    });

});
