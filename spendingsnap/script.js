/* ==========================================================================
   PRODUCTION FRONTEND COMPONENT ENGINE (script.js)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initNavigationMenu();
    initMaterialRipples();
    initScrollAnimations();
    initFaqAccordions();
    highlightActivePage();
});

/**
 * Responsive Mobile Menu System Matrix
 */
function initNavigationMenu() {
    const hamburger = document.getElementById('hamburgerMenu');
    const navMenu = document.getElementById('navMenu');
    
    if (!hamburger || !navMenu) return;

    hamburger.addEventListener('click', (e) => {
        const isOpen = navMenu.classList.toggle('open');
        hamburger.setAttribute('aria-expanded', isOpen);
        
        // Dynamic Icon Mutation
        if (isOpen) {
            hamburger.innerHTML = `<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;
        } else {
            hamburger.innerHTML = `<svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
        }
        e.stopPropagation();
    });

    // Close on external body footprint execution click
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            navMenu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.innerHTML = `<svg viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>`;
        }
    });
}

/**
 * Material Design Fluid Ripple Calculation Model
 */
function initMaterialRipples() {
    const interactiveElements = document.querySelectorAll('.btn, .accordion-trigger');
    
    interactiveElements.forEach(element => {
        element.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

/**
 * Section Frame Intersection Scroll Reveal Engine
 */
function initScrollAnimations() {
    const executionElements = document.querySelectorAll('.reveal');
    
    const observerConfiguration = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const intersectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Optimize execution speed
            }
        });
    }, observerConfiguration);

    executionElements.forEach(element => intersectionObserver.observe(element));
}

/**
 * Fluid Heights FAQ System Matrix Accordion Setup
 */
function initFaqAccordions() {
    const interactionTriggers = document.querySelectorAll('.accordion-trigger');
    
    interactionTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const structureParent = trigger.parentElement;
            const stateIsCurrentlyOpen = structureParent.classList.contains('open');
            
            // Standardize layout tracking - Close sibling containers
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('open');
            });

            if (!stateIsCurrentlyOpen) {
                structureParent.classList.add('open');
            }
        });
    });
}

/**
 * Highlight Page Locations inside Nav Bar
 */
function highlightActivePage() {
    const trackingPath = window.location.pathname;
    const documentName = trackingPath.substring(trackingPath.lastIndexOf('/') + 1);
    const connectionLinks = document.querySelectorAll('.nav-link');
    
    connectionLinks.forEach(link => {
        const TargetAttribute = link.getAttribute('href');
        if (documentName === TargetAttribute || (documentName === '' && TargetAttribute === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}
