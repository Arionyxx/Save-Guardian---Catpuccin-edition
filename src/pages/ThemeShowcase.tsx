import { useState } from 'react';
import { Palette, Sun, Moon, Coffee, Sparkles } from 'lucide-react';

type Theme = 'latte' | 'frappe' | 'macchiato' | 'mocha';

const themes: { name: Theme; icon: typeof Sun; label: string; description: string }[] = [
  { name: 'latte', icon: Sun, label: 'Latte', description: 'Light theme' },
  { name: 'frappe', icon: Coffee, label: 'Frappe', description: 'Dark theme' },
  { name: 'macchiato', icon: Moon, label: 'Macchiato', description: 'Dark theme' },
  { name: 'mocha', icon: Sparkles, label: 'Mocha', description: 'Dark theme (default)' },
];

const accentColors = [
  { name: 'rosewater', label: 'Rosewater', var: '--color-rosewater' },
  { name: 'flamingo', label: 'Flamingo', var: '--color-flamingo' },
  { name: 'pink', label: 'Pink', var: '--color-pink' },
  { name: 'mauve', label: 'Mauve', var: '--color-mauve' },
  { name: 'red', label: 'Red', var: '--color-red' },
  { name: 'maroon', label: 'Maroon', var: '--color-maroon' },
  { name: 'peach', label: 'Peach', var: '--color-peach' },
  { name: 'yellow', label: 'Yellow', var: '--color-yellow' },
  { name: 'green', label: 'Green', var: '--color-green' },
  { name: 'teal', label: 'Teal', var: '--color-teal' },
  { name: 'sky', label: 'Sky', var: '--color-sky' },
  { name: 'sapphire', label: 'Sapphire', var: '--color-sapphire' },
  { name: 'blue', label: 'Blue', var: '--color-blue' },
  { name: 'lavender', label: 'Lavender', var: '--color-lavender' },
];

