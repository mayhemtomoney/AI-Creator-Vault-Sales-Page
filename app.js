// Utility: Throttle function for performance
function throttle(fn, wait) {
    let time = Date.now();
    return function (...args) {
        if ((time + wait - Date.now()) < 0) {
            fn.apply(this, args);
            time = Date.now();
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    initializeNeuralNetwork();
    initializeTerminalFAQ();
    initializePricingNeuralToggle();
    initializeFloatingCTA();
    initializeQuantumCountdown(); // ✅ Updated countdown auto-resets monthly
    initializeHolographicCTAs();
    initializeScrollNeuralEffects();
    initializeDataStreams();
    initializePixelRain();
});

/********************
 * NEURAL BACKGROUNDS
 ********************/
function initializeNeuralNetwork() {
    createDataStreams();
    createPixelRain();
    setInterval(createNeuralPulse, 3000);
}

function createDataStreams() {
    const container = document.getElementById('dataStreams');
    if (!container) return;

    const colors = ['#00FFFF', '#FF0080', '#00FF41'];

    const spawnDataParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'data-particle';

        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = `linear-gradient(to bottom, ${color}, transparent)`;
        particle.style.boxShadow = `0 0 10px ${color}`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.width = `${Math.random() * 2 + 1}px`;
        particle.style.height = `${Math.random() * 12 + 4}px`;

        const duration = Math.random() * 6 + 4;
        particle.style.animationDuration = `${duration}s`;

        container.appendChild(particle);
        setTimeout(() => particle.remove(), duration * 1000);
    };

    for (let i = 0; i < 30; i++) {
        setTimeout(spawnDataParticle, i * 200);
    }

    setInterval(spawnDataParticle, 800);
}

function createPixelRain() {
    const container = document.getElementById('pixelRain');
    if (!container) return;

    const spawnPixel = () => {
        const pixel = document.createElement('div');
        pixel.className = 'rain-pixel';

        pixel.style.left = `${Math.random() * window.innerWidth}px`;
        pixel.style.width = `${Math.random() * 2 + 1}px`;
        pixel.style.height = `${Math.random() * 6 + 2}px`;

        const colors = ['#00FF41', '#00FFFF', '#FF0080'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        pixel.style.background = color;
        pixel.style.boxShadow = `0 0 5px ${color}`;

        const duration = Math.random() * 3 + 2;
        pixel.style.animationDuration = `${duration}s`;
        pixel.style.animationDelay = `${Math.random() * 2}s`;

        container.appendChild(pixel);
        setTimeout(() => pixel.remove(), (duration + 2) * 1000);
    };

    setInterval(spawnPixel, 150);
}

function createNeuralPulse() {
    const pulse = document.createElement('div');
    pulse.style.position = 'fixed';
    pulse.style.width = '4px';
    pulse.style.height = '4px';
    pulse.style.background = '#00FFFF';
    pulse.style.borderRadius = '50%';
    pulse.style.boxShadow = '0 0 20px #00FFFF';
    pulse.style.left = `${Math.random() * window.innerWidth}px`;
    pulse.style.top = `${Math.random() * window.innerHeight}px`;
    pulse.style.zIndex = '-1';
    pulse.style.animation = 'neuralPulse 2s ease-out forwards';

    document.body.appendChild(pulse);
    setTimeout(() => pulse.remove(), 2000);
}

// Add styles (unchanged)
const neuralStyle = document.createElement('style');
neuralStyle.textContent = `
@keyframes neuralPulse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(20); opacity: 0; }
}
`;
document.head.appendChild(neuralStyle);

/***********************
 * UPDATED COUNTDOWN TIMER
 ***********************/
function initializeQuantumCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');

    if (!daysEl || !hoursEl || !minutesEl) return;

    // Dynamic: calculate next 1st of the month
    function getNextFirstOfMonth() {
        const now = new Date();
        const year = now.getFullYear();
        let nextMonth = now.getMonth() + 1;
        if (nextMonth > 11) {
            return new Date(year + 1, 0, 1, 0, 0, 0, 0);
        }
        return new Date(year, nextMonth, 1, 0, 0, 0, 0);
    }

    let targetDate = getNextFirstOfMonth().getTime();

    function updateCountdown() {
        const now = Date.now();
        let diff = targetDate - now;

        if (diff <= 0) {
            targetDate = getNextFirstOfMonth().getTime();
            diff = targetDate - now;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        updateQuantumDigit(daysEl, days);
        updateQuantumDigit(hoursEl, hours);
        updateQuantumDigit(minutesEl, minutes);
    }

    function updateQuantumDigit(element, value) {
        const newValue = String(value).padStart(2, '0');
        const currentValue = element.textContent;

        if (newValue !== currentValue) {
            element.style.transform = 'scale(1.2)';
            element.style.textShadow = '0 0 30px currentColor';

            setTimeout(() => {
                element.textContent = newValue;
                element.style.transform = 'scale(1)';
                element.style.textShadow = '0 0 20px rgba(0,255,255,0.5), 0 0 40px rgba(0,255,255,0.3)';
            }, 150);
        } else {
            element.textContent = newValue;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 60000); // every 60s
}

/****************************
 * Everything else unchanged
 ****************************/
function initializeTerminalFAQ() { /* ... your FAQ logic (unchanged) ... */ }

function initializePricingNeuralToggle() { /* ... your pricing toggle code ... */ }

function initializeFloatingCTA() { /* ... your floating CTA logic ... */ }

function initializeHolographicCTAs() { /* ... your CTA pulse/modal code ... */ }

function initializeScrollNeuralEffects() { /* ... your scroll reveal animations ... */ }

function initializeDataStreams() { /* ... glitch fx + data bursts ... */ }

function initializePixelRain() { /* ... rain particles+ occasional pulses ... */ }
