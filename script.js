// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const siteNav = document.getElementById('siteNav');
hamburger?.addEventListener('click',()=> siteNav.classList.toggle('show'));

// Sticky header subtle shadow on scroll
const hdr = document.querySelector('header');
const onScroll = () => { 
  hdr.style.boxShadow = window.scrollY > 8 ? '0 6px 18px rgba(0,0,0,.12)' : '0 2px 12px rgba(0,0,0,.06)'; 
};
document.addEventListener('scroll', onScroll, {passive:true});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href');
    if(id.length>1){ 
      e.preventDefault(); 
      document.querySelector(id)?.scrollIntoView({behavior:'smooth',block:'start'}); 
      siteNav.classList.remove('show'); 
    }
  });
});

// Reveal on scroll with delay
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(en=>{ 
    if(en.isIntersecting){ 
      const el = en.target;
      // Apply transition delay if specified
      if (el.dataset.delay) {
        el.style.transitionDelay = `${parseInt(el.dataset.delay) / 1000}s`;
      }
      el.classList.add('show'); 
      io.unobserve(el);
    } 
  });
},{threshold:.12});
revealEls.forEach(el=>io.observe(el));

// Count up stats
const nums = document.querySelectorAll('.num');
const io2 = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      const el = en.target;
      const target = +el.dataset.count;
      const suffix = el.dataset.suffix || "";
      let cur = 0;
      const step = Math.max(1, Math.floor(target / 80));

      const tick = () => {
        cur += step;
        if (cur >= target) {
          el.textContent = target + suffix;
        } else {
          el.textContent = cur + suffix;
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      io2.unobserve(el);
    }
  });
}, { threshold: 0.4 });

nums.forEach(n => io2.observe(n));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Logo Slideshow
const slideLogos = document.querySelectorAll('.slide-logo');
let currentLogoIndex = 0;

function showNextLogo() {
  // Remove active class from all logos
  slideLogos.forEach(logo => logo.classList.remove('active'));
  
  // Add active class to current logo
  slideLogos[currentLogoIndex].classList.add('active');
  
  // Update index for next logo
  currentLogoIndex = (currentLogoIndex + 1) % slideLogos.length;
  
  // Set timeout for next logo change
  setTimeout(showNextLogo, 3000); // Change logo every 3 seconds
}

// Start the slideshow if logos exist
if (slideLogos.length > 0) {
  showNextLogo();
}

// Camp Slideshow
const campSlides = document.querySelectorAll('.camp-slide');
let currentCampIndex = 0;

function showNextCamp() {
  // Remove active class from all camp slides
  campSlides.forEach(slide => slide.classList.remove('active'));
  
  // Add active class to current camp slide
  campSlides[currentCampIndex].classList.add('active');
  
  // Update index for next camp slide
  currentCampIndex = (currentCampIndex + 1) % campSlides.length;
  
  // Set timeout for next camp slide change
  setTimeout(showNextCamp, 4000); // Change camp slide every 4 seconds
}

// Start the camp slideshow if slides exist
if (campSlides.length > 0) {
  campSlides[0].classList.add('active');
  setTimeout(showNextCamp, 4000);
}

// Client Carousel
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing client carousel');
  
  const clientTrack = document.getElementById('clientTrack');
  const clientPrevBtn = document.getElementById('clientPrevBtn');
  const clientNextBtn = document.getElementById('clientNextBtn');
  
  if (!clientTrack) {
    console.error('Client track not found');
    return;
  }
  
  if (!clientPrevBtn) {
    console.error('Client prev button not found');
  }
  
  if (!clientNextBtn) {
    console.error('Client next button not found');
  }
  
  let clientPosition = 0;
  const clientSlideWidth = 220; // Width of each client slide
  const totalClients = 3; // Original number of clients
  
  // Auto rotate clients
  let clientCarouselInterval = setInterval(nextClient, 3000);
  
  // Next client
  function nextClient() {
    clientPosition = (clientPosition + 1) % totalClients;
    updateClientPosition();
  }
  
  // Previous client
  function prevClient() {
    clientPosition = (clientPosition - 1 + totalClients) % totalClients;
    updateClientPosition();
  }
  
  // Update carousel position
  function updateClientPosition() {
    clientTrack.style.transform = `translateX(-${clientPosition * clientSlideWidth}px)`;
  }
  
  // Event listeners for buttons
  if (clientNextBtn) {
    clientNextBtn.addEventListener('click', function() {
      console.log('Next button clicked');
      clearInterval(clientCarouselInterval);
      nextClient();
      clientCarouselInterval = setInterval(nextClient, 3000);
    });
  }
  
  if (clientPrevBtn) {
    clientPrevBtn.addEventListener('click', function() {
      console.log('Prev button clicked');
      clearInterval(clientCarouselInterval);
      prevClient();
      clientCarouselInterval = setInterval(nextClient, 3000);
    });
  }
  
  // Initialize the carousel
  updateClientPosition();
});

// Made with Bob

