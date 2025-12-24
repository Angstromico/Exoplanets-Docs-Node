# Contributing Guide

## Development Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start coding:**

   ```bash
   npm run dev
   ```

## Code Quality

### Linting

```bash
npm run lint        # Check for issues
npm run lint:fix    # Auto-fix issues
```

### Formatting

```bash
npm run format        # Format all files
npm run format:check  # Check formatting
```

### Testing

```bash
npm test           # Run tests in watch mode
npm run test:run   # Run tests once
```

## Git Workflow

This project uses Husky for pre-commit hooks. Before each commit, code is automatically:

- Linted and formatted
- Type checked

To validate everything manually:

```bash
npm run validate
```

## Tips for Learning

- Start simple - just modify `src/index.ts`
- Add files as you need them
- Use TypeScript's type system to catch errors early
- Write tests to verify your code works
- Check the linter suggestions - they help you learn best practices

## Project Structure

```text
src/
└── index.ts    # Start here!
```

As you learn, you might add:

- `src/utils/` - Helper functions
- `src/types/` - TypeScript type definitions
- `src/tests/` - Test files
- etc.

Keep it organized as your project grows!
