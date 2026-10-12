/**
 * =====================================================================
 * AAYUSH MEENA - FUTURISTIC SUPERCAR & TECH PORTFOLIO JAVASCRIPT
 * Page Transitions with Supercars (Bugatti, Lambo, BMW, Dodge, Superbike),
 * Right HUD Navigation, Audio Synthesizer, AI Chatbot Dock, & Telemetry
 * =====================================================================
 */

// Section order array
const SECTIONS = ['home', 'about', 'education', 'skills', 'certifications', 'contact'];

// Supercar profiles for transitions
const SUPERCAR_PROFILES = {
  home: {
    name: 'BUGATTI CHIRON // 490 KM/H',
    mode: 'QUAD-TURBO W16 // LAUNCH CONTROL ACTIVE',
    speed: 490,
    accentColor: '#00f0ff',
    svg: `
      <svg class="car-svg" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,120 L70,80 L140,55 L240,40 L380,40 L450,65 L540,90 L570,120 L585,135 L560,140 L530,140 C520,110 470,110 460,140 L210,140 C200,110 150,110 140,140 L45,140 Z" fill="#0c1017" stroke="#00f0ff" stroke-width="3"/>
        <path d="M160,58 L235,46 L360,46 L420,68 L360,70 L230,70 Z" fill="rgba(0, 240, 255, 0.25)" stroke="#00f0ff" stroke-width="1.5"/>
        <path d="M430,72 L470,85 L440,88 Z" fill="#ff4d00"/>
        <line x1="25" y1="120" x2="65" y2="120" stroke="#ff003c" stroke-width="5" stroke-linecap="round" class="taillight-glow"/>
        <line x1="535" y1="92" x2="575" y2="108" stroke="#00f0ff" stroke-width="5" stroke-linecap="round" class="headlight-beam"/>
        <g class="wheel front-wheel" transform="translate(495, 140)">
          <circle cx="0" cy="0" r="32" fill="#080808" stroke="#00f0ff" stroke-width="4"/>
          <circle cx="0" cy="0" r="14" fill="#ff003c"/>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#ffffff" stroke-width="2"/>
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#ffffff" stroke-width="2"/>
        </g>
        <g class="wheel rear-wheel" transform="translate(175, 140)">
          <circle cx="0" cy="0" r="32" fill="#080808" stroke="#00f0ff" stroke-width="4"/>
          <circle cx="0" cy="0" r="14" fill="#ff003c"/>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#ffffff" stroke-width="2"/>
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#ffffff" stroke-width="2"/>
        </g>
      </svg>
    `
  },
  about: {
    name: 'LAMBORGHINI REVUELTO // 350 KM/H',
    mode: 'NATURALLY ASPIRATED V12 HYBRID // CORSA MODE',
    speed: 350,
    accentColor: '#ff6b00',
    svg: `
      <svg class="car-svg" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25,125 L90,85 L180,50 L280,45 L380,45 L470,75 L555,100 L585,130 L555,140 L525,140 C515,108 465,108 455,140 L210,140 C200,108 150,108 140,140 L40,140 Z" fill="#120c06" stroke="#ff6b00" stroke-width="3"/>
        <polygon points="190,55 270,48 375,48 440,78 350,78 260,78" fill="rgba(255, 107, 0, 0.2)" stroke="#ff6b00" stroke-width="1.5"/>
        <line x1="20" y1="120" x2="70" y2="120" stroke="#ff003c" stroke-width="6" stroke-linecap="round" class="taillight-glow"/>
        <polygon points="545,105 580,118 550,122" fill="#ff6b00" class="headlight-beam"/>
        <g class="wheel front-wheel" transform="translate(490, 140)">
          <circle cx="0" cy="0" r="32" fill="#0a0a0a" stroke="#ff6b00" stroke-width="4"/>
          <circle cx="0" cy="0" r="12" fill="#ffd000"/>
          <line x1="-26" y1="-14" x2="26" y2="14" stroke="#ffffff" stroke-width="2"/>
          <line x1="-26" y1="14" x2="26" y2="-14" stroke="#ffffff" stroke-width="2"/>
        </g>
        <g class="wheel rear-wheel" transform="translate(175, 140)">
          <circle cx="0" cy="0" r="32" fill="#0a0a0a" stroke="#ff6b00" stroke-width="4"/>
          <circle cx="0" cy="0" r="12" fill="#ffd000"/>
          <line x1="-26" y1="-14" x2="26" y2="14" stroke="#ffffff" stroke-width="2"/>
          <line x1="-26" y1="14" x2="26" y2="-14" stroke="#ffffff" stroke-width="2"/>
        </g>
      </svg>
    `
  },
  education: {
    name: 'BMW M8 COMPETITION // 305 KM/H',
    mode: 'TWIN-TURBO 4.4L V8 // M XDRIVE TRACK SPEC',
    speed: 305,
    accentColor: '#38bdf8',
    svg: `
      <svg class="car-svg" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35,120 L85,82 L160,60 L260,48 L390,48 L460,70 L545,95 L575,120 L585,135 L555,140 L525,140 C515,110 465,110 455,140 L215,140 C205,110 155,110 145,140 L45,140 Z" fill="#0a121e" stroke="#38bdf8" stroke-width="3"/>
        <path d="M175,64 L255,54 L375,54 L440,74 L370,74 L250,74 Z" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="1.5"/>
        <!-- BMW M tri-color accent badge -->
        <rect x="420" y="80" width="8" height="14" fill="#00f0ff"/>
        <rect x="428" y="80" width="8" height="14" fill="#002b80"/>
        <rect x="436" y="80" width="8" height="14" fill="#ff003c"/>
        <line x1="30" y1="118" x2="75" y2="118" stroke="#ff003c" stroke-width="5" stroke-linecap="round" class="taillight-glow"/>
        <line x1="535" y1="100" x2="575" y2="115" stroke="#38bdf8" stroke-width="5" stroke-linecap="round" class="headlight-beam"/>
        <g class="wheel front-wheel" transform="translate(490, 140)">
          <circle cx="0" cy="0" r="32" fill="#080808" stroke="#38bdf8" stroke-width="4"/>
          <circle cx="0" cy="0" r="14" fill="#002b80"/>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#ffffff" stroke-width="2"/>
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#ffffff" stroke-width="2"/>
        </g>
        <g class="wheel rear-wheel" transform="translate(180, 140)">
          <circle cx="0" cy="0" r="32" fill="#080808" stroke="#38bdf8" stroke-width="4"/>
          <circle cx="0" cy="0" r="14" fill="#002b80"/>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#ffffff" stroke-width="2"/>
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#ffffff" stroke-width="2"/>
        </g>
      </svg>
    `
  },
  skills: {
    name: 'DODGE CHALLENGER HELLCAT // 327 KM/H',
    mode: 'SUPERCHARGED 6.2L HEMI // REDEYE BURNOUT',
    speed: 327,
    accentColor: '#ff003c',
    svg: `
      <svg class="car-svg" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25,120 L55,75 L125,58 L230,48 L390,48 L460,65 L555,75 L585,115 L585,138 L555,140 L525,140 C515,108 465,108 455,140 L215,140 C205,108 155,108 145,140 L35,140 Z" fill="#140608" stroke="#ff003c" stroke-width="3"/>
        <path d="M145,62 L225,52 L375,52 L440,68 L360,70 L220,70 Z" fill="rgba(255, 0, 60, 0.25)" stroke="#ff003c" stroke-width="1.5"/>
        <line x1="20" y1="110" x2="60" y2="110" stroke="#ff003c" stroke-width="7" stroke-linecap="round" class="taillight-glow"/>
        <line x1="540" y1="85" x2="575" y2="95" stroke="#ffffff" stroke-width="5" stroke-linecap="round" class="headlight-beam"/>
        <!-- Dual racing stripes -->
        <line x1="120" y1="58" x2="550" y2="76" stroke="rgba(255,255,255,0.4)" stroke-width="3"/>
        <g class="wheel front-wheel" transform="translate(490, 140)">
          <circle cx="0" cy="0" r="32" fill="#080808" stroke="#ff003c" stroke-width="4"/>
          <circle cx="0" cy="0" r="14" fill="#222"/>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#ff003c" stroke-width="2"/>
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#ff003c" stroke-width="2"/>
        </g>
        <g class="wheel rear-wheel" transform="translate(180, 140)">
          <circle cx="0" cy="0" r="32" fill="#080808" stroke="#ff003c" stroke-width="4"/>
          <circle cx="0" cy="0" r="14" fill="#222"/>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#ff003c" stroke-width="2"/>
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#ff003c" stroke-width="2"/>
        </g>
      </svg>
    `
  },
  certifications: {
    name: 'KAWASAKI NINJA H2R // 400 KM/H',
    mode: 'SUPERCHARGED 998CC // AERODYNAMIC WINGLETS',
    speed: 400,
    accentColor: '#00ff88',
    svg: `
      <svg class="car-svg" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Sleek Superbike Silhouette -->
        <path d="M120,135 L170,90 L240,75 L310,50 L370,55 L430,70 L480,95 L495,135 L475,140 C465,108 415,108 405,140 L220,140 C210,108 160,108 150,140 Z" fill="#06120c" stroke="#00ff88" stroke-width="3"/>
        <path d="M305,52 L350,56 L380,72 L320,72 Z" fill="rgba(0, 255, 136, 0.3)" stroke="#00ff88" stroke-width="1.5"/>
        <line x1="110" y1="130" x2="145" y2="120" stroke="#ff003c" stroke-width="5" stroke-linecap="round" class="taillight-glow"/>
        <line x1="455" y1="88" x2="490" y2="105" stroke="#00ff88" stroke-width="6" stroke-linecap="round" class="headlight-beam"/>
        <!-- Front & rear bike wheels -->
        <g class="wheel front-wheel" transform="translate(440, 140)">
          <circle cx="0" cy="0" r="30" fill="#080808" stroke="#00ff88" stroke-width="4"/>
          <circle cx="0" cy="0" r="10" fill="#00ff88"/>
          <line x1="-25" y1="0" x2="25" y2="0" stroke="#ffffff" stroke-width="2"/>
          <line x1="0" y1="-25" x2="0" y2="25" stroke="#ffffff" stroke-width="2"/>
        </g>
        <g class="wheel rear-wheel" transform="translate(185, 140)">
          <circle cx="0" cy="0" r="30" fill="#080808" stroke="#00ff88" stroke-width="4"/>
          <circle cx="0" cy="0" r="10" fill="#00ff88"/>
          <line x1="-25" y1="0" x2="25" y2="0" stroke="#ffffff" stroke-width="2"/>
          <line x1="0" y1="-25" x2="0" y2="25" stroke="#ffffff" stroke-width="2"/>
        </g>
      </svg>
    `
  },
  contact: {
    name: 'CYBER SONIC COMMS // 500 KM/H',
    mode: 'AI NEURAL HYPER-DRIVE // DIRECT TELEMETRY',
    speed: 500,
    accentColor: '#9d4edd',
    svg: `
      <svg class="car-svg" viewBox="0 0 600 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,120 L75,70 L160,50 L270,38 L390,38 L470,60 L550,85 L580,120 L585,135 L555,140 L525,140 C515,108 465,108 455,140 L210,140 C200,108 150,108 140,140 L40,140 Z" fill="#100818" stroke="#9d4edd" stroke-width="3"/>
        <path d="M180,52 L265,42 L380,42 L440,65 L360,65 L240,65 Z" fill="rgba(157, 78, 221, 0.3)" stroke="#9d4edd" stroke-width="1.5"/>
        <line x1="25" y1="120" x2="70" y2="120" stroke="#ff003c" stroke-width="6" stroke-linecap="round" class="taillight-glow"/>
        <line x1="535" y1="88" x2="575" y2="105" stroke="#9d4edd" stroke-width="6" stroke-linecap="round" class="headlight-beam"/>
        <g class="wheel front-wheel" transform="translate(490, 140)">
          <circle cx="0" cy="0" r="32" fill="#080808" stroke="#9d4edd" stroke-width="4"/>
          <circle cx="0" cy="0" r="14" fill="#9d4edd"/>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#ffffff" stroke-width="2"/>
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#ffffff" stroke-width="2"/>
        </g>
        <g class="wheel rear-wheel" transform="translate(175, 140)">
          <circle cx="0" cy="0" r="32" fill="#080808" stroke="#9d4edd" stroke-width="4"/>
          <circle cx="0" cy="0" r="14" fill="#9d4edd"/>
          <line x1="-28" y1="0" x2="28" y2="0" stroke="#ffffff" stroke-width="2"/>
          <line x1="0" y1="-28" x2="0" y2="28" stroke="#ffffff" stroke-width="2"/>
        </g>
      </svg>
    `
  }
};

