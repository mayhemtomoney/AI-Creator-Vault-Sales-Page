// AI Creator Vault - Neural Interface Controller
// Retro-futuristic interactions + smart countdown reset for monthly drops (AEST Brisbane)

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
    initializeQuantumCountdown(); // ✅ NEW: Countdown uses Brisbane timezone (AEST)
    initializeHolographicCTAs();
    initializeScrollNeuralEffects();
    initializeDataStreams();
    initializePixelRain();
});

/***********************
 * NEURAL COUNTDOWN (AEST)
 ***********************/
function initializeQuantumCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    if (!daysEl || !hoursEl || !minutesEl) return;

    // Helper: get next 1st of month at midnight Brisbane (AEST, UTC+10, NO daylight savings)
    function getBrisbaneNow() {
        // Brisbane is UTC+10 all year, no DST
        const now = new Date();
        // Convert now to UTC+10
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        return new Date(utc + 10 * 60 * 60 * 1000); // +10hr offset in ms
    }
    function getNextBrisbaneFirstOfMonth() {
        const todayBris = getBrisbaneNow();
        let year = todayBris.getFullYear();
        let month = todayBris.getMonth() + 1; // next month
        if (month > 11) { month = 0; year++; }
        return new Date(Date.UTC(year, month, 1, 0, 0, 0)) // UTC, but midnight AEST
            .getTime() + 10 * 60 * 60 * 1000; // force to +10hr
    }

    let targetDate = getNextBrisbaneFirstOfMonth();

    function updateCountdown() {
        // Get NOW in Brisbane time for accurate math
        const brisbaneNow = getBrisbaneNow().getTime();
        let diff = targetDate - brisbaneNow;

        if (diff <= 0) {
            // Move to 1st of NEXT month
            targetDate = getNextBrisbaneFirstOfMonth();
            diff = targetDate - brisbaneNow;
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
    setInterval(updateCountdown, 60000); // every minute
}

/************ REMAINING SECTIONS UNCHANGED, SKIP FOR BREVITY UNLESS YOU NEED THEM: ************/

function initializeNeuralNetwork() { /* ... */ }
function initializeTerminalFAQ() { /* ... */ }
function initializePricingNeuralToggle() { /* ... */ }
function initializeFloatingCTA() { /* ... */ }
function initializeHolographicCTAs() { /* ... */ }
function initializeScrollNeuralEffects() { /* ... */ }
function initializeDataStreams() { /* ... */ }
function createNeuralPulse() { /* ... */ }
function initializePixelRain() { /* ... */ }
/* ... any additional helper functions or CSS injection ... */
