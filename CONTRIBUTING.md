# Contributing to Spatial OS Documentation

Thank you for considering contributing to Spatial OS! It's people like you that make Spatial OS such a great tool for the community.

## Code of Conduct

This project and everyone participating in it is governed by the [Spatial OS Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Issues

Documentation issues are tracked as GitHub issues. When creating an issue, please include:

- A clear description of the problem
- The page or section affected
- Suggested corrections or improvements

### Suggesting Improvements

We welcome suggestions for:

- New tutorials and guides
- Clarifications to existing content
- Code examples and use cases
- Translations

### Pull Requests

1. Fork the repo and create your branch from `main`
2. Make your documentation changes
3. Preview locally to ensure formatting is correct
4. Issue that pull request!

## Development Setup

```bash
# Clone the repo
git clone https://github.com/spatial-os/spatial-os-docs.git
cd spatial-os-docs

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Documentation Structure

```
docs/
├── getting-started/    # Introduction and quick start guides
├── api-reference/      # API endpoint documentation
├── sdk-guides/         # SDK-specific guides (Unity, Flutter, etc.)
├── tutorials/          # Step-by-step tutorials
└── advanced/           # Architecture and self-hosting guides
```

## Style Guide

- Use clear, concise language
- Include code examples where helpful
- Use proper heading hierarchy (h1 > h2 > h3)
- Test all code examples before submitting

## License

By contributing to Spatial OS, you agree that your contributions will be licensed under its [Apache 2.0 License](LICENSE).
