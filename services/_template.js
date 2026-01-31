// ==========================================
// SERVICE PAGE TEMPLATE ENGINE
// Canonical service rendering logic - single source of truth
// ==========================================

(function() {
    'use strict';
    
    // ==========================================
    // GET SERVICE FROM PATHNAME
    // ==========================================
    function getServiceFromPathname() {
        // Extract slug from pathname: /services/tv-mounting.html -> tv-mounting
        const pathname = window.location.pathname;
        const filename = pathname.split('/').pop(); // e.g., "tv-mounting.html"
        const slug = filename.replace('.html', '');  // e.g., "tv-mounting"
        
        if (slug && slug !== '_template' && CONFIG.services?.items) {
            // Find by slug (priority) or id (fallback)
            const found = CONFIG.services.items.find(s => 
                s.slug === slug || s.id === slug
            );
            if (found) return found;
        }
        
        // Fallback to first service
        return CONFIG.services?.items?.[0] || null;
    }
    
    // Current service (set on load)
    let currentService = null;
    
    // ==========================================
    // SEO - Set page title and meta
    // ==========================================
    function setServiceSEO(service) {
        if (!service) return;
        
        const location = CONFIG.brand.address || '';
        const cityState = location.split(',').slice(-2).join(',').trim() || location;
        
        // Title
        const title = service.metaTitle || 
            `${service.title} in ${cityState} | ${CONFIG.brand.name}`;
        document.getElementById('page-title').textContent = title;
        
        // Description
        const description = service.metaDescription || 
            `${service.fullDesc || service.shortDesc} ${CONFIG.seo?.services?.description || ''}`.trim();
        document.getElementById('meta-description').setAttribute('content', description);
    }
    
    // ==========================================
    // HERO - Service-specific
    // ==========================================
    function renderHero() {
        const container = document.getElementById('hero');
        if (!container || !currentService) return;
        
        const location = CONFIG.brand.address || '';
        const cityState = location.split(',').slice(-2).join(',').trim() || location;
        
        // Use service image or fallback to homepage hero
        const bgImage = currentService.image || CONFIG.hero?.backgroundImage || getImage('hero');
        
        // Trust badges for hero
        const heroBadges = CONFIG.trustBadges.slice(0, 4).map(b => `
            <div class="hero-trust-badge">
                <span class="hero-trust-icon">${getIcon(b.icon)}</span>
                <span class="hero-trust-text">${b.text}</span>
            </div>
        `).join('');
        
        // Trust strip under hero
        const trustStrip = CONFIG.hero.trustStrip && CONFIG.hero.trustStrip.enabled 
            ? `<div class="hero-trust-strip">
                <div class="container">
                    <div class="hero-trust-strip-inner">
                        ${CONFIG.hero.trustStrip.items.map(item => `<span class="hero-trust-strip-item">${item}</span>`).join('<span class="hero-trust-strip-divider">•</span>')}
                    </div>
                </div>
            </div>`
            : '';
        
        container.innerHTML = `
            <div class="hero-bg"><img src="${bgImage}" alt="${currentService.title}"></div>
            <div class="container">
                <div class="hero-inner">
                    <div class="hero-content">
                        <div class="hero-label">${CONFIG.hero.label || 'Professional Service'}</div>
                        <h1 class="hero-headline">
                            ${currentService.title}
                            <span class="hero-headline-accent">in ${cityState}</span>
                        </h1>
                        <p class="hero-subhead">${currentService.fullDesc || currentService.shortDesc}</p>
                        <div class="hero-trust-row">${heroBadges}</div>
                        <div class="hero-cta">
                            <a href="#quote" class="btn btn-accent btn-lg">${CONFIG.hero.ctaPrimary.text}</a>
                            <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-outline-white btn-lg">${getIcon('phone')} ${CONFIG.brand.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
            ${trustStrip}
        `;
    }
    
    // ==========================================
    // QUOTE FORM - With service pre-selected
    // ==========================================
    function renderQuoteForm() {
        const container = document.getElementById('quote-section');
        if (!container) return;
        
        const serviceOptions = CONFIG.form.serviceOptions.map(o => {
            const selected = currentService && (o.value === currentService.id || o.value === currentService.title) ? 'selected' : '';
            return `<option value="${o.value}" ${selected}>${o.label}</option>`;
        }).join('');
        
        const formFeatures = (CONFIG.form.features || [
            "Free Estimates",
            "Same-Day Service Available", 
            "No Obligation",
            "Licensed & Insured"
        ]).map(f => `
            <div class="quote-feature"><span class="quote-feature-icon">${getIcon('check')}</span> ${f}</div>
        `).join('');
        
        container.innerHTML = `
            <div class="container">
                <div class="quote-section-inner">
                    <div class="quote-section-content">
                        <div class="quote-section-badge">
                            ${getIcon('clock')}
                            <span>${CONFIG.form.responseBadge || 'We Respond Within 30 Minutes'}</span>
                        </div>
                        <h2 class="quote-section-title">${CONFIG.form.title}</h2>
                        <p class="quote-section-subtitle">${CONFIG.form.subtitle || 'Tell us about your project and we\'ll provide a free, no-obligation estimate.'}</p>
                        
                        <div class="quote-section-features">
                            ${formFeatures}
                        </div>
                        
                        <div class="quote-phone-cta">
                            <div class="quote-phone-label">${CONFIG.form.phoneCtaLabel || 'Prefer to talk? Call us now:'}</div>
                            <a href="tel:${CONFIG.brand.phoneRaw}" class="quote-phone-number">
                                ${getIcon('phone')}
                                <span>${CONFIG.brand.phone}</span>
                            </a>
                            <div class="quote-phone-hours">${CONFIG.brand.hours || 'Mon-Sat: 7AM - 7PM'}</div>
                        </div>
                    </div>
                    <div class="quote-form-wrapper" id="quote">
                        <div class="quote-form-header">
                            <div class="quote-form-title">${CONFIG.form.formTitle || 'Get Your Free Quote'}</div>
                            <div class="quote-form-subtitle">${CONFIG.form.formSubtitle || 'No spam, no hassle — just honest pricing'}</div>
                        </div>
                        <form class="quote-form" id="hero-form">
                            <!-- Universal tracking fields -->
                            <input type="hidden" name="pageType" value="service">
                            <input type="hidden" name="pageSlug" value="${currentService ? (currentService.slug || currentService.id) : ''}">
                            <input type="hidden" name="companySlug" value="${CONFIG.brand.companySlug}">
                            <input type="hidden" name="utm_source" value="${new URLSearchParams(window.location.search).get('utm_source') || ''}">
                            <input type="hidden" name="utm_medium" value="${new URLSearchParams(window.location.search).get('utm_medium') || ''}">
                            <input type="hidden" name="utm_campaign" value="${new URLSearchParams(window.location.search).get('utm_campaign') || ''}">
                            <input type="hidden" name="utm_content" value="${new URLSearchParams(window.location.search).get('utm_content') || ''}">
                            <input type="hidden" name="utm_term" value="${new URLSearchParams(window.location.search).get('utm_term') || ''}">
                            <div class="form-row">
                                ${CONFIG.form.fields.slice(0, 2).map(field => `
                                    <div class="form-group">
                                        <input type="${field.type}" name="${field.name}" class="form-input" placeholder="${field.placeholder}${field.required ? ' *' : ''}" ${field.required ? 'required' : ''}>
                                    </div>
                                `).join('')}
                            </div>
                            ${CONFIG.form.fields.length > 2 ? CONFIG.form.fields.slice(2).map(field => `
                                <div class="form-group">
                                    <input type="${field.type}" name="${field.name}" class="form-input" placeholder="${field.placeholder}${field.required ? ' *' : ''}" ${field.required ? 'required' : ''}>
                                </div>
                            `).join('') : ''}
                            ${CONFIG.form.showServiceDropdown !== false ? `
                            <div class="form-group">
                                <select name="service" class="form-select" required>
                                    <option value="">Select Service Needed *</option>
                                    ${serviceOptions}
                                </select>
                            </div>
                            ` : ''}
                            <div class="form-group">
                                <textarea name="message" class="form-textarea" rows="3" placeholder="${CONFIG.form.messagePlaceholder || 'Describe the work you need done...'}"></textarea>
                            </div>
                            <button type="submit" class="btn btn-accent btn-block btn-lg">${CONFIG.form.submitText}</button>
                            <div class="form-consent-text">By submitting this form, you agree to receive conversational text messages related to your inquiry. Message frequency may vary. Message and data rates may apply.</div>
                            <div class="form-trust-badge">
                                ${getIcon('shield')}
                                <span>${CONFIG.form.privacyText || 'Your information is secure and never shared'}</span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
        
        // Setup form handler
        setupFormHandler('hero-form', CONFIG.form.ghlWebhook, CONFIG.form.successMessage);
    }
    
    // ==========================================
    // WHAT'S INCLUDED - Uses services section style
    // ==========================================
    function renderWhatsIncluded() {
        const container = document.getElementById('services');
        if (!container || !currentService) return;
        
        // If service has no features, hide the section
        if (!currentService.features || currentService.features.length === 0) {
            container.style.display = 'none';
            return;
        }
        
        const features = currentService.features.map(f => `
            <div class="service-card">
                <div class="service-card-content">
                    <div class="service-card-icon">${getIcon('check-circle')}</div>
                    <h3 class="service-card-title">${f}</h3>
                </div>
            </div>
        `).join('');
        
        container.innerHTML = `
            <div class="container">
                <div class="services-header">
                    <div class="services-label">What's Included</div>
                    <h2 class="services-title">${currentService.title} Services</h2>
                    <p class="services-subtitle">Here's what you can expect when you book this service.</p>
                </div>
                <div class="services-grid">${features}</div>
            </div>
        `;
    }
    
    // ==========================================
    // PROCESS - Reuse from homepage (global)
    // ==========================================
    function renderProcess() {
        const container = document.getElementById('process');
        if (!container) return;
        
        if (!CONFIG.process?.steps) return;
        const steps = CONFIG.process.steps;
        
        const stepsHTML = steps.map((step, i) => `
            <div class="process-step">
                <div class="process-number">${step.number}</div>
                <h3 class="process-step-title">${step.title}</h3>
                <p class="process-step-desc">${step.desc}</p>
            </div>
        `).join('');
        
        container.innerHTML = `
            <div class="container">
                <div class="process-header">
                    <div class="process-label">${CONFIG.process?.label || 'How It Works'}</div>
                    <h2 class="process-title">${CONFIG.process?.title || 'Simple & Easy Process'}</h2>
                </div>
                <div class="process-steps">${stepsHTML}</div>
            </div>
        `;
    }
    
    // ==========================================
    // WHY US - Reuse from homepage (global)
    // ==========================================
    function renderWhyUs() {
        const container = document.getElementById('why-us');
        if (!container) return;
        
        const image = CONFIG.whyUs.image || getImage('whyUs');
        
        const items = CONFIG.whyUs.items.map(item => `
            <div class="why-us-item">
                <div class="why-us-icon">${getIcon(item.icon)}</div>
                <div class="why-us-content-inner">
                    <h4 class="why-us-title">${item.title}</h4>
                    <p class="why-us-desc">${item.description}</p>
                </div>
            </div>
        `).join('');
        
        container.innerHTML = `
            <div class="container">
                <div class="why-us-wrapper">
                    <div class="why-us-image">
                        <img src="${image}" alt="${CONFIG.whyUs.title}">
                    </div>
                    <div class="why-us-content">
                        <h2>${CONFIG.whyUs.title}</h2>
                        <p>${CONFIG.whyUs.subtitle}</p>
                        <div class="why-us-grid">${items}</div>
                    </div>
                </div>
            </div>
        `;
    }
    
    // ==========================================
    // REVIEWS - Reuse from homepage (global)
    // ==========================================
    function renderReviews() {
        const container = document.getElementById('reviews');
        if (!container) return;
        
        const googleBadge = renderGoogleRatingBadge();
        
        const cards = CONFIG.reviews.items.map(r => {
            const initials = r.author.split(' ').map(n => n[0]).join('');
            const stars = getStarRating(r.rating);
            
            return `
                <div class="review-card">
                    <div class="review-stars">${stars}</div>
                    <p class="review-text">"${r.text}"</p>
                    <div class="review-author">
                        ${r.avatar 
                            ? `<img src="${r.avatar}" alt="${r.author}" class="review-avatar">` 
                            : `<div class="review-avatar-fallback">${initials}</div>`}
                        <div>
                            <div class="review-name">${r.author}</div>
                            <div class="review-location">${r.location}</div>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        container.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2 class="section-title">${CONFIG.reviews.title}</h2>
                    <p class="section-subtitle">${CONFIG.reviews.subtitle}</p>
                </div>
                ${googleBadge}
                <div class="reviews-grid">${cards}</div>
            </div>
        `;
    }
    
    // ==========================================
    // STICKY MOBILE CTA
    // ==========================================
    function renderStickyMobileCTA() {
        const container = document.getElementById('sticky-mobile-cta');
        if (!container) return;
        
        container.innerHTML = `
            <div class="sticky-mobile-cta-inner">
                <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-call">
                    ${ICONS.phone} ${CONFIG.ui?.callNowShort || 'Call Now'}
                </a>
                <a href="#quote" class="btn btn-quote">
                    ${CONFIG.ui?.freeQuoteShort || 'Free Quote'}
                </a>
            </div>
        `;
    }
    
    // ==========================================
    // INIT - Service page initialization
    // ==========================================
    function initServicePage() {
        // Get current service from pathname
        currentService = getServiceFromPathname();
        
        // Set SEO
        setServiceSEO(currentService);
        
        // Init common (promo banner, top bar, header, mobile menu)
        initCommon('service');
        
        // Render page sections
        renderHero();
        renderQuoteForm();
        renderWhatsIncluded();
        renderProcess();
        renderWhyUs();
        renderReviews();
        renderCTA();
        renderFAQ();
        renderFooter();
        renderStickyMobileCTA();
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initServicePage);
    } else {
        initServicePage();
    }
})();