// State variables
let currentSection = 'home';
let isTransitioning = false;
let audioEnabled = true;
let audioCtx = null;
let lastScrollTime = 0;

// Initialize on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSoundToggle();
  initScrollHandler();
  initChatbot();
  updateHudProgress();
});

/**
 * =====================================================================
 * NAVIGATION & SUPERCAR TRANSITIONS
 * =====================================================================
 */
function navigateTo(targetId) {
  if (isTransitioning || targetId === currentSection || !SECTIONS.includes(targetId)) {
    return;
  }

  isTransitioning = true;

  const currentIndex = SECTIONS.indexOf(currentSection);
  const targetIndex = SECTIONS.indexOf(targetId);
  const isForward = targetIndex > currentIndex;

  // Supercar profile
  const carProfile = SUPERCAR_PROFILES[targetId] || SUPERCAR_PROFILES.home;

  // Update transition overlay vehicle details
  const overlay = document.getElementById('carTransitionOverlay');
  const chassisContainer = document.getElementById('carChassisContainer');
  const carNameBadge = document.getElementById('transitionCarName');
  const carTelemetryMode = document.querySelector('.telemetry-mode');

  if (chassisContainer) chassisContainer.innerHTML = carProfile.svg;
  if (carNameBadge) carNameBadge.textContent = carProfile.name;
  if (carTelemetryMode) carTelemetryMode.textContent = carProfile.mode;

  // Direction class
  overlay.classList.remove('dir-forward', 'dir-backward');
  overlay.classList.add(isForward ? 'dir-forward' : 'dir-backward');

  // Trigger Sound FX
  playEngineSoundEffect(carProfile.speed);

  // Trigger Speedometer rev counter on right HUD
  animateSpeedometer(carProfile.speed);

  // Activate overlay animation
  overlay.classList.add('is-active');

  // Switch actual section content right at the car's mid-screen pass (approx 380ms)
  setTimeout(() => {
    // Hide previous section
    const prevSectionEl = document.getElementById(`page-${currentSection}`);
    if (prevSectionEl) prevSectionEl.classList.remove('active-section');

    // Show target section
    const targetSectionEl = document.getElementById(`page-${targetId}`);
    if (targetSectionEl) targetSectionEl.classList.add('active-section');

    // Update state
    currentSection = targetId;
    document.body.dataset.currentPage = targetId;

    // Update Header Navigation items
    document.querySelectorAll('.nav-item').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.target === targetId);
    });

    // Update Right-side HUD nodes
    document.querySelectorAll('.hud-node').forEach(node => {
      node.classList.toggle('active', node.dataset.section === targetId);
    });

    // Update HUD vertical progress bar
    updateHudProgress();

    // Scroll viewport to top cleanly
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Close mobile menu if open
    const navLinks = document.getElementById('mainNav');
    if (navLinks) navLinks.classList.remove('mobile-open');

  }, 380);

  // Finish transition and reset overlay (approx 850ms)
  setTimeout(() => {
    overlay.classList.remove('is-active');
    isTransitioning = false;
  }, 850);
}

