// ==========================================
// ELITE HOME SERVICES - CORE JS
// Shared functionality across all pages
// ==========================================

// ==========================================
// SVG ICONS LIBRARY
// ==========================================
const ICONS = {
    phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    
    clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    
    shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    
    star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    
    car: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
    
    sparkle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    
    starOutline: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    
    check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    
    checkSimple: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    
    lock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    
    wrench: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    
    arrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    
    fire: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    
    droplet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
    
    tool: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    
    dollar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    
    plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    
    email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    
    mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    
    users: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    
    home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    
    award: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    
    thumbsUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`,
    
    heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    
    zap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    
    settings: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    
    messageCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
};

// Helper function to get icon by name
function getIcon(name) {
    return ICONS[name] || ICONS.check;
}

// Generate star rating HTML
function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? ICONS.star : ICONS.starOutline;
    }
    return stars;
}

// ==========================================
// THEME APPLICATION
// ==========================================
function applyTheme() {
    if (typeof CONFIG === 'undefined') return;
    
    const root = document.documentElement;
    const theme = CONFIG.theme;
    
    root.style.setProperty('--primary', theme.primaryColor);
    root.style.setProperty('--primary-dark', theme.primaryDark);
    root.style.setProperty('--primary-light', theme.primaryLight || theme.primaryColor);
    root.style.setProperty('--accent', theme.accentColor);
    root.style.setProperty('--accent-dark', theme.accentDark);
    root.style.setProperty('--accent-light', theme.accentLight || theme.accentColor);
    root.style.setProperty('--gold', theme.gold);
    root.style.setProperty('--green', theme.green);
    
    // Gradients
    root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.primaryLight || theme.primaryColor} 100%)`);
    root.style.setProperty('--gradient-accent', `linear-gradient(135deg, ${theme.accentColor} 0%, ${theme.accentLight || theme.accentColor} 100%)`);
}

// ==========================================
// SEO APPLICATION
// ==========================================
function applySEO(pageKey) {
    if (typeof CONFIG === 'undefined') return;
    
    const seo = CONFIG.seo[pageKey] || CONFIG.seo.home;
    
    const titleEl = document.getElementById('page-title');
    const descEl = document.getElementById('meta-description');
    
    if (titleEl) titleEl.textContent = seo.title;
    if (descEl) descEl.setAttribute('content', seo.description);
}

// ==========================================
// IMAGE HELPER - Get image from CONFIG
// ==========================================
function getImage(key, serviceId = null) {
    if (typeof CONFIG === 'undefined') return '';
    
    // If serviceId provided, try to get service-specific image
    if (serviceId && CONFIG.images.services && CONFIG.images.services[serviceId]) {
        return CONFIG.images.services[serviceId];
    }
    
    // Try to get the specific image
    if (CONFIG.images[key]) {
        return CONFIG.images[key];
    }
    
    // Fall back to default
    return CONFIG.images.fallback || '';
}

