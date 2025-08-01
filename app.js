// // Smooth scroll for nav links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute("href"));
//       if (target) {
//         target.scrollIntoView({
//           behavior: "smooth",
//           block: "start"
//         });
//       }
//     });
//   });
  
//   // Scroll-reveal animations
//   const revealElements = document.querySelectorAll(".reveal");
  
//   const revealOnScroll = () => {
//     const windowHeight = window.innerHeight;
//     revealElements.forEach(el => {
//       const elementTop = el.getBoundingClientRect().top;
//       if (elementTop < windowHeight - 100) {
//         el.classList.add("active");
//       }
//     });
//   };
  
//   window.addEventListener("scroll", revealOnScroll);
//   window.addEventListener("load", revealOnScroll);
  
//   // Responsive nav toggle (if using mobile nav)
//   const menuToggle = document.querySelector(".menu-toggle");
//   const navMenu = document.querySelector("nav ul");
  
//   if (menuToggle) {
//     menuToggle.addEventListener("click", () => {
//       navMenu.classList.toggle("open");
//       menuToggle.classList.toggle("open");
//     });
//   }
  
//   // Optional: Add fade-in animations on load
//   window.addEventListener("load", () => {
//     document.body.classList.add("loaded");
//   });
  
// Typewriter Effect
const typeTarget = document.getElementById("typewriter");
const words = ["Embedded Systems Engineer", "Product Developer", "IoT Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
  if (typing) {
    if (charIndex < words[wordIndex].length) {
      typeTarget.textContent += words[wordIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeEffect, 100);
    } else {
      typing = false;
      setTimeout(typeEffect, 1500);
    }
  } else {
    if (charIndex > 0) {
      typeTarget.textContent = words[wordIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      typing = true;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 200);
    }
  }
}
typeEffect();

// Navbar Shrink on Scroll
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// Scroll Reveal Animations
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(el => observer.observe(el));
