// Scroll-triggered reveals
(() => {
  const targets = document.querySelectorAll(
    '.section__head, .intro-lead, .intro-map, .actors, .pullquote, ' +
    '.thinker-portrait, .thinker-body, .vs-card, .moves, .book-card, ' +
    '.synth-lead, .synth-col, .synth-vs, .verdict, .bio'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(t => io.observe(t));
})();

// Stagger .vs-card, .synth-col, and .bio-within-section delays
(() => {
  const groups = [
    document.querySelectorAll('.vs-cards .vs-card'),
    document.querySelectorAll('.synth-grid > *'),
    document.querySelectorAll('.bios > .bio'),
  ];
  groups.forEach(group => {
    group.forEach((el, i) => {
      el.style.transitionDelay = `${i * 120}ms`;
    });
  });
})();

// Active nav link on scroll
(() => {
  const links = document.querySelectorAll('.ribbon__nav a');
  const sections = Array.from(links).map(a =>
    document.querySelector(a.getAttribute('href'))
  );

  const setActive = () => {
    const y = window.scrollY + 120;
    let activeIdx = 0;
    sections.forEach((s, i) => {
      if (s && s.offsetTop <= y) activeIdx = i;
    });
    links.forEach((l, i) => {
      l.style.color = i === activeIdx ? 'var(--red)' : '';
      l.style.borderBottomColor = i === activeIdx ? 'var(--red)' : '';
    });
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();
})();
