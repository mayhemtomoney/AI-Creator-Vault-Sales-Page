// AI Creator Vault - Neural Interface Controller
// Enhanced retro-futuristic interactions and animations

// Utility: Enhanced throttle for performance
function throttle(fn, wait) {
    let time = Date.now();
    return function(...args) {
        if ((time + wait - Date.now()) < 0) {
            fn.apply(this, args);
            time = Date.now();
        }
    };
}

// Neural network initialization
document.addEventListener('DOMContentLoaded', () => {
    initializeNeuralNetwork();
    initializeTerminalFAQ();
    initializePricingNeuralToggle();
    initializeFloatingCTA();
    initializeQuantumCountdown();
    initializeHolographicCTAs();
    initializeScrollNeuralEffects();
    initializeDataStreams();
    initializePixelRain();
});

/*************************
 *  NEURAL NETWORK BG    *
 *************************/
function initializeNeuralNetwork() {
    createDataStreams();
    createPixelRain();
    
    // Add some dynamic neural pulses
    setInterval(createNeuralPulse, 3000);
}

function createDataStreams() {
    const container = document.getElementById('dataStreams');
    if (!container) return;

    const spawnDataParticle = () => {
        const particle = document.createElement('div');
        particle.className = 'data-particle';
        
        const colors = ['#00FFFF', '#FF0080', '#00FF41'];
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

    // Initial burst
    for(let i = 0; i < 30; i++) {
        setTimeout(spawnDataParticle, i * 200);
    }
    
    // Continuous generation
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

    // Spawn pixels periodically
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

// Add neural pulse animation
const neuralStyle = document.createElement('style');
neuralStyle.textContent = `
@keyframes neuralPulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        transform: scale(20);
        opacity: 0;
    }
}
`;
document.head.appendChild(neuralStyle);

/*************************
 *  TERMINAL FAQ SYSTEM  *
 *************************/
function initializeTerminalFAQ() {
    const queries = document.querySelectorAll('.faq-query');
    if (!queries.length) return;

    queries.forEach(query => {
        const btn = query.querySelector('.query-btn');
        const response = query.querySelector('.query-response');
        
        if (!btn || !response) return;

        btn.addEventListener('click', () => {
            // Close all other responses with terminal effect
            queries.forEach(q => {
                const qBtn = q.querySelector('.query-btn');
                const qResp = q.querySelector('.query-response');
                if (qBtn && qResp && q !== query) {
                    qResp.classList.remove('active');
                    qBtn.style.color = '#58a6ff';
                }
            });

            // Toggle current response
            const isActive = response.classList.contains('active');
            if (isActive) {
                response.classList.remove('active');
                btn.style.color = '#58a6ff';
            } else {
                response.classList.add('active');
                btn.style.color = '#00FFFF';
                
                // Terminal typing effect
                const responseText = response.querySelector('p');
                if (responseText) {
                    typewriterEffect(responseText);
                }
            }
        });
    });
}

function typewriterEffect(element) {
    const text = element.textContent;
    const promptSpan = element.querySelector('.response-prompt');
    const promptText = promptSpan ? promptSpan.textContent : '';
    
    element.textContent = promptText;
    const restText = text.replace(promptText, '');
    
    let index = 0;
    const typeInterval = setInterval(() => {
        if (index < restText.length) {
            element.textContent += restText[index];
            index++;
        } else {
            clearInterval(typeInterval);
        }
    }, 20);
}

/***********************
 *  NEURAL PRICING     *
 ***********************/
function initializePricingNeuralToggle() {
    const toggle = document.getElementById('pricing-toggle');
    if (!toggle) return;

    const updateQuantumPricing = () => {
        const isAnnual = toggle.checked;
        
        document.querySelectorAll('.price-amount').forEach(priceEl => {
            const monthly = parseInt(priceEl.dataset.monthly, 10);
            const annual = parseInt(priceEl.dataset.annual, 10);
            
            if (!monthly || !annual) return;
            
            const periodEl = priceEl.nextElementSibling;
            
            // Add quantum transition effect
            priceEl.style.transform = 'scale(0.8)';
            priceEl.style.opacity = '0.5';
            
            setTimeout(() => {
                if (isAnnual) {
                    const monthlyEquivalent = Math.floor(annual / 12);
                    priceEl.textContent = `$${monthlyEquivalent}`;
                    if (periodEl && periodEl.classList.contains('price-period')) {
                        periodEl.textContent = '/month (billed annually)';
                    }
                } else {
                    priceEl.textContent = `$${monthly}`;
                    if (periodEl && periodEl.classList.contains('price-period')) {
                        periodEl.textContent = '/month';
                    }
                }
                
                // Restore with glow effect
                priceEl.style.transform = 'scale(1)';
                priceEl.style.opacity = '1';
                priceEl.style.textShadow = '0 0 20px currentColor';
                
                setTimeout(() => {
                    priceEl.style.textShadow = '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)';
                }, 150);
            }, 200);
        });
    };

    toggle.addEventListener('change', updateQuantumPricing);
    updateQuantumPricing();
}

/*******************
 *  FLOATING CTA   *
 *******************/
function initializeFloatingCTA() {
    const floatingCTA = document.getElementById('floatingCTA');
    const hero = document.querySelector('.hero');
    const finalSection = document.querySelector('.final-quantum');
    
    if (!floatingCTA || !hero || !finalSection) return;

    const checkNeuralCTA = () => {
        const scrollY = window.scrollY;
        const heroRect = hero.getBoundingClientRect();
        const finalRect = finalSection.getBoundingClientRect();
        
        const heroOutOfView = heroRect.bottom < 0;
        const nearFinalCTA = finalRect.top < 400;
        
        if (heroOutOfView && !nearFinalCTA) {
            floatingCTA.classList.add('visible');
        } else {
            floatingCTA.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', throttle(checkNeuralCTA, 50));
    checkNeuralCTA();
}

/***********************
 *  QUANTUM COUNTDOWN   *
 ***********************/
function initializeQuantumCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    
    if (!daysEl || !hoursEl || !minutesEl) return;

    // Set target date (13 days, 4 hours, 17 minutes from now)
    const targetDate = new Date(Date.now() + (13*24*60*60*1000) + (4*60*60*1000) + (17*60*1000));

    const updateCountdown = () => {
        const now = Date.now();
        const diff = targetDate - now;
        
        if (diff <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        // Quantum digit update with glow effect
        updateQuantumDigit(daysEl, days);
        updateQuantumDigit(hoursEl, hours);
        updateQuantumDigit(minutesEl, minutes);
    };

    function updateQuantumDigit(element, value) {
        const newValue = String(value).padStart(2, '0');
        const currentValue = element.textContent;
        
        if (newValue !== currentValue) {
            element.style.transform = 'scale(1.2)';
            element.style.textShadow = '0 0 30px currentColor';
            
            setTimeout(() => {
                element.textContent = newValue;
                element.style.transform = 'scale(1)';
                element.style.textShadow = '0 0 20px rgba(0, 255, 255, 0.5), 0 0 40px rgba(0, 255, 255, 0.3)';
            }, 150);
        } else {
            element.textContent = newValue;
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
}

/*********************
 * HOLOGRAPHIC CTAS  *
 *********************/
function initializeHolographicCTAs() {
    const ctaButtons = document.querySelectorAll('.btn--quantum, .btn--holographic, .hero__cta, .final-cta-btn, .neural-cta__btn, .nav__cta, .tier-btn');
    
    ctaButtons.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            
            // Quantum click effect
            btn.style.transform = 'scale(0.95)';
            btn.style.filter = 'brightness(1.5)';
            
            setTimeout(() => {
                btn.style.transform = '';
                btn.style.filter = '';
            }, 150);
            
            // Determine membership tier
            const tierCard = btn.closest('.tier-card');
            let selectedTier = 'Creator OS Pro+'; // default to featured tier
            
            if (tierCard) {
                const tierName = tierCard.querySelector('.tier-name');
                if (tierName) {
                    selectedTier = tierName.textContent.trim();
                }
            }
            
            showQuantumModal(selectedTier);
        });
    });
}

function showQuantumModal(tier) {
    const modal = document.createElement('div');
    modal.className = 'quantum-modal-overlay';
    
    modal.innerHTML = `
        <div class="quantum-modal">
            <div class="modal-neural-header">
                <div class="neural-icon">🔮</div>
                <div class="neural-grid"></div>
            </div>
            <h3 class="modal-title">NEURAL_LINK_ESTABLISHED</h3>
            <p class="modal-description">
                Initiating vault access for <span class="tier-highlight">${tier}</span><br>
                <span class="neural-prompt">Ready to unlock your creative superpowers?</span>
            </p>
            <div class="modal-actions">
                <button class="modal-btn modal-confirm">
                    <span class="btn-icon">⚡</span>
                    ESTABLISH_CONNECTION
                </button>
                <button class="modal-btn modal-decline">
                    <span class="btn-icon">✕</span>
                    ABORT_SEQUENCE
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);

    // Event handlers
    const closeModal = () => {
        modal.style.opacity = '0';
        setTimeout(() => modal.remove(), 300);
    };
    
    modal.querySelector('.modal-decline').addEventListener('click', closeModal);
    modal.addEventListener('click', e => {
        if (e.target === modal) closeModal();
    });
    
    modal.querySelector('.modal-confirm').addEventListener('click', () => {
        // Success state
        modal.querySelector('.quantum-modal').innerHTML = `
            <div class="modal-neural-header success">
                <div class="neural-icon success-pulse">✨</div>
                <div class="success-grid"></div>
            </div>
            <h3 class="modal-title success-title">CONNECTION_ESTABLISHED</h3>
            <p class="modal-description success-text">
                Welcome to the AI Creator Vault!<br>
                <span class="neural-prompt">Your creative arsenal is now loading...</span><br>
                <span class="vault-instructions">Check your email for vault access credentials</span>
            </p>
            <button class="modal-btn modal-complete">
                <span class="btn-icon">🚀</span>
                ENTER_THE_VAULT
            </button>
        `;
        
        modal.querySelector('.modal-complete').addEventListener('click', closeModal);
    });

    // Add quantum entrance effect
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
    });
}

// Enhanced modal styles
const quantumModalStyles = document.createElement('style');
quantumModalStyles.textContent = `
.quantum-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    backdrop-filter: blur(20px);
}

.quantum-modal {
    background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
    padding: 3rem;
    border-radius: 20px;
    border: 2px solid #00FFFF;
    box-shadow: 
        0 0 40px rgba(0, 255, 255, 0.5),
        0 0 80px rgba(255, 0, 128, 0.3),
        inset 0 0 40px rgba(0, 255, 255, 0.1);
    max-width: 500px;
    width: 90%;
    text-align: center;
    color: #E0E0FF;
    position: relative;
    overflow: hidden;
    animation: quantumEntry 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes quantumEntry {
    from {
        transform: scale(0.8) translateY(50px) rotateX(15deg);
        opacity: 0;
    }
    to {
        transform: scale(1) translateY(0) rotateX(0);
        opacity: 1;
    }
}

.modal-neural-header {
    position: relative;
    margin-bottom: 2rem;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.neural-icon {
    font-size: 4rem;
    animation: neuralFloat 3s ease-in-out infinite;
    z-index: 2;
    position: relative;
}

.success-pulse {
    animation: successPulse 2s ease-in-out infinite;
}

@keyframes neuralFloat {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
}

@keyframes successPulse {
    0%, 100% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.2) rotate(360deg); }
}

.neural-grid, .success-grid {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
        linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.2) 1px, transparent 1px);
    background-size: 10px 10px;
    animation: gridPulse 2s ease-in-out infinite;
    opacity: 0.3;
}

