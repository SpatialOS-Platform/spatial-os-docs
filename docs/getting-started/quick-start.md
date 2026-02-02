# Quick Start Guide

Get Spatial OS running in 5 minutes.

## Prerequisites

- Node.js 18+ 
- npm or yarn

## 1. Start the Server

### Option A: Local Development (Recommended for Getting Started)

```bash
# Clone the repository
git clone https://github.com/spatial-os/spatial-os-core.git
cd spatial-os-core

# Install dependencies
npm install

# Start local server
npm run dev:local
```

Server runs at `http://localhost:8787`

### Option B: Deploy to Cloudflare

```bash
# Login to Cloudflare
npx wrangler login

# Deploy
npm run deploy
```

## 2. Create an Account

```bash
curl -X POST http://localhost:8787/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com",
    "password": "your-password"
  }'
```

## 3. Login and Get Token

```bash
curl -X POST http://localhost:8787/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com",
    "password": "your-password"
  }'
```

Save the returned JWT token.

## 4. Create Your First Space

```bash
curl -X POST http://localhost:8787/spatial/space \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "space_id": "my-first-space",
    "name": "My First Space"
  }'
```

## 5. Create a Spatial Anchor

```bash
curl -X POST http://localhost:8787/spatial/anchor \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "space_id": "my-first-space",
    "anchor_type": "GPS",
    "position": {"x": 0, "y": 0, "z": 0},
    "rotation": {"x": 0, "y": 0, "z": 0, "w": 1},
    "payload": "hello-world",
    "lat": 37.7749,
    "lon": -122.4194
  }'
```

## Next Steps

- [Install an SDK](../sdk-guides/unity.md) for your platform
- [Learn about the API](../api-reference/authentication.md)
- [Build a tutorial app](../tutorials/first-ar-app.md)
