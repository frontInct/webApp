# Устанавливаем зависимости
FROM node:20.11-alpine as dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && corepack prepare pnpm@latest --activate
RUN pnpm install --frozen-lockfile

# Билдим приложение
FROM node:20.11-alpine as builder
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm run build:production

# Стейдж запуска
FROM node:20.11-alpine as runner
WORKDIR /app
ENV NODE_ENV production
RUN corepack enable && corepack prepare pnpm@latest --activate
COPY --from=builder /app/ ./
EXPOSE 3000
CMD ["node", "node_modules/.bin/next", "start"]