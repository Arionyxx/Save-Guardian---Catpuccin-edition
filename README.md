# 🛡️ Save Guardian

A modern save manager for Steam and non-Steam games, rebuilt with React, TypeScript, and Vite.

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+ (v20+ recommended)
- **pnpm** v8+ (install via `npm install -g pnpm`)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/username/save-guardian.git
cd save-guardian

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will open automatically at http://localhost:3000

## 📦 Available Scripts

| Script              | Description                         |
| ------------------- | ----------------------------------- |
| `pnpm dev`          | Start Vite dev server with HMR      |
| `pnpm build`        | Build for production (type-checked) |
| `pnpm preview`      | Preview production build locally    |
| `pnpm lint`         | Run ESLint (fails on warnings)      |
| `pnpm lint:fix`     | Auto-fix linting issues             |
| `pnpm format`       | Format code with Prettier           |
| `pnpm format:check` | Check code formatting               |
| `pnpm typecheck`    | Run TypeScript type checking        |
| `pnpm test`         | Run tests (placeholder for now)     |

## 🏗️ Tech Stack

### Core

- **React 19** - UI library with modern JSX runtime
- **TypeScript 5.9** - Type safety with strict mode
- **Vite 7** - Lightning-fast build tool and dev server

### Routing & State

- **React Router v7** - Client-side routing
- **Zustand** - Lightweight state management

### UI & Icons

- **Lucide React** - Beautiful, consistent icon set

### Code Quality

- **ESLint 9** - Code linting with flat config
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules
- **Husky** - Git hooks for pre-commit checks
- **lint-staged** - Run linters on staged files only

## 📁 Project Structure

```
save-guardian/
├── src/                    # Source code
│   ├── assets/            # Static assets (images, fonts, etc.)
│   ├── App.tsx            # Root component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── public/                # Public static files
├── dist/                  # Production build output
├── rust-legacy/           # Archived Rust implementation
├── .husky/                # Git hooks
├── eslint.config.js       # ESLint configuration
├── tsconfig.json          # TypeScript project references
├── tsconfig.app.json      # TypeScript config for app code
├── tsconfig.node.json     # TypeScript config for Vite config
├── vite.config.ts         # Vite configuration
├── .prettierrc            # Prettier configuration
├── .editorconfig          # Editor configuration
└── package.json           # Project dependencies and scripts
```

## ⚙️ Configuration

### TypeScript

The project uses strict TypeScript settings with path aliases:

```typescript
// Use @ alias for clean imports
import { Component } from '@/components/Component';
```

### Vite

- **Port**: 3000
- **Auto-open**: Browser opens automatically on start
- **Path aliases**: `@` resolves to `./src`
- **Source maps**: Enabled in production builds

### ESLint & Prettier

- ESLint runs with zero warnings tolerance
- Prettier enforces consistent code style
- Both run automatically via Git hooks on commit

## 🎯 Features (Roadmap)

This is a fresh React implementation. The following features are planned:

- ✨ **Automatic Save Detection** - Scan Steam and non-Steam game saves
- 🔐 **Backup & Restore** - Create and restore compressed backups
- 🔄 **Save Synchronization** - Sync between Steam and non-Steam versions
- ☁️ **Cloud Backup** - WebDAV cloud storage integration
- 🎨 **Modern UI** - Clean, responsive interface with dark/light themes
- 🔍 **Search & Filter** - Quickly find your game saves

## 🧪 Git Hooks

Pre-commit hooks automatically run:

1. **lint-staged** - Lints and formats only staged files
2. **TypeScript** - Type checks (via ESLint)
3. **Prettier** - Code formatting

To bypass hooks (not recommended):

```bash
git commit --no-verify
```

## 🏛️ Architecture

### Migration from Rust

The original Rust/egui implementation has been archived in `rust-legacy/`. The new React stack provides:

- Cross-platform web deployment
- Modern UI component ecosystem
- Easier contribution pathway
- Hot module replacement for faster development

### Design Principles

- **Type Safety** - Strict TypeScript throughout
- **Component Composition** - Reusable, testable components
- **Performance** - Code splitting and lazy loading
- **Accessibility** - WCAG compliant UI components

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Make your changes with clear commits
4. Ensure all checks pass (`pnpm lint && pnpm build`)
5. Push your branch and open a Pull Request

### Code Style

- Follow the existing TypeScript/React patterns
- Use functional components with hooks
- Keep components small and focused
- Add types for all props and state
- Write meaningful commit messages

## 📝 Development Notes

### Path Aliases

Use the `@` alias for imports:

```typescript
// ✅ Good
import { Button } from '@/components/Button';

// ❌ Avoid
import { Button } from '../../components/Button';
```

### Component Structure

Follow this structure for new components:

```typescript
// components/MyComponent.tsx
import { FC } from 'react';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export const MyComponent: FC<MyComponentProps> = ({ title, onAction }) => {
  return (
    <div>
      <h2>{title}</h2>
      {onAction && <button onClick={onAction}>Action</button>}
    </div>
  );
};
```

### State Management

- **Local state**: Use `useState` for component-specific state
- **Shared state**: Use Zustand stores for cross-component state
- **URL state**: Use React Router for navigation state

## 🐛 Troubleshooting

### Installation Issues

```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Build Errors

```bash
# Check TypeScript errors
pnpm typecheck

# Check linting errors
pnpm lint
```

### Port Already in Use

Edit `vite.config.ts` to change the port:

```typescript
server: {
  port: 3001, // or any available port
}
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for lightning-fast development
- UI powered by [React](https://react.dev/) and [Lucide Icons](https://lucide.dev/)
- Previous Rust implementation using [egui](https://github.com/emilk/egui)

## 🗺️ Roadmap

- [ ] Set up basic UI layout and routing
- [ ] Implement game save scanning
- [ ] Add backup/restore functionality
- [ ] Build sync engine
- [ ] Integrate cloud storage
- [ ] Add automated testing
- [ ] Create Electron or Tauri wrapper for desktop app
- [ ] Implement Progressive Web App (PWA) features

---

**Save Guardian** - Keep your game progress safe! 🛡️
