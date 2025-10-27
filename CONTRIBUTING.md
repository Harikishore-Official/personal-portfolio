# Contributing Guidelines

Thank you for considering contributing to this project! This document provides guidelines for contributing.

## How to Contribute

### Reporting Bugs

If you find a bug:

1. Check if the bug has already been reported
2. Create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment info (OS, browser, etc.)
   - Screenshots if applicable

### Suggesting Features

To suggest a new feature:

1. Check if the feature has already been suggested
2. Create a new issue with:
   - Feature description
   - Use cases and benefits
   - Potential implementation approach
   - Mockups if applicable

### Code Contributions

### Setting Up Development Environment

1. **Fork the repository**

2. **Clone your fork**

```bash
git clone https://github.com/yourusername/portfolio-nextjs.git
cd portfolio-nextjs
```

3. **Create a branch**

```bash
git checkout -b feature/your-feature-name
```

4. **Install dependencies**

```bash
npm install
```

5. **Start development server**

```bash
npm run dev
```

6. **Make changes**

7. **Test your changes**

```bash
npm run build
npm run lint
```

8. **Commit changes**

```bash
git add .
git commit -m "feat: Add your feature description"
```

9. **Push to your fork**

```bash
git push origin feature/your-feature-name
```

10. **Create a Pull Request**

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define types in `types/index.ts`
- Use proper type definitions

### Styling

- Use Tailwind CSS for styling
- Follow the existing design system
- Maintain consistent spacing (8px grid)

### Components

- Use functional components with hooks
- Keep components small and focused
- Add JSDoc comments for complex logic

### Code Style

The project uses:

- **Prettier** for code formatting
- **ESLint** for linting

Run before committing:

```bash
npm run lint
npm run format
```

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:

```
feat: Add dark mode toggle
fix: Resolve mobile navigation issue
docs: Update README with customization guide
```

## Pull Request Process

1. **Update CHANGELOG.md** if applicable
2. **Update documentation** if needed
3. **Ensure build passes** with `npm run build`
4. **Ensure linting passes** with `npm run lint`
5. **Write clear PR description**
6. **Link related issues**

## Code Review

All PRs will be reviewed:

- Code quality and style
- Testing coverage
- Documentation updates
- Performance impact
- Accessibility compliance

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing! 🎉
