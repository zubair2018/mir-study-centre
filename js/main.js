// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== HAMBURGER =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.innerHTML = navLinks.classList.contains('open')
      ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });
}

// ===== TOAST =====
function showToast(msg, type='success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.background = type === 'error' ? '#ef4444' : '#1a3a5c';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== ENQUIRY FORM =====
function handleEnquiry(e) {
  e.preventDefault();
  showToast('✅ Enquiry sent! We will contact you soon.');
  e.target.reset();
}

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.feature-card, .subject-pill, .testimonial-card, .stat-card, .info-card');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity 0.5s ${i * 60}ms ease, transform 0.5s ${i * 60}ms ease`;
    io.observe(el);
  });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, suffix='') {
  let start = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target + suffix; clearInterval(timer); return; }
    el.textContent = Math.floor(start) + suffix;
  }, 16);
}
const statNums = document.querySelectorAll('.stat-num');
if (statNums.length > 0) {
  const io2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const text = entry.target.textContent;
        const num = parseInt(text);
        const suffix = text.replace(/[0-9]/g, '');
        animateCounter(entry.target, num, suffix);
        io2.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => io2.observe(el));
}
