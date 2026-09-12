// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    if (isOpen) {
      Object.assign(navLinks.style, {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        position: 'absolute',
        top: '64px',
        left: '0',
        right: '0',
        background: '#EDEEF0',
        padding: '20px 32px',
        borderBottom: '1px solid #C7CCD1',
        gap: '16px'
      });
    } else {
      navLinks.style.display = 'none';
    }
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 900) {
        navLinks.classList.remove('open');
        navLinks.style.display = 'none';
      }
    });
  });

  // Reset inline styles when returning to desktop width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      navLinks.classList.remove('open');
      navLinks.removeAttribute('style');
    }
  });
}
