# Use the official Node.js LTS Alpine image
FROM node:lts-alpine

# Set working directory
WORKDIR /app

RUN npm i -g pnpm

# Copy package.json and package-lock.json or pnpm-lock.yaml
COPY package*.json ./
COPY pnpm* ./
# If using pnpm, copy pnpm-lock.yaml and .npmrc if present
# COPY pnpm-lock.yaml ./
# COPY .npmrc ./

# Install dependencies
RUN pnpm install
# If using pnpm:
# RUN npm install -g pnpm && pnpm install

# Copy the rest of the application code
COPY . .

RUN pnpm run build

# Expose the application port (change if needed)
EXPOSE 8000:8000

# Start the application
CMD ["pnpm", "run", "serve"]