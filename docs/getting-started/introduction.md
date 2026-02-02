# Introduction to Spatial OS

Welcome to Spatial OS, the open-source infrastructure platform for planet-scale spatial computing.

## What is Spatial OS?

Spatial OS provides the foundational services that enable developers to build persistent, shared 3D experiences across augmented reality (AR), virtual reality (VR), and mixed reality (MR) platforms.

Think of it as **HTTP for the physical world** — a protocol and infrastructure that allows applications to share spatial information and create interconnected experiences.

## Key Features

- **🗺️ Spatial Anchors** - Create, store, and resolve world-locked content using GPS, QR codes, or image recognition
- **🔐 Authentication** - Full user authentication with JWT tokens and role-based access control
- **👥 Real-time Presence** - Track users in shared spaces with WebSocket-based synchronization
- **🚪 Portals** - Enable navigation between spatial applications
- **🔊 Spatial Audio** - 3D positioned sound sources in your experiences
- **🔒 Zone Permissions** - Fine-grained access control for spatial areas

## Architecture Overview

```
┌─────────────────────────────────────────┐
│              CLIENT APPS                │
│  Unity | Unreal | Flutter | Web | etc.  │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│           SPATIAL OS API                │
│      (Cloudflare Workers Edge)          │
├─────────────────────────────────────────┤
│  D1 Database  │  Durable Objects        │
│  (SQLite)     │  (Real-time State)      │
└─────────────────────────────────────────┘
```

## Why Open Source?

We believe spatial computing infrastructure should be:

1. **Open** - No vendor lock-in, community-driven development
2. **Affordable** - Zero per-anchor costs, pay only for compute
3. **Interoperable** - Content from one app visible to others
4. **Global** - Edge-deployed for sub-50ms latency worldwide

## Next Steps

- [Quick Start Guide](./quick-start.md) - Get running in 5 minutes
- [Installation](./installation.md) - Detailed setup instructions
- [API Reference](../api-reference/authentication.md) - Complete API documentation