/**
 * Update the vertical progress indicator line on the right HUD bar
 */
function updateHudProgress() {
  const progressLine = document.getElementById('hudProgressIndicator');
  if (!progressLine) return;

  const total = SECTIONS.length;
  const currentIdx = SECTIONS.indexOf(currentSection);
  const percent = ((currentIdx) / (total - 1)) * 100;
  progressLine.style.height = `${Math.max(12, percent * 1.8)}px`;
}

/**
 * Animate the digital speedometer reading in the right HUD
 */
function animateSpeedometer(targetSpeed) {
  const speedEl = document.getElementById('hudSpeedDisplay');
  if (!speedEl) return;

  let currentVal = 0;
  const step = Math.ceil(targetSpeed / 18);
  const interval = setInterval(() => {
    currentVal += step;
    if (currentVal >= targetSpeed) {
      currentVal = targetSpeed;
      clearInterval(interval);
      // Reset back to cruising idle after 1.5s
      setTimeout(() => {
        if (!isTransitioning) speedEl.textContent = '000';
      }, 1500);
    }
    speedEl.textContent = String(currentVal).padStart(3, '0');
  }, 25);
}

/**
 * =====================================================================
 * SCROLL & WHEEL NAVIGATION HANDLER
 * Enables vertical scroll switching with supercar transitions
 * =====================================================================
 */
