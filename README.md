# Full-Stack Developer Portfolio Template

A modern, minimalistic, and fully responsive portfolio template built with React, GSAP, and Anime.js. Features smooth animations, loading screens, and an animated navigation menu.

## Features

- **Smooth Animations**: Every element is animated using GSAP and Anime.js
- **Loading Screen**: Beautiful loading animation with progress indicator
- **Animated Navigation**: Modern menu bar with smooth transitions
- **Fully Responsive**: Optimized for all screen sizes
- **Minimalistic Design**: Clean and professional UI
- **Scroll Animations**: Elements animate as you scroll
- **Interactive Components**: Hover effects and smooth transitions
- **Customizable**: Easy to customize colors, content, and animations

## Sections

1. **Hero** - Eye-catching landing section with animated title and CTA buttons
2. **About** - Introduction with animated stats and service cards
3. **Skills** - Animated skill bars with technology cloud
4. **Projects** - Showcase your work with animated project cards
5. **Contact** - Contact form with animated inputs and info cards

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **GSAP** - Professional animation library
- **Anime.js** - Lightweight animation library
- **React Icons** - Icon library
- **CSS3** - Modern styling

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Update Personal Information

Edit the content in each component file:
- `src/components/Hero.jsx` - Update name, title, and social links
- `src/components/About.jsx` - Update bio and stats
- `src/components/Skills.jsx` - Update skills and technologies
- `src/components/Projects.jsx` - Add your projects
- `src/components/Contact.jsx` - Update contact information

### Change Colors

The main accent color is defined throughout the CSS files. To change it:
- Find `#00d4ff` (cyan) and replace with your preferred color
- Find `#0099ff` (blue) for gradient colors

### Adjust Animations

Animation timings and effects can be customized in each component:
- GSAP animations are in `useEffect` hooks
- Anime.js animations are also in `useEffect` hooks
- Adjust `duration`, `delay`, and `ease` properties

## Project Structure

```
src/
├── components/
│   ├── Loader.jsx          # Loading animation
│   ├── Navigation.jsx      # Animated menu bar
│   ├── Hero.jsx            # Landing section
│   ├── About.jsx           # About section
│   ├── Skills.jsx          # Skills section
│   ├── Projects.jsx        # Projects section
│   └── Contact.jsx         # Contact section
├── styles/
│   ├── Loader.css
│   ├── Navigation.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Projects.css
│   └── Contact.css
├── App.jsx                 # Main app component
├── App.css                 # Global styles
└── main.jsx                # Entry point
```

## Performance

- Lazy loading components
- Optimized animations
- Efficient CSS
- Production-ready build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your personal portfolio!

## Credits

Built with React, GSAP, and Anime.js
