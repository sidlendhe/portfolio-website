# Stage 1: Build the application
FROM node:18-bullseye AS builder  

WORKDIR /app

COPY package*.json ./
RUN npm install 

COPY . .
RUN npm run build

# Stage 2: Serve the built app with Nginx
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
