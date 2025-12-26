const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.onclick = () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
};
