const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

document.getElementById("year").textContent =
  new Date().getFullYear();

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");

  if (window.scrollY > 30) {
    header.style.boxShadow =
      "0 5px 30px rgba(0,0,0,.12)";
  } else {
    header.style.boxShadow =
      "0 4px 25px rgba(0,0,0,.07)";
  }
});
