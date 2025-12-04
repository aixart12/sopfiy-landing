# SOPify.ai Landing Page

A modern, responsive landing page for SOPify.ai - AI-Powered SOP Creation & Management platform.

## Features

- 🎨 **Modern Design** - Clean, professional design inspired by Fireflies.ai
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Smooth Animations** - Engaging scroll animations and transitions
- 📝 **Contact Form** - Functional contact form with validation
- 🚀 **Fast Loading** - Optimized for performance
- ♿ **Accessible** - Built with accessibility in mind

## Structure

```
sopfiy-landing/
├── index.html      # Main HTML file
├── styles.css      # All styles and animations
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

1. **Open the landing page**
   - Simply open `index.html` in your web browser
   - Or serve it using a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server -p 8000
     ```

2. **View the page**
   - Navigate to `http://localhost:8000` in your browser

## Sections

### Hero Section
- Compelling headline with gradient text
- Call-to-action buttons
- Key statistics (80% time saved, 10x faster, 95% accuracy)
- Animated floating cards

### Features Section
- 8 key features displayed in a grid
- Hover effects on feature cards
- Icons and descriptions

### Benefits Section
- Time savings visualization
- Before/after comparison
- Key benefits list

### Contact Section
- Contact form with validation
- Success message on submission
- Responsive layout

### Footer
- Company information
- Quick links
- Legal links

## Customization

### Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --secondary: #8b5cf6;
    /* ... */
}
```

### Content
- Edit text content directly in `index.html`
- Update form fields in the contact form section
- Modify feature cards in the features section

### Form Submission
Currently, the form shows a success message. To connect it to a backend:

1. Update the form submission handler in `script.js`
2. Replace the simulated submission with an actual API call:
```javascript
const response = await fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized CSS with minimal dependencies
- Vanilla JavaScript (no frameworks)
- Fast loading times
- Smooth 60fps animations

## License

This landing page is created for SOPify.ai. All rights reserved.