.success-grid {
    background-image: 
        linear-gradient(rgba(0, 255, 65, 0.3) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 65, 0.3) 1px, transparent 1px);
}

@keyframes gridPulse {
    0%, 100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.05); opacity: 0.6; }
}

.modal-title {
    margin: 0 0 1.5rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.4rem;
    font-weight: 700;
    color: #00FFFF;
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.6);
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.success-title {
    color: #00FF41;
    text-shadow: 0 0 20px rgba(0, 255, 65, 0.6);
}

.modal-description {
    margin-bottom: 2.5rem;
    line-height: 1.7;
    font-size: 1rem;
}

.tier-highlight {
    color: #FF0080;
    font-weight: 700;
    text-shadow: 0 0 10px rgba(255, 0, 128, 0.5);
}

.neural-prompt {
    color: #00FFFF;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.9rem;
    display: block;
    margin-top: 0.5rem;
}

.vault-instructions {
    color: #00FF41;
    font-size: 0.9rem;
    display: block;
    margin-top: 0.5rem;
}

.success-text {
    color: rgba(224, 224, 255, 0.9);
}

.modal-actions {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
}

.modal-btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: 8px;
    font-family: 'JetBrains Mono', monospace;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
}

.modal-confirm {
    background: linear-gradient(135deg, #00FFFF, #FF0080);
    color: #0a0a0a;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
}

.modal-confirm:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(0, 255, 255, 0.6), 0 0 60px rgba(255, 0, 128, 0.4);
}

