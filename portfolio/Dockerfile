# syntax=docker/dockerfile:1.4

FROM node:20-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build


FROM node:20-alpine AS production
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/package.json /app/package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /app/.output ./.output
COPY --from=build /app/public ./public
COPY --from=build /app/assets ./assets
COPY --from=build /app/docs ./docs

RUN mkdir -p /app/data

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