function initScrollHandler() {
  let touchStartY = 0;

  // Mouse wheel scroll detection
  window.addEventListener('wheel', (e) => {
    const now = Date.now();
    // Debounce to prevent rapid multiple transitions
    if (now - lastScrollTime < 1000 || isTransitioning) return;

    // Check if scrolled down or up with sufficient force
    if (e.deltaY > 35) {
      const nextIdx = SECTIONS.indexOf(currentSection) + 1;
      if (nextIdx < SECTIONS.length) {
        lastScrollTime = now;
        navigateTo(SECTIONS[nextIdx]);
      }
    } else if (e.deltaY < -35) {
      const prevIdx = SECTIONS.indexOf(currentSection) - 1;
      if (prevIdx >= 0) {
        lastScrollTime = now;
        navigateTo(SECTIONS[prevIdx]);
      }
    }
  }, { passive: true });

  // Keyboard navigation (Down, Up, PageDown, PageUp)
  window.addEventListener('keydown', (e) => {
    if (isTransitioning) return;

    // Ignore if user is currently typing in an input or textarea
    if (['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) return;

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      const nextIdx = SECTIONS.indexOf(currentSection) + 1;
      if (nextIdx < SECTIONS.length) {
        e.preventDefault();
        navigateTo(SECTIONS[nextIdx]);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      const prevIdx = SECTIONS.indexOf(currentSection) - 1;
      if (prevIdx >= 0) {
        e.preventDefault();
        navigateTo(SECTIONS[prevIdx]);
      }
    }
  });

  // Touch Swipe for mobile devices
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    const now = Date.now();
    if (now - lastScrollTime < 900 || isTransitioning) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY - touchEndY;

    if (diffY > 60) {
      // Swiped up -> next page
      const nextIdx = SECTIONS.indexOf(currentSection) + 1;
      if (nextIdx < SECTIONS.length) {
        lastScrollTime = now;
        navigateTo(SECTIONS[nextIdx]);
      }
    } else if (diffY < -60) {
      // Swiped down -> prev page
      const prevIdx = SECTIONS.indexOf(currentSection) - 1;
      if (prevIdx >= 0) {
        lastScrollTime = now;
        navigateTo(SECTIONS[prevIdx]);
      }
    }
  }, { passive: true });
}