.modal-decline {
    background: transparent;
    border: 2px solid #FF0080;
    color: #FF0080;
    box-shadow: 0 0 15px rgba(255, 0, 128, 0.3);
}

.modal-decline:hover {
    background: rgba(255, 0, 128, 0.1);
    transform: translateY(-2px);
}

.modal-complete {
    background: linear-gradient(135deg, #00FF41, #00FFFF);
    color: #0a0a0a;
    box-shadow: 0 0 20px rgba(0, 255, 65, 0.4);
    width: 100%;
}

.modal-complete:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 30px rgba(0, 255, 65, 0.6), 0 0 60px rgba(0, 255, 255, 0.4);
}

.btn-icon {
    font-size: 1.2em;
}
`;
document.head.appendChild(quantumModalStyles);

/*************************
 * SCROLL NEURAL EFFECTS *
 *************************/
function initializeScrollNeuralEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('neural-activated');
                
                // Stagger animations for child elements
                const animatableElements = entry.target.querySelectorAll(
                    '.problem-card, .holo-card, .glitch-testimonial, .tier-card'
                );
                
                animatableElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0) scale(1)';
                        
                        // Add neural glow effect
                        element.style.boxShadow = element.style.boxShadow || 
                            '0 0 20px rgba(0, 255, 255, 0.2)';
                    }, index * 150);
                });
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '50px'
    });
    
    // Observe sections for neural activation
    const sections = document.querySelectorAll(
        '.problem-section, .benefits-holo, .membership, .testimonials'
    );
    
    sections.forEach(section => {
        // Set initial states
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        
        // Hide child elements initially
        const elements = section.querySelectorAll(
            '.problem-card, .holo-card, .glitch-testimonial, .tier-card'
        );
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px) scale(0.9)';
            el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
        });
        
        observer.observe(section);
    });
}

// Neural activation styles
const neuralActivationStyles = document.createElement('style');
neuralActivationStyles.textContent = `
.neural-activated {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.holo-card:hover {
    animation: holoCardHover 0.3s ease-out;
}

@keyframes holoCardHover {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-5px) scale(1.02); }
    100% { transform: translateY(-10px) scale(1); }
}

