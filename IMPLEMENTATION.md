# Astro Website Implementation - Ivan Schmid Business Solutions

This document outlines the conversion of the HTML website to an Astro project with full EmailJS integration.

## Project Structure

```
schmid-website/
├── src/
│   ├── components/
│   │   └── ContactForm.astro         # EmailJS integrated contact form
│   ├── layouts/
│   │   └── Layout.astro              # Main layout with SEO metadata
│   ├── pages/
│   │   └── index.astro               # Homepage with all sections
│   └── styles/
│       └── global.css                # Tailwind CSS configuration
├── public/
│   ├── heronew.webp                  # Hero section image
│   └── portrait.webp                 # About section portrait
├── astro.config.mjs                  # Astro configuration
├── tailwind.config.mjs               # Tailwind CSS configuration
├── postcss.config.mjs                # PostCSS configuration
└── package.json                      # Dependencies
```

## Key Features

### 1. Fully Responsive Design
- Mobile-first approach with breakpoints at 768px
- Hamburger menu for mobile navigation
- Smooth scrolling and progressive reveal animations

### 2. EmailJS Integration
- Contact form with EmailJS for email delivery
- Emails sent to: `office@ivanschmid.com`
- Subject line: "Website Anfrage von ivanschmid.com"
- Public key configured: `vV9h_VmtC-_Y0kWKl`
- Service ID: `service_ivanschmid`
- Template ID: `template_ivanschmid`

### 3. SEO Optimization
- Comprehensive meta tags for Google, OpenGraph, and geolocation
- Structured data (JSON-LD) for LocalBusiness
- Canonical URL: https://ivanschmid.com
- Language set to Swiss German (de-CH)

### 4. Custom Color Palette
- Primary: #094cb2 (Deep Blue)
- Tertiary Container: #bfab49 (Gold)
- Dark Blue: #0a3d94
- Full Material Design color system integrated

### 5. Typography & Fonts
- Noto Serif: Headlines and display text
- Inter: Body text
- Public Sans: Labels and UI text
- Material Symbols: Icons

## EmailJS Configuration

### Setting Up EmailJS

1. **Create EmailJS Account**: Visit https://www.emailjs.com

2. **Create Email Service**:
   - Service name: `service_ivanschmid`
   - Service ID: Provided by EmailJS

3. **Create Email Template**:
   - Template name: `template_ivanschmid`
   - Template ID: Provided by EmailJS
   - Template variables:
     ```
     {{to_email}} - Recipient email
     {{from_name}} - Sender name
     {{from_email}} - Sender email
     {{company}} - Company name
     {{message}} - Message content
     {{subject}} - Email subject
     ```

4. **Add Public Key**: The public key `vV9h_VmtC-_Y0kWKl` is already configured in `src/components/ContactForm.astro`

### Form Submission Flow

```
User submits form
    ↓
ContactForm.astro validation
    ↓
EmailJS initialization with public key
    ↓
Template parameters populated
    ↓
Email sent to office@ivanschmid.com
    ↓
Success/Error message displayed
    ↓
Form reset after 3 seconds
```

## Component Breakdown

### Layout.astro
- Master HTML structure
- Global meta tags and SEO
- Font imports (Google Fonts, Material Icons)
- Global styles and responsive media queries
- JavaScript for scroll progress and mobile menu

### ContactForm.astro
- Reactive form with validation
- EmailJS integration
- Field mapping to template variables
- User feedback (loading, success, error states)
- Auto-reset after submission

### index.astro
- Hero section with CTA buttons
- Services/expertise grid (6 services)
- About section with portrait
- Experience timeline (4 major companies)
- Payment partner section
- Contact form with 3-column info cards
- Footer with links and contact info
- Scroll progress indicator

## Tailwind CSS Configuration

All custom configurations are in `tailwind.config.mjs`:
- 30+ custom colors from Material Design
- Custom spacing units (section-gap: 120px, gutter: 24px, etc.)
- Custom border radii
- Custom font families with Noto Serif, Inter, Public Sans
- Custom font sizes for typography system

## Build & Deployment

### Development Server
```bash
npm run dev
```
Starts local Astro dev server at http://localhost:3000

### Production Build
```bash
npm run build
```
Generates optimized static site in `/dist` folder

### Preview Build
```bash
npm run preview
```
Previews production build locally

## Styling Approach

- **Tailwind CSS v4.3.2** for utility-first CSS
- **PostCSS** for processing CSS
- **Custom theme** extending Tailwind's base theme
- **Global styles** in `src/styles/global.css`
- **Component styles** using `<style is:global>` in Astro components

## Image Optimization

Images are referenced from the `/public` directory:
- `heronew.webp`: Hero section image (professional office scene)
- `portrait.webp`: About section portrait (professional headshot)

Both use WebP format for optimal performance.

## Performance Features

- Static site generation (no JavaScript runtime needed)
- Optimized CSS output
- Minimal JavaScript (only for interactivity)
- Lazy-loaded images
- Optimized fonts with WOFF2 format

## Mobile Responsiveness

Breakpoints handled via Tailwind:
- `sm`: 640px
- `md`: 768px (primary mobile/desktop breakpoint)
- `lg`: 1024px

Custom responsive overrides in global media queries for mobile optimization.

## Next Steps & Configuration

### To Deploy:
1. Build the project: `npm run build`
2. Deploy the `/dist` folder to your hosting provider
3. Ensure images are available in the web root

### To Customize:
1. Update content in `src/pages/index.astro`
2. Modify colors in `tailwind.config.mjs`
3. Adjust EmailJS settings in `src/components/ContactForm.astro`
4. Update meta tags in `src/layouts/Layout.astro`

### To Add More Pages:
1. Create new `.astro` files in `src/pages/`
2. Use the `Layout` component as wrapper
3. Astro will auto-generate routes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## License

Website designed for Ivan Schmid Business Solutions
© 2026 All rights reserved
