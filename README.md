# Hearth Routes Website

> *Every route is a memory. Every memory is a legacy.*

A beautiful, responsive website for the **Hearth Routes** travel planning mobile application, featuring an arctic tern mascot and gradient-inspired design.

## ✨ Features

### 🏠 Homepage
- Stunning hero section with brand messaging
- Interactive phone mockup showcasing the app
- Feature highlights (Organize, Log, Share)
- Arctic Tern story section explaining the mascot symbolism
- Multiple call-to-action buttons for app downloads

### 📱 App Store Integration
- Prominent App Store and Google Play download buttons
- Mobile-optimized download experience
- Multiple CTA placements for maximum conversion

### 📋 Essential Pages
- **Privacy Policy** - Comprehensive data protection information
- **Terms of Service** - Complete user agreement and subscription terms
- **Support Page** - FAQ section and contact form

### 🎨 Design Features
- App-inspired gradient backgrounds (blue, pink, green, orange)
- **Hearth Routes** brand name styled in dark red throughout
- Arctic tern mascot integration
- Mobile-first responsive design
- Clean, modern typography

## 🚀 Technology Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **React Router** for client-side routing
- **CSS3** with custom gradients and animations
- **ESLint** for code quality

## 🛠️ Development 

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hearth-routes-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to see the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📂 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer with download links
│   └── Layout.tsx      # Main layout wrapper
├── pages/              # Route pages
│   ├── Home.tsx        # Homepage
│   ├── PrivacyPolicy.tsx
│   ├── TermsOfService.tsx
│   └── Support.tsx
├── App.tsx             # Main app with routing
└── main.tsx           # Entry point
```

## 🎯 Key Brand Elements

### Brand Colors
- **Primary Gradient**: `#667eea` → `#764ba2`
- **Brand Name Color**: `#8B0000` (Dark Red)
- **Background Gradients**: Multiple app-inspired combinations

### Brand Messaging
- Primary: *"Every route is a memory. Every memory is a legacy."*
- Secondary: *"With Hearth Routes, save your memories, and share them with your loved ones. ❤️"*

### Arctic Tern Symbolism
The Arctic Tern makes the longest migration of any bird (Arctic to Antarctic), perfectly symbolizing epic journeys and wanderlust - making it the ideal mascot for a travel app.

## 🔧 SEO & Performance

### SEO Features
- Comprehensive meta tags for social sharing
- JSON-LD structured data for search engines
- Canonical URLs and proper heading hierarchy
- Mobile-optimized viewport settings

### Performance Features
- Vite for fast builds and hot module replacement
- Preconnect hints for external resources
- Optimized images and lazy loading ready
- Progressive Web App ready structure

## 📱 Mobile Optimization

- Touch-friendly button sizes
- Responsive breakpoints for all screen sizes
- Mobile-first CSS approach
- Swipe-friendly navigation

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist/` folder will contain the production-ready files.

### Deployment Platforms
- **Netlify**: Drop the `dist` folder or connect your Git repository
- **Vercel**: Connect your Git repository for automatic deployments
- **GitHub Pages**: Use the built files from the `dist` folder

### Environment Variables
- `VITE_GA_TRACKING_ID` - Google Analytics tracking ID (optional)

## 📊 Analytics & Tracking

The website is prepared for Google Analytics integration. To enable:

1. Get your Google Analytics tracking ID
2. Uncomment the Google Analytics script in `index.html`
3. Replace `GA_TRACKING_ID` with your actual tracking ID

## 🔒 Privacy & Legal

- GDPR-compliant privacy policy
- Comprehensive terms of service
- User data protection guidelines
- Cookie policy information

## 🎨 Customization

### Brand Colors
Update the CSS custom properties in `src/App.css` to match your brand:

```css
:root {
  --primary-color: #667eea;
  --brand-red: #8B0000;
  --gradient-primary: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Content Updates
- Update brand messaging in `src/pages/Home.tsx`
- Modify legal content in privacy and terms pages
- Customize FAQ content in `src/pages/Support.tsx`

## 📞 Support

For questions about this website or the Hearth Routes app:
- Visit the Support page at `/support`
- Email: support@hearthroutes.com

---

**Hearth Routes** - *Let your personal arctic tern guide you to unforgettable adventures* 🐦‍⬛✈️