// ==========================================
// RENDER GALLERY
// ==========================================
function renderGallery() {
    if (typeof CONFIG === 'undefined') return;
    if (!CONFIG.images.gallery || !CONFIG.images.gallery.enabled) return;
    
    const container = document.getElementById('gallery');
    if (!container) return;
    
    const items = CONFIG.images.gallery.items.map((img, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
            <div class="gallery-item-overlay">
                <span class="gallery-item-zoom">${ICONS.plus}</span>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">${CONFIG.images.gallery.title}</h2>
                <p class="section-subtitle">${CONFIG.images.gallery.subtitle}</p>
            </div>
            <div class="gallery-grid">${items}</div>
        </div>
        
        <!-- Lightbox -->
        <div class="lightbox" id="lightbox">
            <button class="lightbox-close">${ICONS.plus}</button>
            <button class="lightbox-prev">${ICONS.arrow}</button>
            <button class="lightbox-next">${ICONS.arrow}</button>
            <div class="lightbox-content">
                <img src="" alt="" id="lightbox-img">
            </div>
        </div>
    `;
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentIndex = 0;
    
    const openLightbox = (index) => {
        currentIndex = index;
        const img = CONFIG.images.gallery.items[index];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    const nextImage = () => {
        currentIndex = (currentIndex + 1) % CONFIG.images.gallery.items.length;
        const img = CONFIG.images.gallery.items[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    };
    
    const prevImage = () => {
        currentIndex = (currentIndex - 1 + CONFIG.images.gallery.items.length) % CONFIG.images.gallery.items.length;
        const img = CONFIG.images.gallery.items[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    };
    
    // Event listeners
    container.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index)));
    });
    
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-next').addEventListener('click', nextImage);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImage);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

// ==========================================
// RENDER TOP BAR - Contractor Style
// ==========================================
function renderTopBar() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('top-bar');
    if (!container) return;
    
    const logoIcon = getIcon(CONFIG.brand.logoIcon || 'wrench');
    
    container.innerHTML = `
        <div class="container">
            <div class="top-bar-inner">
                <a href="/index.html" class="top-bar-logo">
                    ${CONFIG.brand.logo 
                        ? `<img src="/${CONFIG.brand.logo}" alt="${CONFIG.brand.name}">` 
                        : `<div class="top-bar-logo-icon">${logoIcon}</div><span class="top-bar-logo-text">${CONFIG.brand.name}</span>`}
                </a>
                <div class="top-bar-right">
                    <div class="top-bar-info">
                        <div class="top-bar-info-item">
                            ${ICONS.clock}
                            <span>${CONFIG.brand.hours || 'Mon-Sat: 7AM-7PM'}</span>
                        </div>
                        <div class="top-bar-info-item">
                            ${ICONS.mapPin}
                            <span>${CONFIG.brand.address.split(',').slice(-2).join(',').trim()}</span>
                        </div>
                    </div>
                    <div class="top-bar-phone">
                        <a href="tel:${CONFIG.brand.phoneRaw}" class="top-bar-phone-link">
                            ${ICONS.phone}
                            <span class="top-bar-phone-number">${CONFIG.brand.phone}</span>
                        </a>
                    </div>
                    <a href="#quote" class="btn btn-accent top-bar-cta">${CONFIG.hero.ctaPrimary.text}</a>
                </div>
                <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    `;
}

// ==========================================
// RENDER PROMO BANNER
// ==========================================
function renderPromoBanner() {
    if (typeof CONFIG === 'undefined') return;
    if (!CONFIG.promoBanner || !CONFIG.promoBanner.enabled) return;
    
    const container = document.getElementById('promo-banner');
    if (!container) return;
    
    container.innerHTML = `
        <div class="container">
            <div class="promo-banner-inner">
                <span class="promo-banner-text">${CONFIG.promoBanner.text}</span>
                <a href="${CONFIG.promoBanner.linkHref}" class="promo-banner-link">${CONFIG.promoBanner.linkText}</a>
            </div>
        </div>
    `;
}

// ==========================================
// RENDER TRUST LOGOS BAR
// ==========================================
const TRUST_LOGO_ICONS = {
    Google: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/></svg>`,
    BBB: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18zM8 9v6h2.5c1.38 0 2.5-1.12 2.5-2.5V11.5c0-.83-.67-1.5-1.5-1.5H10V9H8zm2 2h.5c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5H10v-2zm4-2v6h2.5c1.38 0 2.5-1.12 2.5-2.5v-1c0-1.38-1.12-2.5-2.5-2.5H14zm2 2h.5c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5H16v-2z"/></svg>`,
    HomeAdvisor: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.84L18 11v7h-2v-6H8v6H6v-7l6-5.16z"/></svg>`,
    Angi: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
    Yelp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.73l-4.19 1.02a.75.75 0 0 0-.47 1.13l2.76 3.87a.75.75 0 0 0 1.24-.06l1.93-4.01a.75.75 0 0 0-.6-1.08l-.67.13zM16.64 7.73a.75.75 0 0 0-.96-.5l-4.28 1.4a.75.75 0 0 0-.4 1.09l2.4 3.63a.75.75 0 0 0 1.2.08l2.54-4.53a.75.75 0 0 0-.5-1.17zM11.5 3v6.5a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.88l1.5-6a.75.75 0 0 1 .73-.62h4.77a.75.75 0 0 1 .75.75v-.5zm-7.16 9.73l4.19 1.02a.75.75 0 0 1 .47 1.13l-2.76 3.87a.75.75 0 0 1-1.24-.06L3.07 14.7a.75.75 0 0 1 .6-1.08l.67.11zm3.02-5l4.28 1.4a.75.75 0 0 1 .4 1.09l-2.4 3.63a.75.75 0 0 1-1.2.08L5.9 9.4a.75.75 0 0 1 .5-1.17l.96-.5z"/></svg>`,
};

function renderTrustLogosBar() {
    if (typeof CONFIG === 'undefined') return;
    if (!CONFIG.trustLogos || !CONFIG.trustLogos.enabled) return;
    
    const container = document.getElementById('trust-logos-bar');
    if (!container) return;
    
    const logos = CONFIG.trustLogos.logos.map(logo => {
        const icon = TRUST_LOGO_ICONS[logo.name] || ICONS.star;
        const ratingHTML = logo.rating ? `<span class="trust-logo-rating">${logo.rating}</span>` : '';
        
        return `
            <div class="trust-logo-item">
                <div class="trust-logo-icon ${logo.name.toLowerCase()}">${icon}</div>
                <span class="trust-logo-name">${logo.name}</span>
                ${ratingHTML}
            </div>
        `;
    }).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="trust-logos-inner">
                <span class="trust-logos-title">${CONFIG.trustLogos.title}</span>
                ${logos}
            </div>
        </div>
    `;
}

// ==========================================
// RENDER GOOGLE RATING BADGE
// ==========================================
function renderGoogleRatingBadge() {
    if (typeof CONFIG === 'undefined') return;
    if (!CONFIG.reviews.google || !CONFIG.reviews.google.enabled) return '';
    
    const { rating, reviewCount } = CONFIG.reviews.google;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += ICONS.star;
        } else {
            starsHTML += ICONS.starOutline;
        }
    }
    
    return `
        <div class="google-rating-badge">
            <div class="google-rating-logo">
                ${TRUST_LOGO_ICONS.Google}
                <span>Google</span>
            </div>
            <div class="google-rating-score">
                <span class="google-rating-number">${rating}</span>
                <div>
                    <div class="google-rating-stars">${starsHTML}</div>
                    <span class="google-rating-count">${reviewCount} reviews</span>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// RENDER HEADER - Contractor Style Nav
// ==========================================
function renderHeader() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('header');
    if (!container) return;
    
    const navLinks = CONFIG.nav.map(item => {
        // Special handling for services dropdown - derived from CONFIG.services.items[]
        if (item.type === 'servicesDropdown') {
            const serviceLinks = CONFIG.services.items.map(s => {
                const slug = s.slug || s.id;
                return `<a href="/services/${slug}.html" class="nav-dropdown-link">${s.title}</a>`;
            }).join('');
            return `<div class="nav-dropdown">
                <span class="nav-link nav-dropdown-toggle">${item.label}</span>
                <div class="nav-dropdown-menu">
                    ${serviceLinks}
                </div>
            </div>`;
        }
        // Special handling for service areas dropdown - derived from CONFIG.serviceAreas[]
        if (item.type === 'serviceAreasDropdown') {
            const areaLinks = (CONFIG.serviceAreas || []).map(a => {
                const slug = a.slug || a.id;
                return `<a href="/service-areas/${slug}.html" class="nav-dropdown-link">${a.name}</a>`;
            }).join('');
            return `<div class="nav-dropdown">
                <span class="nav-link nav-dropdown-toggle">${item.label}</span>
                <div class="nav-dropdown-menu">
                    ${areaLinks}
                </div>
            </div>`;
        }
        // Standard dropdown with explicit children
        if (item.children) {
            return `<div class="nav-dropdown">
                <span class="nav-link nav-dropdown-toggle">${item.label}</span>
                <div class="nav-dropdown-menu">
                    ${item.children.map(c => `<a href="/${c.href}" class="nav-dropdown-link">${c.label}</a>`).join('')}
                </div>
            </div>`;
        }
        // Regular nav link
        const href = '/' + item.href;
        return `<a href="${href}" class="nav-link">${item.label}</a>`;
    }).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="header-inner">
                <nav class="nav-desktop">${navLinks}</nav>
            </div>
        </div>
    `;
    
    // Render mobile menu
    renderMobileMenu();
    
    // Setup mobile toggle (now in top-bar)
    const toggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Sticky header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            container.classList.add('scrolled');
        } else {
            container.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });
}

// ==========================================
// RENDER MOBILE MENU
// ==========================================
function renderMobileMenu() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('mobile-menu');
    if (!container) return;
    
    const chevronDown = `<svg class="mobile-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
    
    const mobileNavLinks = CONFIG.nav.map(item => {
        // Special handling for services dropdown - derived from CONFIG.services.items[]
        if (item.type === 'servicesDropdown') {
            const serviceLinks = CONFIG.services.items.map(s => {
                const slug = s.slug || s.id;
                return `<a href="/services/${slug}.html" class="mobile-nav-child">${s.title}</a>`;
            }).join('');
            return `<div class="mobile-nav-dropdown">
                <button class="mobile-nav-link mobile-nav-toggle" type="button">
                    ${item.label}
                    ${chevronDown}
                </button>
                <div class="mobile-nav-children">
                    ${serviceLinks}
                </div>
            </div>`;
        }
        // Special handling for service areas dropdown - derived from CONFIG.serviceAreas[]
        if (item.type === 'serviceAreasDropdown') {
            const areaLinks = (CONFIG.serviceAreas || []).map(a => {
                const slug = a.slug || a.id;
                return `<a href="/service-areas/${slug}.html" class="mobile-nav-child">${a.name}</a>`;
            }).join('');
            return `<div class="mobile-nav-dropdown">
                <button class="mobile-nav-link mobile-nav-toggle" type="button">
                    ${item.label}
                    ${chevronDown}
                </button>
                <div class="mobile-nav-children">
                    ${areaLinks}
                </div>
            </div>`;
        }
        // Standard dropdown with explicit children
        if (item.children) {
            return `<div class="mobile-nav-dropdown">
                <button class="mobile-nav-link mobile-nav-toggle" type="button">
                    ${item.label}
                    ${chevronDown}
                </button>
                <div class="mobile-nav-children">
                    ${item.children.map(c => `<a href="/${c.href}" class="mobile-nav-child">${c.label}</a>`).join('')}
                </div>
            </div>`;
        }
        // Regular nav link
        const href = '/' + item.href;
        return `<a href="${href}" class="mobile-nav-link">${item.label}</a>`;
    }).join('');
    
    container.innerHTML = `
        <nav>${mobileNavLinks}</nav>
        <div class="mobile-menu-cta">
            <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-primary">${ICONS.phone} ${CONFIG.ui.callNow} ${CONFIG.brand.phone}</a>
            <a href="${CONFIG.hero.ctaPrimary.href.startsWith('#') ? CONFIG.hero.ctaPrimary.href : '/' + CONFIG.hero.ctaPrimary.href}" class="btn btn-accent">${CONFIG.hero.ctaPrimary.text}</a>
        </div>
    `;
    
    // Setup dropdown toggles
    container.querySelectorAll('.mobile-nav-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const dropdown = this.closest('.mobile-nav-dropdown');
            dropdown.classList.toggle('open');
        });
    });
}

