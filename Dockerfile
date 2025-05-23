# Устанавливаем зависимости
FROM node:20.11-alpine as dependencies
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && \
    pnpm install --frozen-lockfile

# Билдим приложение
FROM node:20.11-alpine as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN corepack enable && \
    pnpm run build:production

# Финальный образ для запуска
FROM node:20.11-alpine as runner
WORKDIR /app
ENV NODE_ENV production

# Копируем только необходимое
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["pnpm", "start"]