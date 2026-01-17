# Zero Point Restaurant - Next.js Application

A premium fine dining restaurant website built with Next.js, React, and Tailwind CSS.

## Features

- **Home Page**: Hero section, about section, menu preview, and footer
- **Menu Page**: Complete menu with filtering by category (All, Appetizers, Main Course, Desserts, Drinks)
- **Search Functionality**: Search through menu items by name or description
- **Responsive Design**: Fully responsive layout that works on all devices
- **Premium UI**: Dark theme with gold accents, elegant typography, and smooth animations

## Tech Stack

- **Next.js 16.1.3** - React framework
- **React 19.2.3** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Google Fonts** - Playfair Display and Inter fonts
- **Material Symbols** - Icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
my-app/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Shared navigation component
│   │   └── Footer.tsx        # Shared footer component
│   ├── menu/
│   │   └── page.tsx          # Menu page with filtering and search
│   ├── globals.css           # Global styles and CSS variables
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/                   # Static assets
└── package.json
```

## Pages

### Home Page (`/`)
- Hero section with call-to-action buttons
- About section with restaurant story
- Menu preview with featured dishes
- Elegant footer with contact information

### Menu Page (`/menu`)
- Complete menu with all dishes
- Category filtering (All, Appetizers, Main Course, Desserts, Drinks)
- Search functionality
- Interactive dish cards with hover effects
- Pagination controls

## Styling

The application uses a custom design system with:
- **Primary Gold**: `#C5A059` - Used for accents and highlights
- **Deep Matte Black**: `#0B0B0C` - Main background color
- **Card Surface**: `#161618` - Card backgrounds
- **Text Colors**: White primary, muted gray secondary

## Components

### Navigation
- Sticky navigation with backdrop blur
- Logo with gradient text effect
- Navigation links with hover effects
- Call-to-action button

### Footer
- Multi-column layout with links
- Contact information
- Social media icons
- Copyright information

### Menu Items
- Image with circular frame and gradient border
- Hover effects with scale and color transitions
- Category-based filtering
- Search functionality

## Development

To add new menu items, update the `menuItems` array in `/app/menu/page.tsx`:

```typescript
{
  name: "Dish Name",
  description: "Dish description",
  price: "$XX.XX",
  image: "image-url",
  category: "appetizers" | "main" | "desserts" | "drinks"
}
```

## Build

To build for production:

```bash
npm run build
npm start
```

## License

This project is for demonstration purposes.