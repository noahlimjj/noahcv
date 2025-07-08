# Noah Lim Tian Run - Personal CV Website

A sleek, professional personal website showcasing Noah's credentials as a medical student and national jiu-jitsu athlete.

## 🚀 Features

- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean, professional design with dark blue/black fonts on light background
- **Smooth Animations**: Intersection Observer animations for enhanced user experience
- **Interactive Navigation**: Fixed navbar with active section highlighting
- **CV Download**: One-click download functionality for resume
- **Social Links**: Integrated social media links (LinkedIn, YouTube, GitHub)
- **Scroll to Top**: Convenient scroll-to-top button
- **Mobile Menu**: Hamburger menu for mobile devices

## 📁 File Structure

```
Noah CV website/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── data.js             # Content data (for easy updates)
└── README.md           # This file
```

## 🛠️ Setup Instructions

1. **Clone or Download**: Download all files to your local machine
2. **Open in Browser**: Simply open `index.html` in any modern web browser
3. **Local Server** (Optional): For best experience, serve files through a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```
4. **Access**: Navigate to `http://localhost:8000` in your browser

## 🎨 Customization

### Updating Content

The website content is structured in the HTML file. To update:

1. **Personal Information**: Edit the hero section in `index.html`
2. **Sections**: Modify content within each `<section>` tag
3. **Social Links**: Update the `href` attributes in the footer social links

### Styling Changes

- **Colors**: Modify CSS variables in `styles.css`
- **Fonts**: Change the Google Fonts import in `index.html`
- **Layout**: Adjust grid and flexbox properties in `styles.css`

### Adding New Sections

1. Add a new `<section>` in `index.html`
2. Add corresponding navigation link
3. Style the section in `styles.css`
4. Add animation logic in `script.js` if needed

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Technical Details

### Technologies Used
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

### Performance Features
- Lazy loading animations
- Optimized CSS with efficient selectors
- Minimal JavaScript footprint
- Compressed external resources

## 📝 Content Sections

1. **Hero Section**: Name, tagline, contact information
2. **Professional Summary**: Career overview
3. **Education**: Academic background
4. **Work Experience**: Professional history
5. **Awards & Achievements**: Recognition and accomplishments
6. **Skills & Certifications**: Technical and professional skills
7. **Research**: Academic and research projects
8. **Social Links**: Professional networking

## 🚀 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings > Pages
4. Select source branch (usually `main`)
5. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Your site will be deployed instantly
3. Get a custom domain (optional)

### Vercel
1. Connect your GitHub repository
2. Vercel will auto-deploy on changes
3. Get a custom domain (optional)

## 🔄 Future Enhancements

### Easy to Add Features
- **Blog Section**: Add a blog for sharing insights
- **Portfolio Gallery**: Showcase projects and research
- **Contact Form**: Interactive contact functionality
- **Dark Mode Toggle**: Alternative color scheme
- **Multi-language Support**: Internationalization
- **Analytics**: Google Analytics integration
- **SEO Optimization**: Meta tags and structured data

### Content Management
- **JSON Data**: Move content to `data.js` for easier updates
- **CMS Integration**: Connect to a headless CMS
- **Dynamic Content**: Server-side rendering for dynamic updates

## 📞 Support

For questions or customization requests:
- Email: noahlimjj@gmail.com
- LinkedIn: [Add your LinkedIn URL]
- GitHub: [Add your GitHub URL]

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ for showcasing professional achievements** # noahcv
