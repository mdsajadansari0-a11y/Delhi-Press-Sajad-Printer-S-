// ===============================
// DELHI PRESS - SAJAD PRINTER'S
// MAIN JAVASCRIPT
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

// Mobile Menu
if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Menu link click hone par mobile menu close
document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu) {
      navMenu.classList.remove("active");
    }
  });
});

// Current Year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Header Scroll Effect
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 30) {
    header.style.boxShadow =
      "0 6px 30px rgba(0, 0, 0, 0.13)";
  } else {
    header.style.boxShadow =
      "0 4px 25px rgba(0, 0, 0, 0.07)";
  }
});

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  if (!navMenu || !menuBtn) return;

  if (
    !navMenu.contains(event.target) &&
    !menuBtn.contains(event.target)
  ) {
    navMenu.classList.remove("active");
  }
});

console.log("Delhi Press - Sajad Printer'S website loaded successfully.");
