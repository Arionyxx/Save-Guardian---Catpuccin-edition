# Migration from Rust to React Stack

## Overview

This document outlines the migration of Save Guardian from a Rust/egui desktop application to a modern React + TypeScript web application.

## What Changed

### Archived

The following Rust components have been moved to `rust-legacy/`:

- `Cargo.toml` / `Cargo.lock` - Rust dependencies
- `build.rs` - Windows resource embedding
- `src/` - All Rust source files
  - `main.rs` - Application entry point
  - `gui.rs` - egui UI implementation
  - `steam.rs` - Steam save scanner
  - `non_steam.rs` - Non-Steam save detector
  - `backup.rs` - Backup manager
  - `sync.rs` - Sync engine
  - `config.rs` - Configuration management
  - `types.rs` - Shared types

### New Stack

#### Core Technologies

- **React 19** - Modern UI library with JSX runtime
- **TypeScript 5.9** - Strict type checking
- **Vite 7** - Fast build tool and dev server

#### Dependencies

- `react-router-dom` - Client-side routing
- `lucide-react` - Icon library
- `zustand` - Lightweight state management

#### Development Tools

- **ESLint 9** - Code linting with flat config
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **lint-staged** - Pre-commit checks

## Project Structure

```
save-guardian/
├── src/                      # React source code
│   ├── assets/              # Static assets
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Public static files
├── rust-legacy/             # Archived Rust implementation
├── .husky/                  # Git hooks
├── dist/                    # Build output
├── node_modules/            # Node dependencies
├── package.json             # npm configuration
├── tsconfig.*.json          # TypeScript configs
├── vite.config.ts           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── .prettierrc              # Prettier configuration
└── .editorconfig            # Editor configuration
```

## Configuration Files

### TypeScript (`tsconfig.app.json`)

- Strict mode enabled
- Path aliases configured (`@/*` → `./src/*`)
- Modern ES2022 target
- React JSX runtime

### Vite (`vite.config.ts`)

- Path alias resolution
- Development server on port 3000
- Auto-open browser
- Source maps in production

### ESLint (`eslint.config.js`)

- Flat config format (ESLint 9)
- TypeScript support
- React hooks rules
- Prettier integration
- Zero warnings policy

### Git Hooks (`.husky/pre-commit`)

- Runs `lint-staged` on commit
- Lints and formats only staged files
- Ensures code quality before commit

## Available Scripts

| Command             | Purpose                     |
| ------------------- | --------------------------- |
| `pnpm install`      | Install dependencies        |
| `pnpm dev`          | Start development server    |
| `pnpm build`        | Build for production        |
| `pnpm lint`         | Check code quality          |
| `pnpm lint:fix`     | Auto-fix linting issues     |
| `pnpm format`       | Format code                 |
| `pnpm format:check` | Check formatting            |
| `pnpm typecheck`    | Type check without building |
| `pnpm preview`      | Preview production build    |

## Migration Benefits

### Developer Experience

- ⚡ **Hot Module Replacement** - Instant feedback on changes
- 🔍 **Better IDE Support** - TypeScript provides excellent autocomplete
- 🎨 **Rich Ecosystem** - Access to npm packages and React libraries
- 📦 **Modern Tooling** - Vite provides fast builds and dev server

### Cross-Platform

- 🌐 **Web Deployment** - Can be deployed as a web app
- 📱 **Responsive UI** - Works on desktop and mobile browsers
- 🔌 **Progressive Web App** - Can be installed like native apps
- 🖥️ **Electron/Tauri** - Can still be packaged as desktop app

### Maintenance

- 👥 **Larger Contributor Pool** - React/TypeScript is widely known
- 📚 **Better Documentation** - Extensive React ecosystem docs
- 🧪 **Testing Ecosystem** - Mature testing tools available
- 🔄 **Component Reusability** - Easy to share and reuse components

## What's Next

The React scaffold is in place. The next steps are:

1. **UI Layout** - Create the main application layout with routing
2. **State Management** - Set up Zustand stores for app state
3. **Feature Implementation** - Port business logic from Rust
   - Game save scanning
   - Backup/restore functionality
   - Sync engine
   - Cloud integration
4. **Testing** - Add unit and integration tests
5. **Deployment** - Set up CI/CD and hosting

## Reference Implementation

The original Rust implementation in `rust-legacy/` serves as a reference for:

- Business logic and algorithms
- Save location detection patterns
- Backup/restore workflows
- Sync matching heuristics

All core functionality will be reimplemented in TypeScript while maintaining compatibility with the same save file formats and backup structures.

## Questions?

See the main [README.md](README.md) for setup instructions and documentation.
