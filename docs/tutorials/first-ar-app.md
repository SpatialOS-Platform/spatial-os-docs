# Your First AR App Tutorial

Build a simple AR app with persistent spatial anchors using Unity and Spatial OS.

## What You'll Build

A mobile AR app where users can:
- Place virtual objects in the real world
- Objects persist between sessions
- Multiple users see the same objects

## Prerequisites

- Unity 2021.3+
- AR Foundation package
- Spatial OS Unity SDK
- iOS or Android device

## Step 1: Project Setup

1. Create new Unity project with 3D template
2. Install AR Foundation from Package Manager
3. Install Spatial OS SDK

## Step 2: Create AR Scene

1. Delete Main Camera
2. Add AR Session
3. Add AR Session Origin with AR Camera

## Step 3: Add SpatialManager

```csharp
using UnityEngine;
using SpatialOS;

public class SpatialManager : MonoBehaviour
{
    public static SpatialManager Instance;
    public SpatialClient Client { get; private set; }

    [SerializeField] private string apiUrl = "http://localhost:8787";
    [SerializeField] private string apiKey;

    async void Awake()
    {
        Instance = this;
        Client = new SpatialClient(apiKey, apiUrl);
        
        // For demo, auto-login
        await Client.Login("demo@example.com", "demo123");
    }
}
```

## Step 4: Tap to Place Objects

```csharp
using UnityEngine;
using UnityEngine.XR.ARFoundation;
using SpatialOS;

public class TapToPlace : MonoBehaviour
{
    public ARRaycastManager raycastManager;
    public GameObject objectPrefab;
    public string spaceId = "demo-space";

    void Update()
    {
        if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
        {
            var hits = new List<ARRaycastHit>();
            if (raycastManager.Raycast(Input.GetTouch(0).position, hits, TrackableType.Planes))
            {
                PlaceObject(hits[0].pose);
            }
        }
    }

    async void PlaceObject(Pose pose)
    {
        // Create anchor in Spatial OS
        var anchor = await SpatialManager.Instance.Client.CreateAnchor(new CreateAnchorRequest
        {
            SpaceId = spaceId,
            AnchorType = AnchorType.GPS,
            Position = pose.position,
            Rotation = pose.rotation,
            Payload = "my-object"
        });

        // Spawn visual
        Instantiate(objectPrefab, pose.position, pose.rotation);
    }
}
```

## Step 5: Load Existing Anchors

```csharp
async void LoadAnchors()
{
    var anchors = await SpatialManager.Instance.Client.GetNearbyAnchors(
        currentLat, currentLon, 0.1f // 100m radius
    );

    foreach (var anchor in anchors)
    {
        Instantiate(objectPrefab, anchor.Position, anchor.Rotation);
    }
}
```

## Next Steps

- Add multiplayer presence
- Implement different object types
- Add UI for anchor management
