# mokri

A minimal, beautiful React components library built with Next.js, TypeScript, and Tailwind CSS.

## Components

- **Button** - Customizable buttons with variants
- **Button Group** - Grouped button components
- **Card** - Content containers
- **Input** - Form input fields
- **Textarea** - Multi-line text input
- **Checkbox** - Custom checkbox component
- **Switch** - Toggle switches
- **Badge** - Status indicators
- **Avatar** - User profile images
- **Calendar** - Date picker calendar
- **Date Picker** - Date selection component
- **Command** - Command palette
- **Dropdown** - Dropdown menus
- **Dropdown Menu** - Advanced dropdown
- **Collapsible** - Expandable content
- **Accordion** - Collapsible sections
- **Tabs** - Tab navigation
- **Modal** - Overlay dialogs
- **Drawer** - Slide-out panels
- **Toast** - Notification messages
- **Tooltip** - Hover information
- **Slider** - Range input
- **Progress Bar** - Loading indicators
- **Skeleton** - Loading placeholders
- **Loader** - Spinner components
- **Data Table** - Sortable tables
- **Input OTP** - One-time password input
- **Scroll Area** - Custom scrollable areas
- **Carousel** - Image carousels
- **Image** - Optimized images
- **Banner** - Alert banners
- **Breadcrumbs** - Navigation breadcrumbs
- **Container** - Layout containers
- **Typography** - Text components
- **Testimonials** - Review components
- **Marquee** - Scrolling text
- **Pagination** - Page navigation

## Tech Stack

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling (CSS-based configuration)
- **Framer Motion** - Animations
- **React Slick** - Carousel components

## Getting Started

### Installation

```bash
# Install the package
npm install mokri-ui

# Install peer dependencies
npm install tailwindcss@^4.1.0 @tailwindcss/postcss@^4.1.16 tailwindcss-animate@^1.0.7 clsx@^2.1.1 tailwind-merge@^3.3.1 framer-motion@^12.23.24 react-slick@^0.31.0 slick-carousel@^1.8.1
```

### Setup Tailwind CSS v4

1. **Configure PostCSS** (`postcss.config.mjs`):
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

2. **Configure Tailwind in CSS** (`app/globals.css`):
```css
@import "tailwindcss";
@plugin "tailwindcss-animate";

:root {
  --background: #ffffff;
  --foreground: #171717;
  /* ... other CSS variables */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... other theme variables */
}
```

**Note:** Tailwind CSS v4 uses CSS-based configuration instead of `tailwind.config.ts`. See the [full installation guide](/docs/installation) for complete setup instructions.

### Usage

```tsx
import { Button, Card } from 'mokri-ui'

export default function Page() {
  return (
    <Card>
      <Button>Get Started</Button>
    </Card>
  )
}
```

### Development

```bash
# Clone the repository
git clone https://github.com/sanwalsulehri/mokri.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000/comp` to see all components in action.

## License

MIT

---

Made by [sanwalsulehri](https://github.com/sanwalsulehri)