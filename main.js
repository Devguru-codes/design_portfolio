// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.fade-up');
  animatedElements.forEach(el => observer.observe(el));

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});

// Inject Contact Modal
const modalHtml = `
  <div id="contactModal" style="display: none; position: fixed; z-index: 9999; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(10, 14, 23, 0.8); backdrop-filter: blur(10px); align-items: center; justify-content: center;">
    <div style="background: var(--surface-color); border: 1px solid var(--accent-1); padding: 3rem; border-radius: 16px; text-align: center; max-width: 400px; width: 90%; position: relative;">
      <span id="closeModal" style="position: absolute; right: 1.5rem; top: 1.5rem; font-size: 2rem; cursor: pointer; color: var(--text-secondary);">&times;</span>
      <h2 style="color: #fff; margin-bottom: 1.5rem;">Contact Details</h2>
      <p style="margin-bottom: 1rem; font-size: 1.2rem;"><strong style="color: var(--accent-1);">Email:</strong><br><a href="mailto:devguruatwork@gmail.com" style="color: #fff; text-decoration: none;">devguruatwork@gmail.com</a></p>
      <p style="margin-bottom: 2rem; font-size: 1.2rem;"><strong style="color: var(--accent-1);">Phone:</strong><br><a href="tel:+919354926131" style="color: #fff; text-decoration: none;">9354926131</a></p>
      <div style="display: flex; gap: 1rem; flex-direction: column;">
        <a href="mailto:devguruatwork@gmail.com" class="btn btn-primary" style="display: block; width: 100%;">Email Me</a>
        <a href="https://github.com/Devguru-codes" target="_blank" class="btn btn-outline" style="display: block; width: 100%;">GitHub</a>
        <a href="https://www.linkedin.com/in/devguru-tiwari" target="_blank" class="btn btn-outline" style="display: block; width: 100%;">LinkedIn</a>
      </div>
    </div>
  </div>
`;
document.body.insertAdjacentHTML('beforeend', modalHtml);

document.addEventListener('click', (e) => {
  if (e.target.closest('#contact-btn')) {
    e.preventDefault();
    document.getElementById('contactModal').style.display = 'flex';
  }
  if (e.target.id === 'closeModal' || e.target.id === 'contactModal') {
    document.getElementById('contactModal').style.display = 'none';
  }
});
