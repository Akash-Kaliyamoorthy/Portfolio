// script.js

// Animate sections on scroll
const observerOptions = {
  threshold: 0.2,
};

const animateOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Select all sections to animate
const sections = document.querySelectorAll(
  'section, .edu-card, .skill-card, .service-card, .testimonial-card, .contact-card'
);

// Apply observer
sections.forEach(section => {
  section.classList.add('hidden'); // initial hidden state
  observer.observe(section);
});
