# Quick Start Guide

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

   Open your browser to `http://localhost:5173`

3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization Checklist

### 1. Update Hero Section (src/components/Hero.jsx)
- [ ] Change name/title in the hero section
- [ ] Update social media links (GitHub, LinkedIn, Email)
- [ ] Customize the description text

### 2. Update About Section (src/components/About.jsx)
- [ ] Write your bio/introduction
- [ ] Update statistics (projects, years, clients, etc.)
- [ ] Customize service cards

### 3. Update Skills Section (src/components/Skills.jsx)
- [ ] Add/remove skills
- [ ] Adjust skill levels (percentage)
- [ ] Update technology tags in the cloud

### 4. Update Projects Section (src/components/Projects.jsx)
- [ ] Add your real projects
- [ ] Update project descriptions
- [ ] Add project links (GitHub, live demo)
- [ ] Customize project tags
- [ ] Replace gradient backgrounds with real images

### 5. Update Contact Section (src/components/Contact.jsx)
- [ ] Update email address
- [ ] Update phone number
- [ ] Update location
- [ ] Configure form submission (currently logs to console)
- [ ] Update footer text with your name

### 6. Customize Colors
Find and replace these colors throughout the CSS files:
- Primary: `#00d4ff` (cyan)
- Secondary: `#0099ff` (blue)
- Background: `#0a0a0a` / `#1a1a1a` (dark)

### 7. Optimize Performance
- [ ] Replace gradient backgrounds in Projects with actual images
- [ ] Add real project screenshots
- [ ] Optimize images for web
- [ ] Test on different devices

## File Structure

```
src/
├── components/
│   ├── Loader.jsx          # Initial loading animation (2.5s)
│   ├── Navigation.jsx      # Fixed navbar with mobile menu
│   ├── Hero.jsx            # Landing section with CTA
│   ├── About.jsx           # Bio, stats, service cards
│   ├── Skills.jsx          # Skill bars and tech cloud
│   ├── Projects.jsx        # Project showcase grid
│   └── Contact.jsx         # Contact form + footer
├── styles/
│   └── [component].css     # Component-specific styles
├── App.jsx                 # Main app with loading logic
└── App.css                 # Global styles
```

## Animation Details

### GSAP Animations:
- Scroll-triggered animations
- Smooth element transitions
- Timeline-based sequences

### Anime.js Animations:
- Loading bar animation
- Counter animations
- Floating elements

### Scroll Behavior:
- Smooth scroll navigation
- Scroll-to-section on menu click
- Fixed navbar on scroll

## Tips

1. **Testing Animations**: Reload the page to see the loader animation again
2. **Mobile Menu**: Click hamburger icon on mobile to test menu
3. **Responsive**: Test on different screen sizes (desktop, tablet, mobile)
4. **Form**: Currently logs to console - integrate with your backend/service

## Next Steps

1. Deploy to Vercel, Netlify, or GitHub Pages
2. Add a custom domain
3. Integrate with a CMS for easy content updates
4. Add analytics (Google Analytics, etc.)
5. Optimize SEO (meta tags, descriptions)

## Need Help?

Check the main README.md for detailed information about:
- Technologies used
- Project structure
- Customization options
- Browser support
