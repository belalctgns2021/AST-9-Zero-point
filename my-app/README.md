# Zero Point Restaurant - Premium Fine Dining Experience

A sophisticated fine dining restaurant web application built with Next.js, featuring a complete e-commerce experience with authentication, cart management, and secure checkout.

## 🌟 Features

### Core Pages
- **🏠 Home Page**: Elegant hero section, restaurant story, featured menu items, services showcase, and customer testimonials
- **🍽️ Menu Page**: Comprehensive menu with categorized dishes (Appetizers, Main Courses, Desserts)
- **🛒 Shopping Cart**: Interactive cart with quantity management and price calculations
- **💳 Secure Checkout**: Multi-step checkout process with delivery options and payment methods
- **🔐 Authentication**: Firebase-powered login system with Google OAuth integration

### User Experience
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🎨 Premium Design**: Dark theme with gold accents (#D4AF37), elegant typography, and smooth animations
- **⚡ Performance Optimized**: Built with Next.js 16.1.3 for optimal loading speeds
- **🔍 Interactive Elements**: Hover effects, transitions, and micro-interactions throughout

### E-commerce Features
- **🛍️ Cart Management**: Add, remove, and modify quantities
- **🚚 Delivery Options**: Home delivery and pickup options
- **💰 Price Calculation**: Automatic subtotal, tax, and delivery fee calculations
- **🔒 Secure Payments**: Multiple payment methods with SSL encryption
- **📋 Order Tracking**: Multi-step progress indicator

## 🛠️ Tech Stack

- **Next.js 16.1.3** - React framework with App Router
- **React 19.2.3** - UI library with latest features
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Firebase 12.8.0** - Authentication and backend services
- **Material Symbols** - Google's icon system
- **Custom Fonts** - Playfair Display and Inter for premium typography

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/belalctgns2021/AST-9-Zero-point.git
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Firebase** (Optional - for authentication)
   - Create a Firebase project
   - Add your Firebase config to `app/firebase/firebase.js`

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
my-app/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx     # Shared navigation component
│   │   └── Footer.tsx         # Shared footer component
│   ├── cart/
│   │   └── page.tsx          # Shopping cart page
│   ├── checkout/
│   │   └── page.tsx          # Secure checkout process
│   ├── login/
│   │   └── page.tsx          # Authentication page
│   ├── menu/
│   │   ├── page.tsx          # Menu listing page
│   │   └── [slug]/
│   │       └── page.tsx      # Individual menu item pages
│   ├── firebase/
│   │   └── firebase.js       # Firebase configuration
│   ├── globals.css           # Global styles and design system
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page
├── public/                   # Static assets (images, icons)
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 🎨 Design System

### Color Palette
- **Primary Gold**: `#D4AF37` - Brand accent and highlights
- **Deep Navy**: `#0A0F1E` - Primary background
- **Card Surface**: `#1D2433` - Component backgrounds
- **Text Primary**: `#FDFCF0` - Main text color
- **Text Secondary**: `rgba(253, 252, 240, 0.7)` - Muted text

### Typography
- **Display Font**: Playfair Display - For headings and brand elements
- **Body Font**: Inter - For readable body text
- **Tracking**: Custom letter spacing for premium feel

## 📱 Pages Overview

### Home Page (`/`)
- **Hero Section**: Full-screen banner with call-to-action
- **About Section**: Restaurant story with imagery
- **Featured Menu**: Curated dish selection
- **Services**: Fine dining, events, cocktail bar, delivery
- **Gallery**: Visual showcase of dishes
- **Testimonials**: Customer reviews
- **Reservations**: Contact form and location details

### Menu Page (`/menu`)
- **Category Navigation**: Appetizers, Main Courses, Desserts
- **Dish Cards**: High-quality images with descriptions and pricing
- **Interactive Elements**: Hover effects and smooth transitions
- **Responsive Grid**: Adapts to different screen sizes

### Cart Page (`/cart`)
- **Item Management**: Quantity controls and removal options
- **Price Breakdown**: Subtotal, taxes, and delivery fees
- **Progress Indicator**: Multi-step checkout process
- **Promo Codes**: Discount code application

### Checkout Page (`/checkout`)
- **Delivery Options**: Home delivery vs. pickup
- **Contact Form**: Customer information collection
- **Payment Methods**: Credit card, PayPal, Apple Pay, Google Pay
- **Security Features**: SSL encryption indicators
- **Order Summary**: Final review before purchase

### Login Page (`/login`)
- **Email/Password**: Traditional authentication
- **Google OAuth**: One-click social login
- **Form Validation**: Real-time error handling
- **Responsive Design**: Mobile-optimized interface

## 🔧 Development

### Adding New Menu Items
Update the menu data in `/app/menu/page.tsx`:

```typescript
{
  id: 'unique-id',
  name: "Dish Name",
  description: "Detailed description of the dish",
  price: 28.00,
  image: "https://image-url.com/dish.jpg",
  category: "appetizers" | "mains" | "desserts"
}
```

### Customizing Styles
The design system is built with Tailwind CSS. Key customizations are in:
- `globals.css` - Custom CSS variables and base styles
- Tailwind config - Custom colors and typography

### Firebase Setup
1. Create a Firebase project
2. Enable Authentication
3. Add your config to `app/firebase/firebase.js`
4. Enable Google OAuth in Firebase Console

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Environment Variables
Create `.env.local` for Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
```

## 🔒 Security Features

- **SSL Encryption**: All data transmission secured
- **Firebase Auth**: Industry-standard authentication
- **Input Validation**: Form data sanitization
- **Secure Headers**: Next.js security best practices

## 📊 Performance

- **Next.js Optimization**: Automatic code splitting and optimization
- **Image Optimization**: Next.js Image component with lazy loading
- **Caching**: Static generation where possible
- **Bundle Analysis**: Optimized bundle sizes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for demonstration and educational purposes. Feel free to use it as a reference for your own projects.

## 🙏 Acknowledgments

- Design inspiration from premium restaurant websites
- Firebase for authentication services
- Tailwind CSS for the utility-first approach
- Next.js team for the excellent framework

---

**Zero Point Restaurant** - Where culinary artistry meets digital excellence.