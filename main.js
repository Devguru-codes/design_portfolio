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
        <a href="#" id="copyEmailBtn" class="btn btn-primary" style="display: block; width: 100%;">Copy Email</a>
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
  if (e.target.id === 'copyEmailBtn') {
    e.preventDefault();
    navigator.clipboard.writeText('devguruatwork@gmail.com').then(() => {
      const btn = e.target;
      const originalText = btn.textContent;
      btn.textContent = 'Email Copied!';
      btn.style.background = 'rgba(0, 245, 255, 0.2)';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = 'transparent';
      }, 2000);
    }).catch(err => {
      console.error('Failed to copy email: ', err);
    });
  }
});


// ─────────────────────────────────────────────────────────────────────────────
// GUIDED TOUR SYSTEM
// ─────────────────────────────────────────────────────────────────────────────

(function () {
  // Only run on the homepage
  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') return;

  // Only show once per browser
  if (localStorage.getItem('tour_completed')) return;

  const TOUR_STEPS = [
    {
      selector: 'nav',
      title: 'Navigation Bar',
      text: 'This is the main navigation. Use "Work" to jump to my case studies, "About" to learn more about me, and "Contact Me" to get my email and socials.',
      position: 'bottom'
    },
    {
      selector: '.hero',
      title: 'Welcome Section',
      text: 'This is my introduction. I am a 4th-year student at IIIT Nagpur and a Product Manager. This portfolio showcases my UX research and product design work.',
      position: 'bottom'
    },
    {
      selector: '#work',
      title: 'Case Studies',
      text: 'These are my detailed case studies. Each card represents a full product design project with research, personas, wireframes, and metrics. Click any card to read the full case study.',
      position: 'top'
    },
    {
      selector: '#work .card:first-child',
      title: 'AI Voice Call Centre',
      text: 'My flagship project. I designed and built a multi-agent AI voice platform that replaces traditional call centres using real-time speech recognition, LLM reasoning, and neural text-to-speech.',
      position: 'right'
    },
    {
      selector: '#work .card:nth-child(2)',
      title: 'Meeting Minutes AI',
      text: 'An end-to-end AI pipeline that joins Google Meet, records audio, transcribes with speaker identification, and generates structured meeting notes automatically.',
      position: 'left'
    },
    {
      selector: '#about',
      title: 'About Me',
      text: 'A brief background on my experience and approach to product development. I work at the intersection of systems engineering, data science, and user experience.',
      position: 'top'
    },
    {
      selector: 'footer',
      title: 'Footer & Links',
      text: 'Find my email, phone, GitHub, LinkedIn, and a link to my full developer portfolio here.',
      position: 'top'
    }
  ];

  // Inject tour CSS
  const tourCSS = document.createElement('style');
  tourCSS.textContent = `
    .tour-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      z-index: 10000;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .tour-overlay.active {
      pointer-events: auto;
    }
    .tour-highlight {
      position: fixed;
      z-index: 10002;
      border: 2px solid #6366f1;
      border-radius: 12px;
      box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.75), 0 0 30px rgba(99, 102, 241, 0.5);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: none;
    }
    .tour-tooltip {
      position: fixed;
      z-index: 10003;
      background: #111;
      border: 1px solid rgba(99, 102, 241, 0.5);
      border-radius: 16px;
      padding: 1.5rem 2rem;
      max-width: 380px;
      width: 90vw;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      pointer-events: auto;
    }
    .tour-tooltip h4 {
      color: #6366f1;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
    }
    .tour-tooltip h3 {
      color: #fff;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    .tour-tooltip p {
      color: #a3a3a3;
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.25rem;
    }
    .tour-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.75rem;
    }
    .tour-progress {
      color: #666;
      font-size: 0.8rem;
      font-weight: 500;
    }
    .tour-btns {
      display: flex;
      gap: 0.5rem;
    }
    .tour-btn {
      padding: 0.5rem 1.25rem;
      border-radius: 100px;
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
      font-family: 'Inter', sans-serif;
    }
    .tour-btn-skip {
      background: transparent;
      color: #666;
      border: 1px solid #333;
    }
    .tour-btn-skip:hover {
      color: #fff;
      border-color: #555;
    }
    .tour-btn-next {
      background: #6366f1;
      color: #fff;
    }
    .tour-btn-next:hover {
      background: #818cf8;
      transform: translateY(-1px);
    }
    .tour-ask-modal {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      z-index: 10000;
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(12px);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: tourFadeIn 0.4s ease;
    }
    .tour-ask-box {
      background: #111;
      border: 1px solid rgba(99, 102, 241, 0.4);
      border-radius: 20px;
      padding: 2.5rem;
      text-align: center;
      max-width: 420px;
      width: 90%;
      animation: tourSlideUp 0.4s ease;
    }
    .tour-ask-box h2 {
      color: #fff;
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
    }
    .tour-ask-box p {
      color: #a3a3a3;
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    .tour-ask-btns {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }
    .tour-ask-btn {
      padding: 0.75rem 2rem;
      border-radius: 100px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: all 0.2s ease;
      font-family: 'Inter', sans-serif;
    }
    .tour-ask-yes {
      background: #6366f1;
      color: #fff;
    }
    .tour-ask-yes:hover {
      background: #818cf8;
      transform: translateY(-2px);
    }
    .tour-ask-no {
      background: transparent;
      color: #a3a3a3;
      border: 1px solid #333;
    }
    .tour-ask-no:hover {
      color: #fff;
      border-color: #555;
    }
    .tour-complete {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      z-index: 10000;
      background: rgba(0, 0, 0, 0.85);
      backdrop-filter: blur(12px);
      display: flex;
      align-items: center;
      justify-content: center;
      animation: tourFadeIn 0.4s ease;
    }
    .tour-complete-box {
      text-align: center;
      animation: tourSlideUp 0.4s ease;
    }
    .tour-complete-box h2 {
      color: #fff;
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }
    .tour-complete-box p {
      color: #a3a3a3;
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
    @keyframes tourFadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes tourSlideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(tourCSS);

  let currentStep = -1;

  // STEP 1: Ask the user
  function showAskModal() {
    const ask = document.createElement('div');
    ask.className = 'tour-ask-modal';
    ask.innerHTML = `
      <div class="tour-ask-box">
        <h2>Welcome to my Portfolio!</h2>
        <p>Would you like a quick guided overview of the site? I'll walk you through each section.</p>
        <div class="tour-ask-btns">
          <button class="tour-ask-btn tour-ask-yes">Yes, show me around</button>
          <button class="tour-ask-btn tour-ask-no">No thanks</button>
        </div>
      </div>
    `;
    document.body.appendChild(ask);

    ask.querySelector('.tour-ask-yes').addEventListener('click', () => {
      ask.remove();
      startTour();
    });

    ask.querySelector('.tour-ask-no').addEventListener('click', () => {
      ask.remove();
      showDismissMessage();
      localStorage.setItem('tour_completed', 'true');
    });
  }

  function showDismissMessage() {
    const msg = document.createElement('div');
    msg.style.cssText = 'position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);z-index:10000;background:#111;border:1px solid #333;border-radius:12px;padding:1rem 2rem;color:#a3a3a3;font-size:0.95rem;animation:tourSlideUp 0.3s ease;';
    msg.textContent = 'Got it! Feel free to explore at your own pace.';
    document.body.appendChild(msg);
    setTimeout(() => { msg.style.opacity = '0'; msg.style.transition = 'opacity 0.5s'; }, 2500);
    setTimeout(() => msg.remove(), 3000);
  }

  // STEP 2: Run the tour
  function startTour() {
    // Create overlay elements
    const highlight = document.createElement('div');
    highlight.className = 'tour-highlight';
    document.body.appendChild(highlight);

    const tooltip = document.createElement('div');
    tooltip.className = 'tour-tooltip';
    document.body.appendChild(tooltip);

    let tourActive = true;
    let trackRAF = null;
    let activeTarget = null;
    let activeStepConfig = null;

    function updatePositions() {
      if (!tourActive || !activeTarget || !activeStepConfig) return;

      const rect = activeTarget.getBoundingClientRect();
      const pad = 8;

      // Position highlight (fixed to viewport)
      highlight.style.top = (rect.top - pad) + 'px';
      highlight.style.left = (rect.left - pad) + 'px';
      highlight.style.width = (rect.width + pad * 2) + 'px';
      highlight.style.height = (rect.height + pad * 2) + 'px';

      // Position tooltip
      const ttRect = tooltip.getBoundingClientRect();
      let ttTop, ttLeft;

      if (activeStepConfig.position === 'bottom') {
        ttTop = rect.bottom + 16;
        ttLeft = rect.left + rect.width / 2 - ttRect.width / 2;
      } else if (activeStepConfig.position === 'top') {
        ttTop = rect.top - ttRect.height - 16;
        ttLeft = rect.left + rect.width / 2 - ttRect.width / 2;
      } else if (activeStepConfig.position === 'right') {
        ttTop = rect.top + rect.height / 2 - ttRect.height / 2;
        ttLeft = rect.right + 16;
      } else {
        ttTop = rect.top + rect.height / 2 - ttRect.height / 2;
        ttLeft = rect.left - ttRect.width - 16;
      }

      // Clamp to viewport
      const margin = 16;
      ttLeft = Math.max(margin, Math.min(ttLeft, window.innerWidth - ttRect.width - margin));
      
      // Smart vertical clamping (flip to bottom if top goes off-screen, etc.)
      if (ttTop < margin) {
         ttTop = rect.bottom + 16; // flip to bottom
      }
      if (ttTop + ttRect.height > window.innerHeight - margin) {
         ttTop = rect.top - ttRect.height - 16; // flip to top
      }
      // Final hard clamp
      ttTop = Math.max(margin, Math.min(ttTop, window.innerHeight - ttRect.height - margin));

      tooltip.style.top = ttTop + 'px';
      tooltip.style.left = ttLeft + 'px';

      if (tourActive) {
        trackRAF = requestAnimationFrame(updatePositions);
      }
    }

    function goToStep(index) {
      currentStep = index;

      if (index >= TOUR_STEPS.length) {
        // Tour complete
        tourActive = false;
        cancelAnimationFrame(trackRAF);
        highlight.remove();
        tooltip.remove();
        showComplete();
        return;
      }

      activeStepConfig = TOUR_STEPS[index];
      activeTarget = document.querySelector(activeStepConfig.selector);
      
      if (!activeTarget) { goToStep(index + 1); return; }

      // Scroll to element (smoothly)
      activeTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });

      // Build tooltip content immediately
      tooltip.innerHTML = `
        <h4>Step ${index + 1} of ${TOUR_STEPS.length}</h4>
        <h3>${activeStepConfig.title}</h3>
        <p>${activeStepConfig.text}</p>
        <div class="tour-footer">
          <span class="tour-progress">${index + 1} / ${TOUR_STEPS.length}</span>
          <div class="tour-btns">
            <button class="tour-btn tour-btn-skip">${index === 0 ? 'Skip Tour' : 'Skip'}</button>
            <button class="tour-btn tour-btn-next">${index === TOUR_STEPS.length - 1 ? 'Finish' : 'Next'}</button>
          </div>
        </div>
      `;

      // Wire buttons
      tooltip.querySelector('.tour-btn-next').addEventListener('click', () => goToStep(index + 1));
      tooltip.querySelector('.tour-btn-skip').addEventListener('click', () => {
        tourActive = false;
        cancelAnimationFrame(trackRAF);
        highlight.remove();
        tooltip.remove();
        localStorage.setItem('tour_completed', 'true');
        showDismissMessage();
      });

      // Start tracking
      if (!trackRAF) {
        updatePositions();
      }
    }

    goToStep(0);
  }

  function showComplete() {
    localStorage.setItem('tour_completed', 'true');
    const done = document.createElement('div');
    done.className = 'tour-complete';
    done.innerHTML = `
      <div class="tour-complete-box">
        <h2>Tour Complete!</h2>
        <p>You're all set. Go ahead and explore the case studies.</p>
        <button class="tour-ask-btn tour-ask-yes" id="tour-done-btn">Start Exploring</button>
      </div>
    `;
    document.body.appendChild(done);
    done.querySelector('#tour-done-btn').addEventListener('click', () => {
      done.style.opacity = '0';
      done.style.transition = 'opacity 0.4s ease';
      setTimeout(() => {
        done.remove();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 400);
    });
  }

  // Kick off after a short delay to let the page render
  setTimeout(showAskModal, 1500);
})();

