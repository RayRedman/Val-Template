#!/usr/bin/env node
/**
 * Generate Service & Service Area Pages
 * 
 * Reads CONFIG.js and generates individual HTML files for:
 * - Each service in /services/ directory
 * - Each service area in /service-areas/ directory
 * 
 * Usage: node generate-services.js
 */

const fs = require('fs');
const path = require('path');

// Resolve paths relative to project root (script is now in root)
const projectRoot = __dirname;
const configPath = path.join(projectRoot, 'CONFIG.js');
const servicesDir = path.join(projectRoot, 'services');
const serviceAreasDir = path.join(projectRoot, 'service-areas');

// Read and evaluate CONFIG.js
const configContent = fs.readFileSync(configPath, 'utf8');

// Extract CONFIG object - CONFIG.js exports via window.CONFIG or module.exports
// We need to create a mock environment for it
const vm = require('vm');
const sandbox = { 
    CONFIG: null,
    window: {},
    module: { exports: {} }
};
vm.createContext(sandbox);
vm.runInContext(configContent, sandbox);

// Get CONFIG from whichever export method was used
const CONFIG = sandbox.CONFIG || sandbox.window.CONFIG || sandbox.module.exports;

if (!CONFIG || !CONFIG.services || !CONFIG.services.items) {
    console.error('Error: CONFIG.services.items not found in CONFIG.js');
    process.exit(1);
}

// Ensure directories exist
if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
}
if (!fs.existsSync(serviceAreasDir)) {
    fs.mkdirSync(serviceAreasDir, { recursive: true });
}

// ==========================================
// SERVICE PAGE TEMPLATE
// ==========================================
const servicePageTemplate = `<!-- GENERATED FILE. DO NOT EDIT. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="page-title">Service | Home Services</title>
    <meta name="description" id="meta-description" content="">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap" rel="stylesheet">
    
    <!-- Shared Styles -->
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <!-- PROMO BANNER -->
    <div class="promo-banner" id="promo-banner"></div>
    <!-- TOP BAR -->
    <div class="top-bar" id="top-bar"></div>
    <!-- HEADER -->
    <header class="header" id="header"></header>
    <!-- MOBILE MENU -->
    <div class="mobile-menu" id="mobile-menu"></div>
    <!-- HERO -->
    <section class="hero" id="hero"></section>
    <!-- QUOTE FORM SECTION -->
    <section class="quote-section" id="quote-section"></section>
    <!-- WHAT'S INCLUDED -->
    <section class="services" id="services"></section>
    <!-- PROCESS -->
    <section class="process" id="process"></section>
    <!-- WHY US -->
    <section class="why-us" id="why-us"></section>
    <!-- REVIEWS -->
    <section class="reviews" id="reviews"></section>
    <!-- CTA -->
    <section class="cta" id="cta"></section>
    <!-- FAQ -->
    <section class="faq" id="faq"></section>
    <!-- FOOTER -->
    <footer class="footer" id="footer"></footer>
    <!-- STICKY MOBILE CTA -->
    <div class="sticky-mobile-cta" id="sticky-mobile-cta"></div>

    <!-- Core Scripts -->
    <script src="/CONFIG.js"></script>
    <script src="/core.js"></script>
    <!-- Service Template Engine (single source of truth) -->
    <script src="/services/_template.js"></script>
</body>
</html>`;

// ==========================================
// SERVICE AREA PAGE TEMPLATE
// ==========================================
const serviceAreaPageTemplate = `<!-- GENERATED FILE. DO NOT EDIT. -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="page-title">Service Area | Home Services</title>
    <meta name="description" id="meta-description" content="">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap" rel="stylesheet">
    
    <!-- Shared Styles -->
    <link rel="stylesheet" href="/styles.css">
</head>
<body>
    <!-- PROMO BANNER -->
    <div class="promo-banner" id="promo-banner"></div>
    <!-- TOP BAR -->
    <div class="top-bar" id="top-bar"></div>
    <!-- HEADER -->
    <header class="header" id="header"></header>
    <!-- MOBILE MENU -->
    <div class="mobile-menu" id="mobile-menu"></div>
    <!-- HERO -->
    <section class="hero" id="hero"></section>
    <!-- QUOTE FORM SECTION -->
    <section class="quote-section" id="quote-section"></section>
    <!-- AREA FEATURES -->
    <section class="services" id="services"></section>
    <!-- PROCESS -->
    <section class="process" id="process"></section>
    <!-- WHY US -->
    <section class="why-us" id="why-us"></section>
    <!-- REVIEWS -->
    <section class="reviews" id="reviews"></section>
    <!-- CTA -->
    <section class="cta" id="cta"></section>
    <!-- FAQ -->
    <section class="faq" id="faq"></section>
    <!-- FOOTER -->
    <footer class="footer" id="footer"></footer>
    <!-- STICKY MOBILE CTA -->
    <div class="sticky-mobile-cta" id="sticky-mobile-cta"></div>

    <!-- Core Scripts -->
    <script src="/CONFIG.js"></script>
    <script src="/core.js"></script>
    <!-- Service Area Template Engine (single source of truth) -->
    <script src="/service-areas/_template.js"></script>
</body>
</html>`;

// ==========================================
// GENERATE SERVICE PAGES
// ==========================================
const services = CONFIG.services.items;
let serviceCount = 0;

services.forEach(service => {
    const serviceSlug = service.slug || service.id;
    const filename = `${serviceSlug}.html`;
    const filepath = path.join(servicesDir, filename);
    
    fs.writeFileSync(filepath, servicePageTemplate, 'utf8');
    console.log(`Generated: /services/${filename}`);
    serviceCount++;
});

console.log(`✓ Generated ${serviceCount} service pages in /services/\n`);

// ==========================================
// GENERATE SERVICE AREA PAGES
// ==========================================
if (CONFIG.serviceAreas && CONFIG.serviceAreas.length > 0) {
    let areaCount = 0;
    
    CONFIG.serviceAreas.forEach(area => {
        const areaSlug = area.slug || area.id;
        const filename = `${areaSlug}.html`;
        const filepath = path.join(serviceAreasDir, filename);
        
        fs.writeFileSync(filepath, serviceAreaPageTemplate, 'utf8');
        console.log(`Generated: /service-areas/${filename}`);
        areaCount++;
    });
    
    console.log(`✓ Generated ${areaCount} service area pages in /service-areas/\n`);
} else {
    console.log('⚠ No service areas found in CONFIG.serviceAreas\n');
}