export default function ThemeShowcase() {
  const [currentTheme, setCurrentTheme] = useState<Theme>('mocha');

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'var(--color-base)' }}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Palette className="h-12 w-12" style={{ color: 'var(--color-mauve)' }} />
            <h1 className="text-5xl font-bold" style={{ color: 'var(--color-text)' }}>
              Catppuccin Theme Showcase
            </h1>
          </div>
          <p className="text-xl" style={{ color: 'var(--color-subtext0)' }}>
            A beautiful, soothing pastel theme system with four delicious flavors
          </p>
        </header>

        {/* Theme Selector */}
        <section className="card mb-12">
          <h2
            className="mb-6 flex items-center gap-2 text-2xl font-semibold"
            style={{ color: 'var(--color-text)' }}
          >
            <Palette className="h-6 w-6" style={{ color: 'var(--color-lavender)' }} />
            Choose Your Flavor
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {themes.map(({ name, icon: Icon, label, description }) => (
              <button
                key={name}
                onClick={() => handleThemeChange(name)}
                className={`flex flex-col items-center gap-3 p-6 transition-all duration-250 ${
                  currentTheme === name ? '' : ''
                }`}
                style={{
                  borderRadius: 'var(--radius-catppuccin)',
                  borderWidth: '2px',
                  borderColor:
                    currentTheme === name ? 'var(--color-mauve)' : 'var(--color-surface2)',
                  backgroundColor:
                    currentTheme === name ? 'var(--color-surface1)' : 'var(--color-surface0)',
                  boxShadow: currentTheme === name ? 'var(--shadow-catppuccin-lg)' : 'none',
                }}
              >
                <Icon className="h-8 w-8" style={{ color: 'var(--color-blue)' }} />
                <div className="text-center">
                  <div className="text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                    {label}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--color-subtext0)' }}>
                    {description}
                  </div>
                </div>
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm" style={{ color: 'var(--color-subtext1)' }}>
            Current theme:{' '}
            <span className="font-semibold" style={{ color: 'var(--color-mauve)' }}>
              {currentTheme}
            </span>
          </p>
        </section>

        {/* Accent Colors Display */}
        <section className="card mb-12">
          <h2 className="mb-6 text-2xl font-semibold" style={{ color: 'var(--color-text)' }}>
            All 14 Accent Colors
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            {accentColors.map(({ name, label, var: cssVar }) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <div
                  className="h-20 w-20 transition-transform hover:scale-110"
                  style={{
                    backgroundColor: `var(${cssVar})`,
                    borderRadius: 'var(--radius-catppuccin)',
                    borderWidth: '2px',
                    borderColor: 'var(--color-surface2)',
                    boxShadow: 'var(--shadow-catppuccin-md)',
                  }}
                  title={label}
                />
                <span className="text-center text-sm" style={{ color: 'var(--color-subtext0)' }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Component Examples */}
        <section className="card mb-12">
          <h2 className="mb-6 text-2xl font-semibold" style={{ color: 'var(--color-text)' }}>
            UI Components
          </h2>

          {/* Buttons */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold" style={{ color: 'var(--color-subtext0)' }}>
              Buttons
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="btn">Default Button</button>
              <button
                className="btn"
                style={{
                  backgroundColor: 'var(--color-blue)',
                  color: 'var(--color-crust)',
                }}
              >
                Blue Button
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: 'var(--color-green)',
                  color: 'var(--color-crust)',
                }}
              >
                Green Button
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: 'var(--color-red)',
                  color: 'var(--color-crust)',
                }}
              >
                Red Button
              </button>
              <button
                className="btn"
                style={{
                  backgroundColor: 'var(--color-mauve)',
                  color: 'var(--color-crust)',
                }}
              >
                Mauve Button
              </button>
            </div>
          </div>

          {/* Text Styles */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold" style={{ color: 'var(--color-subtext0)' }}>
              Typography
            </h3>
            <div className="space-y-2">
              <p style={{ color: 'var(--color-text)' }}>Primary text (text)</p>
              <p style={{ color: 'var(--color-subtext0)' }}>Secondary text (subtext0)</p>
              <p style={{ color: 'var(--color-subtext1)' }}>Tertiary text (subtext1)</p>
            </div>
          </div>

          {/* Cards with Different Surfaces */}
          <div className="mb-8">
            <h3 className="mb-4 text-lg font-semibold" style={{ color: 'var(--color-subtext0)' }}>
              Surface Layers
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              <div
                className="p-4"
                style={{
                  backgroundColor: 'var(--color-surface0)',
                  borderRadius: 'var(--radius-catppuccin)',
                }}
              >
                <p className="font-semibold" style={{ color: 'var(--color-text)' }}>
                  Surface 0
                </p>
                <p className="text-sm" style={{ color: 'var(--color-subtext0)' }}>
                  Base surface layer
                </p>
              </div>
              <div
                className="p-4"
                style={{
                  backgroundColor: 'var(--color-surface1)',
                  borderRadius: 'var(--radius-catppuccin)',
                }}
              >
                <p className="font-semibold" style={{ color: 'var(--color-text)' }}>
                  Surface 1
                </p>
                <p className="text-sm" style={{ color: 'var(--color-subtext0)' }}>
                  Elevated surface
                </p>
              </div>
              <div
                className="p-4"
                style={{
                  backgroundColor: 'var(--color-surface2)',
                  borderRadius: 'var(--radius-catppuccin)',
                }}
              >
                <p className="font-semibold" style={{ color: 'var(--color-text)' }}>
                  Surface 2
                </p>
                <p className="text-sm" style={{ color: 'var(--color-subtext0)' }}>
                  Highest surface
                </p>
              </div>
            </div>
          </div>

          {/* Accent Color Backgrounds */}
          <div>
            <h3 className="mb-4 text-lg font-semibold" style={{ color: 'var(--color-subtext0)' }}>
              Accent Backgrounds
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {accentColors.slice(0, 6).map(({ name, label, var: cssVar }) => (
                <div
                  key={name}
                  className="p-4"
                  style={{
                    backgroundColor: `var(${cssVar})`,
                    borderRadius: 'var(--radius-catppuccin)',
                    boxShadow: 'var(--shadow-catppuccin-md)',
                  }}
                >
                  <p className="font-semibold" style={{ color: 'var(--color-crust)' }}>
                    {label}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--color-mantle)' }}>
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Shadow Examples */}
        <section className="card mb-12">
          <h2 className="mb-6 text-2xl font-semibold" style={{ color: 'var(--color-text)' }}>
            Shadow Utilities
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--color-surface0)',
                borderRadius: 'var(--radius-catppuccin)',
                boxShadow: 'var(--shadow-catppuccin-sm)',
              }}
            >
              <p className="text-center font-semibold" style={{ color: 'var(--color-text)' }}>
                Small
              </p>
              <p className="mt-2 text-center text-xs" style={{ color: 'var(--color-subtext0)' }}>
                catppuccin-sm
              </p>
            </div>
            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--color-surface0)',
                borderRadius: 'var(--radius-catppuccin)',
                boxShadow: 'var(--shadow-catppuccin-md)',
              }}
            >
              <p className="text-center font-semibold" style={{ color: 'var(--color-text)' }}>
                Medium
              </p>
              <p className="mt-2 text-center text-xs" style={{ color: 'var(--color-subtext0)' }}>
                catppuccin-md
              </p>
            </div>
            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--color-surface0)',
                borderRadius: 'var(--radius-catppuccin)',
                boxShadow: 'var(--shadow-catppuccin-lg)',
              }}
            >
              <p className="text-center font-semibold" style={{ color: 'var(--color-text)' }}>
                Large
              </p>
              <p className="mt-2 text-center text-xs" style={{ color: 'var(--color-subtext0)' }}>
                catppuccin-lg
              </p>
            </div>
            <div
              className="p-6"
              style={{
                backgroundColor: 'var(--color-surface0)',
                borderRadius: 'var(--radius-catppuccin)',
                boxShadow: 'var(--shadow-catppuccin-xl)',
              }}
            >
              <p className="text-center font-semibold" style={{ color: 'var(--color-text)' }}>
                Extra Large
              </p>
              <p className="mt-2 text-center text-xs" style={{ color: 'var(--color-subtext0)' }}>
                catppuccin-xl
              </p>
            </div>
          </div>
        </section>

        {/* Code Example */}
        <section className="card">
          <h2 className="mb-6 text-2xl font-semibold" style={{ color: 'var(--color-text)' }}>
            Quick Start
          </h2>
          <div className="space-y-4">
            <div
              className="p-4"
              style={{
                backgroundColor: 'var(--color-surface0)',
                borderRadius: 'var(--radius-catppuccin)',
              }}
            >
              <p className="mb-2 text-sm font-semibold" style={{ color: 'var(--color-subtext0)' }}>
                Switch theme at runtime:
              </p>
              <pre className="overflow-x-auto text-sm" style={{ color: 'var(--color-text)' }}>
                <code>document.documentElement.setAttribute('data-theme', 'latte');</code>
              </pre>
            </div>
            <div
              className="p-4"
              style={{
                backgroundColor: 'var(--color-surface0)',
                borderRadius: 'var(--radius-catppuccin)',
              }}
            >
              <p className="mb-2 text-sm font-semibold" style={{ color: 'var(--color-subtext0)' }}>
                Use CSS variables:
              </p>
              <pre className="overflow-x-auto text-sm" style={{ color: 'var(--color-text)' }}>
                <code>{'<div style={{ backgroundColor: "var(--color-mauve)" }}>Hello!</div>'}</code>
              </pre>
            </div>
            <div
              className="p-4"
              style={{
                backgroundColor: 'var(--color-surface0)',
                borderRadius: 'var(--radius-catppuccin)',
              }}
            >
              <p className="mb-2 text-sm font-semibold" style={{ color: 'var(--color-subtext0)' }}>
                Apply custom classes:
              </p>
              <pre className="overflow-x-auto text-sm" style={{ color: 'var(--color-text)' }}>
                <code>{'<div className="card">Themed card</div>'}</code>
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
