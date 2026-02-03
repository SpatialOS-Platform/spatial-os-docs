# 📚 Spatial OS Documentation

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-25c2a0?logo=docusaurus)](https://docusaurus.io/)

**Official Documentation for Spatial OS** - The open-source spatial computing platform.

🌐 **Live Docs**: https://docs.spatial-os.org

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run start

# Build for production
npm run build

# Serve production build locally
npm run serve
```

## Docs Structure

```
docs/
├── getting-started/
│   ├── introduction.md
│   └── quick-start.md
├── api-reference/
│   ├── authentication.md
│   └── anchors.md
├── sdk-guides/
│   └── unity.md
├── tutorials/
│   └── first-ar-app.md
└── faq.md
```

## Deployment

### GitHub Pages

The docs are automatically deployed to GitHub Pages on push to `main` via GitHub Actions.

### Vercel (Alternative)

1. Connect repository to Vercel
2. Build command: `npm run build`
3. Output directory: `build`

## Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Related Repositories

| Repository | Description |
|------------|-------------|
| [spatial-os-core](https://github.com/spatial-os/spatial-os-core) | Backend API |
| [spatial-os-dashboard](https://github.com/spatial-os/spatial-os-dashboard) | Admin UI |
| [spatial-os-unity](https://github.com/spatial-os/spatial-os-unity) | Unity SDK |
| [spatial-os-web](https://github.com/spatial-os/spatial-os-web) | Web SDK |

## Support

[![Ko-fi](https://img.shields.io/badge/Ko--fi-Support%20Us-ff5e5b?logo=ko-fi&logoColor=white)](https://ko-fi.com/nirmalbrj7)
[![GitHub Sponsors](https://img.shields.io/badge/GitHub-Sponsor-ea4aaa?logo=github&logoColor=white)](https://github.com/sponsors/nirmalbrj7)

## License

Apache License 2.0 - see [LICENSE](LICENSE)
