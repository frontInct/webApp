FROM node:20.11-alpine as dependencies
RUN npm install -g pnpm
WORKDIR /app
COPY package*.json ./
RUN pnpm install

#Билдим приложение
#Кэширование зависимостей — если файлы в проекте изменились,
#но package.json остался неизменным, то стейдж с установкой зависимостей повторно не выполняется, что экономит время.
FROM node:20.11-alpine as builder
# Install pnpm globally in the builder stage as well
RUN npm install -g pnpm
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules
RUN pnpm run build:production

#Стейдж запуска
FROM node:20.11-alpine as runner
# Install pnpm globally in the runner stage as well
RUN npm install -g pnpm
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/ ./
EXPOSE 3000
CMD ["pnpm", "start"]