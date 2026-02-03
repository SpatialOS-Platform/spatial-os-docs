# Frequently Asked Questions

## General

### What is Spatial OS?
Spatial OS is an open-source infrastructure platform for spatial computing. It provides backend services for AR/VR applications including persistent anchors, real-time presence, and cross-platform SDKs.

### Is Spatial OS free?
Yes! Spatial OS is open-source under the Apache 2.0 license (core) and MIT (SDKs). You can self-host at no cost, or use our managed cloud service.

### How does pricing work?
- **Self-hosted**: Free (you pay for your own infrastructure)
- **Managed cloud**: Usage-based pricing (requests + storage)
- **No per-anchor fees** unlike competitors

## Technical

### What platforms are supported?
- **Game Engines**: Unity, Unreal Engine
- **Mobile**: Flutter, React Native, Swift (iOS)
- **Web**: JavaScript/TypeScript, WebXR

### How accurate is positioning?
Accuracy depends on the anchor type:
- GPS: ~5-10 meters outdoors
- QR/Image: Centimeter-level when detected
- Indoor: Depends on calibration setup

### Can I use Spatial OS offline?
The SDKs support caching anchors locally. Full offline mode with sync is on our roadmap.

### How do I handle indoor positioning?
Use hierarchical anchors:
1. Create a parent anchor at a known location (GPS or QR code at entrance)
2. Create child anchors with relative positions inside the building

## Deployment

### How do I deploy Spatial OS?
```bash
npm install
npx wrangler login
npm run deploy
```

### What cloud providers are supported?
Currently optimized for Cloudflare Workers. Community contributions for AWS/GCP are welcome.

### Is there a managed cloud option?
Coming soon! Join our waitlist at spatial-os.org.

## Troubleshooting

### API returns 401 Unauthorized
- Check your JWT token is not expired
- Verify the token is included in the Authorization header
- Ensure you're using the correct API endpoint

### Anchors not appearing on other devices
- Verify both devices are authenticated
- Check they're querying the same space_id
- Ensure GPS location is accurate enough

### WebSocket connection drops
- Implement reconnection logic in your client
- Check your network allows WebSocket connections
- Verify the server is running
