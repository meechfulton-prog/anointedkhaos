// SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({
        behavior: "smooth"
      });
  });
});


// FADE IN ON SCROLL (INTERSECTION OBSERVER)
const faders = document.querySelectorAll(".fade");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;

    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});


// STAGGERED CARD ANIMATION
const cards = document.querySelectorAll(".card");

const cardObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if(entry.isIntersecting){
      entry.target.style.transitionDelay = `${index * 0.1}s`;
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => {
  card.classList.add("fade");
  cardObserver.observe(card);
});


// PARALLAX HERO EFFECT
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero img");

  if(hero){
    let scrollPosition = window.scrollY;
    hero.style.transform = `translateY(${scrollPosition * 0.2}px) scale(1.05)`;
  }
});


// NAVBAR GLOW ON SCROLL
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if(window.scrollY > 50){
    nav.style.background = "rgba(0,0,0,0.9)";
    nav.style.boxShadow = "0 4px 20px rgba(0,0,0,0.6)";
  } else {
    nav.style.background = "rgba(0,0,0,0.7)";
    nav.style.boxShadow = "none";
  }
});
