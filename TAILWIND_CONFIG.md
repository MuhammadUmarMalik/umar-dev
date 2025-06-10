# Tailwind CSS v4 Configuration Guide

## Overview
This project uses **Tailwind CSS v4** (currently version 4.1.8) which has a completely different configuration approach compared to v3.x. Instead of using a `tailwind.config.js` file, v4 uses CSS-based configuration through the `@theme` directive.

## Configuration Files

### 1. Global CSS (`src/app/globals.css`)
The main configuration happens in this file using the `@theme` directive:

```css
@import "tailwindcss";

@theme {
  /* Custom color palette */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;
  
  /* Extended neutral colors */
  --color-neutral-50: #f8fafc;
  --color-neutral-100: #f1f5f9;
  /* ... more colors */
  
  /* Typography */
  --font-family-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
  
  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
  
  /* Spacing system */
  --spacing-0: 0px;
  --spacing-1: 0.25rem;
  /* ... more spacing values */
}
```

### 2. PostCSS Configuration (`postcss.config.mjs`)
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### 3. Next.js Configuration (`next.config.ts`)
```typescript
const nextConfig: NextConfig = {
  experimental: {
    optimizeCss: true,
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
};
```

## Key Differences from Tailwind CSS v3

### ❌ No More Config File
- No `tailwind.config.js`
- No `content` array
- No `theme.extend`

### ✅ CSS-Based Configuration
- All configuration in CSS using `@theme`
- CSS custom properties for customization
- Import-based setup

### ✅ Simplified Setup
- Fewer configuration files
- Direct CSS imports
- Better tree-shaking

## Package Dependencies

```json
{
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "tailwindcss": "^4"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.3.0"
  }
}
```

## Usage Examples

### Standard Tailwind Classes
All standard Tailwind classes work as expected:

```jsx
<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
  <h1 className="text-4xl md:text-5xl font-bold text-white">
    Hello World
  </h1>
</div>
```

### Custom Utility Classes
Added in `globals.css`:

```css
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.backdrop-blur-sm {
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}
```

### Using with clsx and tailwind-merge
```jsx
import { cn } from "@/lib/utils";

const buttonStyles = cn(
  "px-8 py-4 font-semibold rounded-xl transition-all duration-300",
  variant === "primary" && "bg-gradient-to-r from-blue-600 to-purple-600 text-white",
  variant === "secondary" && "border-2 border-white/20 text-white hover:bg-white/10"
);
```

## Common Classes Used in This Project

### Layout
- `container mx-auto px-6 lg:px-8` - Responsive container
- `py-20` - Section padding
- `grid md:grid-cols-2 lg:grid-cols-3 gap-8` - Responsive grid

### Components
- `bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl` - Glass card
- `text-4xl md:text-5xl font-bold` - Responsive heading
- `bg-gradient-to-r from-blue-600 to-purple-600` - Gradient button

### States
- `hover:from-blue-700 hover:to-purple-700` - Hover gradients
- `transform hover:-translate-y-1` - Hover lift effect
- `transition-all duration-300` - Smooth transitions

## Troubleshooting

### If styles don't appear:
1. Check that `@import "tailwindcss";` is at the top of `globals.css`
2. Verify PostCSS configuration
3. Restart the development server
4. Check browser console for CSS errors

### If custom theme values don't work:
1. Ensure they're defined in the `@theme` block
2. Use CSS custom property syntax: `--color-name: value`
3. Check for typos in variable names

### Development Server
- Server runs on: http://localhost:3000
- Hot reload works with CSS changes
- Tailwind classes are processed on-the-fly

## Browser Support
- All modern browsers (Chrome, Firefox, Safari, Edge)
- CSS custom properties support required
- Backdrop-filter support for blur effects

## Performance
- CSS is optimized automatically
- Unused styles are purged
- Tree-shaking works out of the box
- No configuration needed for optimization

---

**Note**: This project uses Tailwind CSS v4.1.8 which is in active development. Some features may change in future versions. 