.glitch-testimonial:hover {
    animation: glitchTestimonialHover 0.4s ease-out;
}

@keyframes glitchTestimonialHover {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-2px) translateX(-1px); }
    75% { transform: translateY(-6px) translateX(1px); }
}
`;
document.head.appendChild(neuralActivationStyles);

/*************************
 * ADDITIONAL EFFECTS    *
 *************************/
function initializeDataStreams() {
    // Enhanced data stream effects for hero section
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    setInterval(() => {
        if (Math.random() > 0.7) {
            createDataBurst();
        }
    }, 2000);
}

function createDataBurst() {
    const burst = document.createElement('div');
    burst.style.position = 'fixed';
    burst.style.width = '2px';
    burst.style.height = '20px';
    burst.style.background = 'linear-gradient(to bottom, #00FFFF, transparent)';
    burst.style.left = `${Math.random() * window.innerWidth}px`;
    burst.style.top = '-20px';
    burst.style.zIndex = '-1';
    burst.style.animation = 'dataBurst 1.5s linear forwards';
    burst.style.boxShadow = '0 0 10px #00FFFF';
    
    document.body.appendChild(burst);
    setTimeout(() => burst.remove(), 1500);
}

function initializePixelRain() {
    // Add occasional pixel rain intensity bursts
    setInterval(() => {
        if (Math.random() > 0.8) {
            for(let i = 0; i < 10; i++) {
                setTimeout(createNeuralPulse, i * 100);
            }
        }
    }, 5000);
}

// Additional animation keyframes
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
@keyframes dataBurst {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(100vh);
        opacity: 0;
    }
}

/* Enhanced glow effects */
.holo-card:hover .holo-icon {
    animation: iconGlow 0.6s ease-out;
}

@keyframes iconGlow {
    0%, 100% { filter: drop-shadow(0 0 10px currentColor); }
    50% { filter: drop-shadow(0 0 20px currentColor) brightness(1.3); }
}

/* Quantum button press effect */
.btn--quantum:active {
    animation: quantumPress 0.2s ease-out;
}

@keyframes quantumPress {
    0% { transform: scale(1); }
    50% { transform: scale(0.95) rotateZ(1deg); }
    100% { transform: scale(1); }
}
`;
document.head.appendChild(additionalStyles);