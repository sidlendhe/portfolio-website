# Stage 1: Build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build  # This generates files in /app/dist

# Stage 2: Copy static files to a lightweight server
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html