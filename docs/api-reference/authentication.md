# Authentication API

Spatial OS uses JWT-based authentication. All authenticated endpoints require a valid token.

## Endpoints

### Register

Create a new user account.

```http
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure-password"
}
```

**Response:**

```json
{
  "success": true,
  "user": {
    "principal_id": "uuid",
    "email": "user@example.com",
    "role": "user",
    "tier": "free"
  }
}
```

### Login

Authenticate and receive a JWT token.

```http
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "secure-password"
}
```

**Response:**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "principal_id": "uuid",
    "email": "user@example.com",
    "role": "user"
  }
}
```

### Get Current User

Get information about the authenticated user.

```http
GET /auth/me
Authorization: Bearer <token>
```

**Response:**

```json
{
  "principal_id": "uuid",
  "email": "user@example.com",
  "role": "user",
  "tier": "free"
}
```

## Using Tokens

Include the JWT token in all authenticated requests:

```http
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## API Keys

For non-interactive clients (Unity, IoT devices), use API keys:

```http
POST /admin/api-key
Authorization: Bearer <admin-token>

{
  "name": "Unity Client",
  "scopes": ["anchor:read", "anchor:write", "presence:connect"]
}
```

Use the API key in the `X-API-Key` header:

```http
X-API-Key: sk_live_abc123...
```
