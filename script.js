// Counter animation with scroll trigger
const counters = document.querySelectorAll(".num");

function animateCounter(counter) {
  const target = +counter.getAttribute("data-count");
  const suffix = counter.getAttribute("data-suffix") || "";
  let count = 0;
  const increment = target / 200; // speed control

  function updateCount() {
    if (count < target) {
      count += increment;
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target + suffix;
    }
  }

  updateCount();
}

// Use IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target); // run once
    }
  });
}, { threshold: 0.6 });

counters.forEach(counter => {
  observer.observe(counter);
});