/**
 * =====================================================================
 * SYNTHESIZED WEB AUDIO API ENGINE SOUND EFFECTS
 * Completely local, zero external audio assets required!
 * =====================================================================
 */
function initSoundToggle() {
  const btn = document.getElementById('soundToggleBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    audioEnabled = !audioEnabled;
    btn.classList.toggle('muted', !audioEnabled);
    btn.querySelector('.sound-label').textContent = audioEnabled ? 'AUDIO: ON' : 'AUDIO: OFF';
    btn.querySelector('.sound-icon').textContent = audioEnabled ? '🔊' : '🔇';

    if (audioEnabled) {
      playEngineSoundEffect(350);
      showToast('Supercar V12 & Nitro Audio Activated!');
    } else {
      showToast('Audio muted');
    }
  });
}

function playEngineSoundEffect(speedVal) {
  if (!audioEnabled) return;

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const t = audioCtx.currentTime;

    // 1. Engine Throttle Rumble Oscillator
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sawtooth';
    // Frequency ramp simulates gear rev up and down
    osc.frequency.setValueAtTime(60, t);
    osc.frequency.exponentialRampToValueAtTime(120 + (speedVal / 3), t + 0.35);
    osc.frequency.exponentialRampToValueAtTime(80, t + 0.8);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, t);
    filter.frequency.exponentialRampToValueAtTime(1400, t + 0.35);
    filter.frequency.exponentialRampToValueAtTime(250, t + 0.8);

    gainNode.gain.setValueAtTime(0.01, t);
    gainNode.gain.linearRampToValueAtTime(0.18, t + 0.25);
    gainNode.gain.exponentialRampToValueAtTime(0.001, t + 0.85);

    osc.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start(t);
    osc.stop(t + 0.85);

    // 2. Nitro Whoosh / Turbo Blow-off (White noise burst)
    const bufferSize = audioCtx.sampleRate * 0.7;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;

    const noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(800, t);
    noiseFilter.frequency.exponentialRampToValueAtTime(3200, t + 0.3);
    noiseFilter.frequency.exponentialRampToValueAtTime(400, t + 0.7);

    const noiseGain = audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.01, t);
    noiseGain.gain.linearRampToValueAtTime(0.14, t + 0.3);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, t + 0.7);

    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(audioCtx.destination);

    whiteNoise.start(t);
  } catch (err) {
    console.warn('AudioContext not allowed or supported', err);
  }
}

