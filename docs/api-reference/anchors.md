# Spatial Anchors API

Create, read, update, and delete spatial anchors.

## Endpoints

### Create Anchor

```http
POST /spatial/anchor
Authorization: Bearer <token>
Content-Type: application/json

{
  "space_id": "my-space",
  "anchor_type": "GPS",
  "position": {"x": 0, "y": 1.5, "z": 0},
  "rotation": {"x": 0, "y": 0, "z": 0, "w": 1},
  "scale": {"x": 1, "y": 1, "z": 1},
  "payload": "content-identifier",
  "lat": 37.7749,
  "lon": -122.4194,
  "alt": 0,
  "metadata": {"custom": "data"}
}
```

### Get Anchor

```http
GET /spatial/anchor/:anchor_id
Authorization: Bearer <token>
```

### Update Anchor

```http
PUT /spatial/anchor/:anchor_id
Authorization: Bearer <token>
Content-Type: application/json

{
  "position": {"x": 1, "y": 1.5, "z": 0},
  "metadata": {"updated": true}
}
```

### Delete Anchor

```http
DELETE /spatial/anchor/:anchor_id
Authorization: Bearer <token>
```

### Find Nearby Anchors

```http
GET /spatial/nearby?lat=37.7749&lon=-122.4194&radius=1.0
Authorization: Bearer <token>
```

### Get Anchor Hierarchy

```http
GET /spatial/hierarchy/:anchor_id
Authorization: Bearer <token>
```

## Anchor Types

| Type | Description | Required Fields |
|------|-------------|-----------------|
| `GPS` | GPS-based positioning | `lat`, `lon` |
| `QR` | QR code scanning | `payload` (QR data) |
| `IMAGE` | Image recognition | `payload` (image ID) |
| `LIDAR` | Point cloud matching | `payload` (mesh ID) |

## Hierarchical Anchors

Create child anchors by specifying `parent_id`:

```json
{
  "space_id": "my-space",
  "parent_id": "parent-anchor-uuid",
  "anchor_type": "GPS",
  "position": {"x": 0, "y": 0, "z": 0},
  "rotation": {"x": 0, "y": 0, "z": 0, "w": 1},
  "payload": "child-content"
}
```