// ==========================================
// RENDER TRUST BADGES
// ==========================================
function renderTrustBadges() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('trust-badges');
    if (!container) return;
    
    const badges = CONFIG.trustBadges.map(b => `
        <div class="trust-badge">
            <div class="trust-badge-icon">${getIcon(b.icon)}</div>
            <span class="trust-badge-text">${b.text}</span>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="trust-badges-inner">${badges}</div>
        </div>
    `;
}

// ==========================================
// RENDER STATS
// ==========================================
function renderStats() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('stats');
    if (!container) return;
    
    const items = CONFIG.stats.map(s => `
        <div class="stat-item">
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.label}</div>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="stats-grid">${items}</div>
        </div>
    `;
}

// ==========================================
// RENDER CTA SECTION
// ==========================================
function renderCTA() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('cta');
    if (!container) return;
    
    const phoneHTML = CONFIG.cta.showPhone ? `
        <span class="cta-divider">or</span>
        <a href="tel:${CONFIG.brand.phoneRaw}" class="cta-phone">${ICONS.phone} ${CONFIG.brand.phone}</a>
    ` : '';
    
    container.innerHTML = `
        <div class="container">
            <h2 class="cta-title">${CONFIG.cta.title}</h2>
            <p class="cta-subtitle">${CONFIG.cta.subtitle}</p>
            <div class="cta-buttons">
                <a href="${CONFIG.cta.buttonLink}" class="btn btn-primary">${CONFIG.cta.buttonText}</a>
                ${phoneHTML}
            </div>
        </div>
    `;
}

