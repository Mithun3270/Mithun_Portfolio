// ==========================
// PORTFOLIO - MITHUN B
// Custom JavaScript
// ==========================

// Sticky Navbar Effect on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-sm", "bg-dark");
  } else {
    navbar.classList.remove("shadow-sm", "bg-dark");
  }
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Typing Animation for Hero Section
const typingElement = document.createElement("span");
typingElement.id = "typing-text";
const heroHeading = document.querySelector(".hero h1");
heroHeading.appendChild(document.createElement("br"));
heroHeading.appendChild(typingElement);

const text = "Full Stack Web Developer | Biomedical Innovator | Data Analyst";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

window.addEventListener("load", typeEffect);

// Animate Resume Button Glow
const resumeBtn = document.querySelector(".hero-btn");
function pulseGlow() {
  resumeBtn.style.boxShadow = "0 0 20px #fff, 0 0 40px #8b5cf6";
  setTimeout(() => {
    resumeBtn.style.boxShadow = "0 0 10px #fff, 0 0 20px #8b5cf6";
  }, 500);
}
setInterval(pulseGlow, 1000);
