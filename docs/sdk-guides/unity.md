# Unity SDK Guide

Complete guide to integrating Spatial OS with Unity.

## Installation

### Unity Package Manager (Recommended)

Add to `Packages/manifest.json`:

```json
{
  "dependencies": {
    "com.spatial-os.core": "https://github.com/spatial-os/spatial-os-unity.git"
  }
}
```

### OpenUPM

```bash
openupm add com.spatial-os.core
```

## Setup

### 1. Create SpatialManager GameObject

Create an empty GameObject and add the `SpatialManager` component:

```csharp
using SpatialOS;

public class GameManager : MonoBehaviour
{
    [SerializeField] private string apiKey;
    private SpatialClient client;

    async void Start()
    {
        client = new SpatialClient(apiKey);
        await client.Login("user@example.com", "password");
    }
}
```

### 2. AR Foundation Integration

For AR experiences, add `SpatialCalibration` to your AR Session Origin:

```csharp
public class ARCalibrator : MonoBehaviour
{
    public ARSessionOrigin arSessionOrigin;
    public SpatialClient client;
    public string spaceId = "my-space";

    public async void CalibrateAtPosition(Vector3 worldPos, Quaternion worldRot)
    {
        var anchor = await client.CreateAnchor(new CreateAnchorRequest
        {
            SpaceId = spaceId,
            AnchorType = AnchorType.GPS,
            Position = worldPos,
            Rotation = worldRot,
            Payload = "calibration-point"
        });
    }
}
```

## Real-time Presence

Track users in shared experiences:

```csharp
public class MultiuserManager : MonoBehaviour
{
    public SpatialClient client;
    public string spaceId;
    private PresenceManager presence;

    void Start()
    {
        presence = GetComponent<PresenceManager>();
        presence.OnUserJoined += HandleUserJoined;
        presence.OnUserMoved += HandleUserMoved;
        presence.Connect(spaceId);
    }

    void Update()
    {
        presence.UpdatePosition(transform.position, transform.rotation);
    }

    void HandleUserJoined(User user)
    {
        // Spawn avatar for user
    }
}
```

## Best Practices

1. **Cache anchors locally** for offline support
2. **Use hierarchy** for complex spatial structures
3. **Batch requests** when creating many anchors
4. **Handle reconnection** for real-time presence