/**
 * =====================================================================
 * INTERACTIVE AI CHATBOT DOCK (HOME BOTTOM-MID)
 * =====================================================================
 */
function initChatbot() {
  // Mobile toggle button
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mainNav = document.getElementById('mainNav');
  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('mobile-open');
    });
  }
}

function toggleChatbot() {
  const dock = document.getElementById('aiChatbotDock');
  if (dock) {
    dock.classList.toggle('is-collapsed');
  }
}

function sendQuickPrompt(promptText) {
  const input = document.getElementById('chatInput');
  if (input) {
    input.value = promptText;
    handleChatSubmit(new Event('submit'));
  }
}

function handleChatSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();

  const input = document.getElementById('chatInput');
  const messagesContainer = document.getElementById('chatbotMessages');
  if (!input || !messagesContainer) return;

  const userQuery = input.value.trim();
  if (!userQuery) return;

  // Append user message
  appendChatMessage('USER // YOU', userQuery, 'user-msg');
  input.value = '';

  // Ensure dock is expanded
  const dock = document.getElementById('aiChatbotDock');
  if (dock && dock.classList.contains('is-collapsed')) {
    dock.classList.remove('is-collapsed');
  }

  // Generate responsive AI answer based on Aayush's portfolio knowledge
  setTimeout(() => {
    const aiResponse = generateAIAnswer(userQuery);
    appendChatMessage('⚡ AAYUSH_AI_BOT', aiResponse, 'ai-msg');
  }, 450);
}

