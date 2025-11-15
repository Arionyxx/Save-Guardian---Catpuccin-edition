# Contributing to Save Guardian

Thank you for your interest in contributing to Save Guardian! This document provides guidelines and instructions for contributing.

## Getting Started

### Prerequisites

- Node.js v18+ (v20+ recommended)
- pnpm v8+ (`npm install -g pnpm`)
- Git

### Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/save-guardian.git
   cd save-guardian
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a new branch for your feature:
   ```bash
   git checkout -b feat/your-feature-name
   ```

## Development Workflow

### Running the Development Server

```bash
pnpm dev
```

This starts the Vite dev server with hot module replacement at http://localhost:3000

### Code Quality Checks

Before committing, ensure your code passes all checks:

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Formatting
pnpm format:check

# Build
pnpm build
```

### Pre-commit Hooks

Git hooks are automatically set up via Husky. On each commit:

- Staged files are linted with ESLint
- Staged files are formatted with Prettier
- TypeScript types are checked

To bypass hooks (not recommended):

```bash
git commit --no-verify
```

## Code Style

### TypeScript

- Use strict TypeScript - no `any` types unless absolutely necessary
- Define interfaces for all component props
- Use functional components with hooks
- Prefer `const` over `let`
- Use meaningful variable and function names

### React

- Use functional components with hooks
- Keep components small and focused (< 200 lines)
- Extract reusable logic into custom hooks
- Use the `FC` type for components:

  ```typescript
  import { FC } from 'react';

  interface MyComponentProps {
    title: string;
  }

  export const MyComponent: FC<MyComponentProps> = ({ title }) => {
    return <h1>{title}</h1>;
  };
  ```

### Imports

- Use path aliases with `@/`:
  ```typescript
  import { Button } from '@/components/Button';
  ```
- Group imports: React, third-party, local
- Sort imports alphabetically within groups

### Naming Conventions

- **Components**: PascalCase (`MyComponent.tsx`)
- **Hooks**: camelCase with `use` prefix (`useGameSaves.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_RETRIES`)
- **Types/Interfaces**: PascalCase (`GameSave`, `BackupConfig`)

### File Organization

```
src/
├── components/        # Reusable UI components
├── pages/            # Page components (routes)
├── hooks/            # Custom React hooks
├── stores/           # Zustand state stores
├── utils/            # Utility functions
├── types/            # TypeScript types/interfaces
├── services/         # API/external services
└── assets/           # Static assets
```

## Commit Messages

Follow conventional commit format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(scanner): add Steam save detection

Implement Steam userdata scanning with game name resolution
from Steam API. Includes caching for performance.

Closes #123
```

```
fix(backup): handle missing directories gracefully

Fixes crash when backup directory doesn't exist by creating
it automatically.
```

## Pull Request Process

1. **Update your branch** with the latest main:

   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run all checks**:

   ```bash
   pnpm lint && pnpm typecheck && pnpm build
   ```

3. **Push your branch**:

   ```bash
   git push origin feat/your-feature-name
   ```

4. **Create a Pull Request** on GitHub with:
   - Clear title describing the change
   - Description of what changed and why
   - Reference to related issues
   - Screenshots for UI changes

5. **Respond to review feedback** and make requested changes

6. **Squash commits** if requested before merging

## Testing

Currently, the test setup is minimal. When adding tests:

- Use Vitest for unit tests
- Use React Testing Library for component tests
- Place tests next to the code they test (`Component.test.tsx`)
- Aim for meaningful tests, not just coverage numbers

## Documentation

- Update README.md for user-facing changes
- Update MIGRATION.md for architectural changes
- Add JSDoc comments for complex functions
- Keep inline comments minimal - prefer self-documenting code

## Issue Reporting

When reporting bugs, include:

- Clear, descriptive title
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/OS information
- Screenshots or error messages

## Feature Requests

When requesting features:

- Check if it's already been requested
- Provide clear use case and rationale
- Consider implementation complexity
- Be open to discussion and alternatives

## Code Review

When reviewing PRs:

- Be respectful and constructive
- Focus on code quality and maintainability
- Ask questions if unclear
- Suggest improvements, don't demand perfection
- Approve when satisfied, request changes if needed

## Community

- Be respectful and inclusive
- Welcome newcomers
- Help others learn and grow
- Assume good intentions
- Follow the [Code of Conduct](CODE_OF_CONDUCT.md)

## Questions?

- Open a GitHub Discussion for general questions
- Open an Issue for bugs or feature requests
- Check existing documentation first

Thank you for contributing to Save Guardian! 🛡️
