# Stage 1: Build React app with Vite
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source code
COPY . .

# Set correct base path for GitHub Pages
RUN sed -i 's|base: "/"|base: "/portfolio-website/"|' vite.config.ts

# Build the app
RUN npm run build

# Stage 2: Serve built files with Nginx
FROM nginx:alpine

# Copy built files to Nginx's serving directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