function appendChatMessage(sender, text, cssClass) {
  const messagesContainer = document.getElementById('chatbotMessages');
  if (!messagesContainer) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-msg ${cssClass}`;

  const senderDiv = document.createElement('div');
  senderDiv.className = 'chat-sender';
  senderDiv.textContent = sender;

  const bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'chat-bubble';
  bubbleDiv.textContent = text;

  msgDiv.appendChild(senderDiv);
  msgDiv.appendChild(bubbleDiv);

  messagesContainer.appendChild(msgDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIAnswer(query) {
  const q = query.toLowerCase();

  if (q.includes('who') || q.includes('about') || q.includes('aayush')) {
    return "Aayush Meena is an 18-year-old 1st-year B.Tech CSE student at JECRC Foundation. He's passionate about exploring behind-the-scenes algorithms, software development, AI tools, and high-performance supercars!";
  }
  if (q.includes('skill') || q.includes('tech') || q.includes('language') || q.includes('code')) {
    return "Aayush is learning C and C++, proficient in HTML/CSS/JavaScript, skilled with multimedia editing tools, actively utilizing AI and developer tools (Git/GitHub), and possesses professional 75+ WPM typing speed!";
  }
  if (q.includes('education') || q.includes('college') || q.includes('school') || q.includes('10') || q.includes('12')) {
    return "Education Milestones: 10th CBSE (Jodhpur Board) with 70%, 12th CBSE (Jodhpur Board) with 82%, and currently in 1st-year B.Tech Computer Science Engineering at JECRC!";
  }
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach')) {
    return "Direct Comms: Email: aayush.meena.95090@gmail.com | Phone: +91 9509027309. You can also connect via GitHub and LinkedIn!";
  }
  if (q.includes('chess') || q.includes('badminton') || q.includes('achieve') || q.includes('certificate') || q.includes('hobby')) {
    return "Achievements: 1st in Chess Under 17 ♟️, 1st in Badminton Duo Under 17 🏸, plus certified in hands-on AI Workshops and an AI & Cloud Computing Course degree!";
  }
  if (q.includes('car') || q.includes('bike') || q.includes('supercar') || q.includes('bugatti') || q.includes('lambo')) {
    return "Aayush loves supercars and superbikes (Bugatti, Lamborghini, BMW M, Dodge Challenger, Kawasaki Ninja H2R)! He channels that high-performance engineering mindset straight into code precision.";
  }

  return "Telemetry received! Aayush is actively building software projects and exploring AI at JECRC. Switch through the tabs or contact him directly at aayush.meena.95090@gmail.com!";
}

/**
 * =====================================================================
 * CONTACT DISPATCH TERMINAL & UTILITIES
 * =====================================================================
 */
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('senderName').value;
  const email = document.getElementById('senderEmail').value;
  const msg = document.getElementById('senderMsg').value;
  const statusEl = document.getElementById('terminalStatusMsg');

  if (statusEl) {
    statusEl.textContent = '⚡ ENCRYPTING & TRANSMITTING TELEMETRY...';
    statusEl.style.color = 'var(--neon-cyan)';
  }

  // Simulate instant transmission
  setTimeout(() => {
    if (statusEl) {
      statusEl.textContent = `✓ DISPATCH SENT! Thank you, ${name}. Aayush will reply to ${email} shortly.`;
      statusEl.style.color = 'var(--neon-lime)';
    }
    showToast(`Transmission sent to aayush.meena.95090@gmail.com!`);
    e.target.reset();
  }, 900);
}

function copyToClipboard(text, successMsg) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      fallbackCopy(text, successMsg);
    });
  } else {
    fallbackCopy(text, successMsg);
  }
}

function fallbackCopy(text, successMsg) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMsg);
  } catch (err) {
    showToast('Failed to copy');
  }
  document.body.removeChild(textArea);
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

function initNavigation() {
  // Check URL hash if opened with specific anchor
  const hash = window.location.hash.replace('#', '');
  if (SECTIONS.includes(hash)) {
    navigateTo(hash);
  }
}
