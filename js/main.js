document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stats strong");
  let started = false;

  window.addEventListener("scroll", () => {
    if (started) return;
    const section = document.querySelector(".stats");
    if (!section) return;

    if (section.getBoundingClientRect().top < window.innerHeight) {
      started = true;
      stats.forEach(stat => {
        let target = parseInt(stat.innerText.replace(/\D/g,""));
        let count = 0;
        const step = target / 80;

        const animate = () => {
          count += step;
          if (count < target) {
            stat.innerText = Math.floor(count) + "+";
            requestAnimationFrame(animate);
          } else {
            stat.innerText = target + "+";
          }
        };
        animate();
      });
    }
  });
});
