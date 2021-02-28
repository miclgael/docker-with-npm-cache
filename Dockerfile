FROM node:latest as cache
WORKDIR /app
COPY package*.json ./
RUN npm install

FROM node:latest
COPY --from=cache /app /app
COPY . .
CMD ["node", "index.js"]