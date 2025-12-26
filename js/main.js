const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.onclick = () => {
  menu.classList.toggle("show");
};