// ==========================================
// RENDER FAQ
// ==========================================
function renderFAQ() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('faq');
    if (!container) return;
    
    const items = CONFIG.faq.items.map((f, i) => `
        <div class="faq-item" data-faq="${i}">
            <button class="faq-question">
                <span>${f.question}</span>
                <span class="faq-icon">${ICONS.plus}</span>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-inner">${f.answer}</div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">${CONFIG.faq.title}</h2>
                <p class="section-subtitle">${CONFIG.faq.subtitle}</p>
            </div>
            <div class="faq-list">${items}</div>
        </div>
    `;
    
    // FAQ accordion functionality
    container.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');
            
            // Close all
            container.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Open clicked if wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// ==========================================
// RENDER FOOTER
// ==========================================
function renderFooter() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('footer');
    if (!container) return;
    
    const quickLinks = CONFIG.footer.quickLinks.map(l => `
        <li><a href="/${l.href}">${l.label}</a></li>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="footer-brand-name">${CONFIG.brand.name}</div>
                    <p class="footer-brand-desc">${CONFIG.footer.description}</p>
                    <p class="footer-license">${CONFIG.brand.license}</p>
                </div>
                <div class="footer-nav">
                    <h4 class="footer-title">${CONFIG.footer.quickLinksTitle || CONFIG.ui.quickLinks}</h4>
                    <ul class="footer-links">${quickLinks}</ul>
                </div>
                <div class="footer-contact">
                    <h4 class="footer-title">${CONFIG.footer.contactTitle || CONFIG.ui.contactUs}</h4>
                    <div class="footer-contact-item">${ICONS.phone}<span>${CONFIG.brand.phone}</span></div>
                    <div class="footer-contact-item">${ICONS.email}<span>${CONFIG.brand.email}</span></div>
                    <div class="footer-contact-item">${ICONS.mapPin}<span>${CONFIG.brand.address}</span></div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <span>&copy; ${CONFIG.footer.copyrightYear} ${CONFIG.brand.name}. ${CONFIG.ui.allRightsReserved}</span>
                    <span class="footer-legal-links">
                        <a href="/privacy-policy.html">Privacy Policy</a>
                        <span class="footer-legal-divider">|</span>
                        <a href="/terms.html">Terms of Service</a>
                    </span>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// FORM SUBMISSION HANDLER
// ==========================================
function setupFormHandler(formId, webhookUrl, successMessage) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = CONFIG.ui.loading || 'Loading...';
        submitBtn.disabled = true;
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        try {
            await fetch(webhookUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(data).toString()
            });
            
            // Replace form with success message
            const formWrapper = form.closest('.quote-form-wrapper') || form.parentElement;
            const msg = successMessage || CONFIG.form.successMessage || "Thanks! We'll be in touch shortly.";
            formWrapper.innerHTML = `
                <div class="form-success">
                    <div class="form-success-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 class="form-success-title">${msg}</h3>
                    <p class="form-success-subtitle">${CONFIG.form.successSubtext || "We typically respond within 30 minutes during business hours."}</p>
                    <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-accent">${ICONS.phone} Call Now: ${CONFIG.brand.phone}</a>
                </div>
            `;
        } catch (err) {
            console.error('Form submission error:', err);
            alert(CONFIG.ui.error || 'Something went wrong. Please try again.');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// ==========================================
// SCROLL ANIMATIONS (Fade-in on scroll)
// ==========================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.services, .why-us, .stats, .reviews, .gallery, .cta, .faq, .about-story, .about-values, .about-team');
    
    if (!animatedElements.length) return;
    
    // Add initial hidden state
    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ==========================================
// INITIALIZE COMMON ELEMENTS
// ==========================================
function initCommon(pageKey = 'home') {
    applyTheme();
    applySEO(pageKey);
    renderPromoBanner();
    renderTopBar();
    renderHeader();
    renderTrustLogosBar();
    
    // Initialize scroll animations after a short delay to let content render
    setTimeout(initScrollAnimations, 100);
}

// ==========================================
// RENDER STICKY MOBILE CTA
// ==========================================
function renderStickyMobileCTA() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('sticky-mobile-cta');
    if (!container) return;
    
    container.innerHTML = `
        <div class="sticky-mobile-cta-inner">
            <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-call">
                ${ICONS.phone} ${CONFIG.ui?.callNowShort || 'Call Now'}
            </a>
            <a href="${CONFIG.hero.ctaPrimary.href}" class="btn btn-quote">
                ${CONFIG.ui?.freeQuoteShort || 'Free Quote'}
            </a>
        </div>
    `;
}

// Make functions globally available
if (typeof window !== 'undefined') {
    window.ICONS = ICONS;
    window.getIcon = getIcon;
    window.getImage = getImage;
    window.getStarRating = getStarRating;
    window.applyTheme = applyTheme;
    window.applySEO = applySEO;
    window.renderPromoBanner = renderPromoBanner;
    window.renderTopBar = renderTopBar;
    window.renderTrustLogosBar = renderTrustLogosBar;
    window.renderGoogleRatingBadge = renderGoogleRatingBadge;
    window.renderGallery = renderGallery;
    window.renderHeader = renderHeader;
    window.renderMobileMenu = renderMobileMenu;
    window.renderTrustBadges = renderTrustBadges;
    window.renderStats = renderStats;
    window.renderCTA = renderCTA;
    window.renderFAQ = renderFAQ;
    window.renderFooter = renderFooter;
    window.renderStickyMobileCTA = renderStickyMobileCTA;
    window.setupFormHandler = setupFormHandler;
    window.initCommon = initCommon;
}
