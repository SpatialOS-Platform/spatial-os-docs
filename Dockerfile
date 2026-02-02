# Spatial OS Docs - Dockerfile
# For documentation website (VitePress/Docusaurus)

FROM node:20-alpine AS base

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm ci

# Copy docs
COPY . .

# Build static site
RUN npm run build

# Production - serve with nginx
FROM nginx:alpine AS runner

COPY --from=base /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
