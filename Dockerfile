FROM node:18-alpine

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml package.json ./

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["node", "build/index.js"]
