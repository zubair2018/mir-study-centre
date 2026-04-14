// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ===== HAMBURGER + OVERLAY =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

function closeNav() {
  navLinks && navLinks.classList.remove('open');
  navOverlay && navOverlay.classList.remove('open');
  if (hamburger) {
    hamburger.classList.remove('active');
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
}

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navOverlay && navOverlay.classList.toggle('open', isOpen);
    hamburger.classList.toggle('active', isOpen);
    hamburger.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
}
if (navOverlay) navOverlay.addEventListener('click', closeNav);

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scrollTop');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  });
}

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.style.background = type === 'error' ? '#ef4444' : type === 'warning' ? '#f59e0b' : '#1a3a5c';
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ===== ENQUIRY FORM =====
function handleEnquiry(e) {
  e.preventDefault();
  showToast('✅ Enquiry sent! We will contact you shortly.');
  e.target.reset();
}

// ===== SCROLL REVEAL =====
if ('IntersectionObserver' in window) {
  const revealEls = document.querySelectorAll('.feature-card, .subject-pill, .testimonial-card, .stat-card, .info-card, .pricing-card');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = entry.target.classList.contains('pricing-card popular')
          ? 'scale(1.04) translateY(0)'
          : 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    const isPopular = el.classList.contains('popular');
    el.style.transform = isPopular ? 'scale(1.04) translateY(24px)' : 'translateY(24px)';
    el.style.transition = `opacity 0.5s ${i * 50}ms ease, transform 0.5s ${i * 50}ms ease`;
    io.observe(el);
  });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, suffix = '') {
  let start = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    start += step;
    if (start >= target) { el.textContent = target + suffix; clearInterval(timer); return; }
    el.textContent = Math.floor(start) + suffix;
  }, 16);
}
const statNums = document.querySelectorAll('.stat-num');
if (statNums.length > 0 && 'IntersectionObserver' in window) {
  const io2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const text = entry.target.textContent;
        const num = parseInt(text);
        if (!isNaN(num)) {
          const suffix = text.replace(/[0-9]/g, '');
          animateCounter(entry.target, num, suffix);
        }
        io2.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statNums.forEach(el => io2.observe(el));
}

// ===== ADMIN SIDEBAR MOBILE =====
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    sidebarOverlay && sidebarOverlay.classList.toggle('open');
  });
  sidebarOverlay && sidebarOverlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('open');
  });
}
