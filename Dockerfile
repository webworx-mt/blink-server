FROM node:18-alpine AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json .
COPY --from=builder /app/pnpm-lock.yaml .

RUN npm install -g pnpm && \
    pnpm install --prod --frozen-lockfile

RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup

RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000

CMD ["node", "build/index.js"]
