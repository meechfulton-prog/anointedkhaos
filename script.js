document.body.classList.add("js-animate");

const toggleButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (toggleButton && navMenu) {
  toggleButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    const expanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!expanded));
  });

  document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.12
});

revealItems.forEach(item => observer.observe(item));
