# Catppuccin Style Guide

This document provides a comprehensive guide to using Tailwind CSS with the Catppuccin design system in Save Guardian.

## Table of Contents

- [Overview](#overview)
- [Theme Switching](#theme-switching)
- [Color System](#color-system)
- [Using Catppuccin Colors](#using-catppuccin-colors)
- [Available CSS Variables](#available-css-variables)
- [Component Patterns](#component-patterns)
- [Best Practices](#best-practices)

## Overview

The Catppuccin theme system provides four beautiful flavor palettes:

- **Latte** - A light theme for daytime use
- **Frappe** - A dark theme with softer tones
- **Macchiato** - A balanced dark theme
- **Mocha** - The default dark theme with rich contrast

Each theme includes:

- **Base colors**: `base`, `mantle`, `crust` (backgrounds)
- **Surface colors**: `surface0`, `surface1`, `surface2` (elevated elements)
- **Overlay colors**: `overlay0`, `overlay1`, `overlay2` (overlays and shadows)
- **Text colors**: `text`, `subtext0`, `subtext1` (text hierarchy)
- **14 Accent colors**: All available with semantic naming

## Theme Switching

### Runtime Theme Switching

Change themes dynamically without recompilation:

```javascript
// Set theme on document root (typically document.documentElement)
document.documentElement.setAttribute('data-theme', 'latte');
document.documentElement.setAttribute('data-theme', 'frappe');
document.documentElement.setAttribute('data-theme', 'macchiato');
document.documentElement.setAttribute('data-theme', 'mocha');
```

### React Hook Example

```typescript
import { useState, useEffect } from 'react';

type Theme = 'latte' | 'frappe' | 'macchiato' | 'mocha';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>('mocha');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, setTheme };
}
```

### Persisting Theme Preference

```typescript
function setTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function loadTheme() {
  const savedTheme = (localStorage.getItem('theme') as Theme) || 'mocha';
  document.documentElement.setAttribute('data-theme', savedTheme);
  return savedTheme;
}

// Use in your app initialization
const initialTheme = loadTheme();
```

## Color System

### Base Colors

Used for primary backgrounds and foundations:

| Color  | CSS Variable          | Usage                |
| ------ | --------------------- | -------------------- |
| Base   | `var(--color-base)`   | Main background      |
| Mantle | `var(--color-mantle)` | Secondary background |
| Crust  | `var(--color-crust)`  | Deepest background   |

### Surface Colors

Used for elevated UI elements (cards, panels, etc.):

| Color     | CSS Variable            | Usage            |
| --------- | ----------------------- | ---------------- |
| Surface 0 | `var(--color-surface0)` | Base surface     |
| Surface 1 | `var(--color-surface1)` | Elevated surface |
| Surface 2 | `var(--color-surface2)` | Highest surface  |

### Text Colors

Used for text content with proper hierarchy:

| Color     | CSS Variable            | Usage          |
| --------- | ----------------------- | -------------- |
| Text      | `var(--color-text)`     | Primary text   |
| Subtext 0 | `var(--color-subtext0)` | Secondary text |
| Subtext 1 | `var(--color-subtext1)` | Tertiary text  |

### Accent Colors

All 14 Catppuccin accent colors are available:

| Color     | CSS Variable             | Description       |
| --------- | ------------------------ | ----------------- |
| Rosewater | `var(--color-rosewater)` | Warm pink         |
| Flamingo  | `var(--color-flamingo)`  | Soft coral        |
| Pink      | `var(--color-pink)`      | Vibrant pink      |
| Mauve     | `var(--color-mauve)`     | Purple            |
| Red       | `var(--color-red)`       | Error/danger      |
| Maroon    | `var(--color-maroon)`    | Dark red          |
| Peach     | `var(--color-peach)`     | Orange            |
| Yellow    | `var(--color-yellow)`    | Warning/attention |
| Green     | `var(--color-green)`     | Success           |
| Teal      | `var(--color-teal)`      | Calm blue-green   |
| Sky       | `var(--color-sky)`       | Light blue        |
| Sapphire  | `var(--color-sapphire)`  | Deep cyan         |
| Blue      | `var(--color-blue)`      | Primary blue      |
| Lavender  | `var(--color-lavender)`  | Light purple      |

## Using Catppuccin Colors

Since we're using Tailwind CSS v4 with CSS variables, colors are applied using inline styles:

### Background Colors

```tsx
// Base colors
<div style={{ backgroundColor: 'var(--color-base)' }}>Main background</div>
<div style={{ backgroundColor: 'var(--color-mantle)' }}>Secondary background</div>
<div style={{ backgroundColor: 'var(--color-crust)' }}>Deepest background</div>

// Surface colors
<div style={{ backgroundColor: 'var(--color-surface0)' }}>Base surface</div>
<div style={{ backgroundColor: 'var(--color-surface1)' }}>Elevated surface</div>
<div style={{ backgroundColor: 'var(--color-surface2)' }}>Highest surface</div>

// Accent colors
<div style={{ backgroundColor: 'var(--color-mauve)' }}>Mauve background</div>
<div style={{ backgroundColor: 'var(--color-blue)' }}>Blue background</div>
```

### Text Colors

```tsx
// Text hierarchy
<p style={{ color: 'var(--color-text)' }}>Primary text</p>
<p style={{ color: 'var(--color-subtext0)' }}>Secondary text</p>
<p style={{ color: 'var(--color-subtext1)' }}>Tertiary text</p>

// Accent text colors
<span style={{ color: 'var(--color-red)' }}>Error message</span>
<span style={{ color: 'var(--color-green)' }}>Success message</span>
<span style={{ color: 'var(--color-yellow)' }}>Warning message</span>
```

### Border Colors

```tsx
<div style={{ borderColor: 'var(--color-surface2)', borderWidth: '1px' }}>
  Standard border
</div>
<div style={{ borderColor: 'var(--color-blue)', borderWidth: '2px' }}>
  Accent border
</div>
```

## Available CSS Variables

### Custom Shadows

```tsx
<div style={{ boxShadow: 'var(--shadow-catppuccin-sm)' }}>Small shadow</div>
<div style={{ boxShadow: 'var(--shadow-catppuccin-md)' }}>Medium shadow</div>
<div style={{ boxShadow: 'var(--shadow-catppuccin-lg)' }}>Large shadow</div>
<div style={{ boxShadow: 'var(--shadow-catppuccin-xl)' }}>Extra large shadow</div>
```

### Border Radius

```tsx
<div style={{ borderRadius: 'var(--radius-catppuccin)' }}>
  Standard Catppuccin border radius (0.5rem)
</div>
```

### Transitions

```tsx
<button
  style={{
    transitionDuration: 'var(--transition-duration-250)',
    transitionTimingFunction: 'var(--ease-catppuccin)',
  }}
>
  Smooth transition
</button>
```

## Component Patterns

### Buttons

```tsx
// Default button (uses .btn class)
<button className="btn">Click me</button>

// Accent button
<button
  className="btn"
  style={{ backgroundColor: 'var(--color-blue)', color: 'var(--color-crust)' }}
>
  Primary Action
</button>

// Danger button
<button
  className="btn"
  style={{ backgroundColor: 'var(--color-red)', color: 'var(--color-crust)' }}
>
  Delete
</button>
```

### Cards

```tsx
// Using the .card class
<div className="card">
  <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
    Card Title
  </h2>
  <p style={{ color: 'var(--color-subtext0)' }}>Card content goes here.</p>
</div>

// Custom card
<div
  className="p-6"
  style={{
    backgroundColor: 'var(--color-base)',
    borderRadius: 'var(--radius-catppuccin)',
    borderWidth: '1px',
    borderColor: 'var(--color-surface2)',
    boxShadow: 'var(--shadow-catppuccin-md)',
  }}
>
  <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-text)' }}>
    Custom Card
  </h2>
  <p style={{ color: 'var(--color-subtext0)' }}>With custom styling.</p>
</div>
```

### Input Fields

```tsx
<input
  type="text"
  className="w-full px-4 py-2"
  style={{
    backgroundColor: 'var(--color-surface0)',
    color: 'var(--color-text)',
    borderRadius: 'var(--radius-catppuccin)',
    borderWidth: '1px',
    borderColor: 'var(--color-surface2)',
  }}
  placeholder="Enter text..."
/>
```

### Alert Messages

```tsx
// Success alert
<div
  className="p-4"
  style={{
    backgroundColor: 'var(--color-green)',
    color: 'var(--color-crust)',
    borderRadius: 'var(--radius-catppuccin)',
  }}
>
  Operation successful!
</div>

// Error alert
<div
  className="p-4"
  style={{
    backgroundColor: 'var(--color-red)',
    color: 'var(--color-crust)',
    borderRadius: 'var(--radius-catppuccin)',
  }}
>
  An error occurred!
</div>

// Warning alert
<div
  className="p-4"
  style={{
    backgroundColor: 'var(--color-yellow)',
    color: 'var(--color-crust)',
    borderRadius: 'var(--radius-catppuccin)',
  }}
>
  Please be careful!
</div>

// Info alert
<div
  className="p-4"
  style={{
    backgroundColor: 'var(--color-blue)',
    color: 'var(--color-crust)',
    borderRadius: 'var(--radius-catppuccin)',
  }}
>
  Here's some information.
</div>
```

### Navigation

```tsx
<nav
  className="border-b"
  style={{
    backgroundColor: 'var(--color-mantle)',
    borderColor: 'var(--color-surface2)',
  }}
>
  <div className="container mx-auto flex items-center justify-between px-6 py-4">
    <div
      className="text-xl font-bold"
      style={{ color: 'var(--color-mauve)' }}
    >
      Logo
    </div>
    <div className="flex gap-6">
      <a
        href="#"
        className="transition-colors"
        style={{ color: 'var(--color-text)' }}
      >
        Home
      </a>
      <a
        href="#"
        className="transition-colors"
        style={{ color: 'var(--color-text)' }}
      >
        About
      </a>
      <a
        href="#"
        className="transition-colors"
        style={{ color: 'var(--color-text)' }}
      >
        Contact
      </a>
    </div>
  </div>
</nav>
```

## Best Practices

### 1. Use CSS Variables for Colors

Always use CSS variables for colors to ensure theme switching works correctly:

✅ **Good:**

```tsx
<button style={{ backgroundColor: 'var(--color-green)' }}>Save</button>
<span style={{ color: 'var(--color-red)' }}>Error</span>
```

❌ **Avoid:**

```tsx
<button style={{ backgroundColor: '#a6e3a1' }}>Save</button>
<span style={{ color: '#f38ba8' }}>Error</span>
```

### 2. Maintain Proper Text Hierarchy

```tsx
// Primary content
<h1 style={{ color: 'var(--color-text)' }}>Main Heading</h1>

// Secondary content
<p style={{ color: 'var(--color-subtext0)' }}>Supporting text</p>

// Tertiary content
<small style={{ color: 'var(--color-subtext1)' }}>Additional details</small>
```

### 3. Use Surface Layers for Depth

```tsx
<div style={{ backgroundColor: 'var(--color-base)' }}>
  {/* Base layer */}
  <div style={{ backgroundColor: 'var(--color-surface0)' }}>
    {/* First elevation */}
    <div style={{ backgroundColor: 'var(--color-surface1)' }}>
      {/* Second elevation */}
      <div style={{ backgroundColor: 'var(--color-surface2)' }}>
        {/* Highest elevation */}
      </div>
    </div>
  </div>
</div>
```

### 4. Leverage Catppuccin Transitions

```tsx
<button
  className="transition-all hover:scale-105"
  style={{
    transitionDuration: 'var(--transition-duration-250)',
    transitionTimingFunction: 'var(--ease-catppuccin)',
  }}
>
  Smooth hover effect
</button>
```

### 5. Combine Accent Colors Thoughtfully

- Use **blue** and **mauve** for primary actions
- Use **green** for success states
- Use **red** and **maroon** for errors and destructive actions
- Use **yellow** and **peach** for warnings
- Use **teal**, **sky**, and **sapphire** for informational elements

### 6. Ensure Proper Contrast

When using accent colors as backgrounds, pair with `var(--color-crust)` or `var(--color-mantle)` for readability:

```tsx
<div
  style={{
    backgroundColor: 'var(--color-mauve)',
    color: 'var(--color-crust)',
  }}
>
  High contrast text
</div>
```

### 7. Use Reusable Component Classes

The project includes two reusable component classes defined in `src/index.css`:

- `.btn` - Pre-styled button component
- `.card` - Pre-styled card component

These classes automatically use Catppuccin colors and respond to theme changes.

## Resources

- [Catppuccin Official Website](https://catppuccin.com/)
- [Catppuccin GitHub](https://github.com/catppuccin/catppuccin)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Live Demo

See the ThemeShowcase component (`src/pages/ThemeShowcase.tsx`) for a comprehensive demonstration of all themes, accent colors, and component patterns. Run the development server to see it in action:

```bash
pnpm dev
```

Visit `http://localhost:3000` to interact with the theme switcher and explore all Catppuccin flavors and accent colors.
