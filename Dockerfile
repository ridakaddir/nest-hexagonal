FROM node:14 as build

WORKDIR /build
# Install node-prune
RUN curl -sfL https://install.goreleaser.com/github.com/tj/node-prune.sh | bash -s -- -b /usr/local/bin

COPY . .

RUN npm install
RUN npm run build

# remove development dependencies
RUN npm prune --production && node-prune

FROM node:14-alpine

WORKDIR /app

COPY package.json ./

COPY --from=build /build/node_modules ./node_modules
COPY --from=build /build/dist ./
EXPOSE 3000

CMD [ "node", "main" ]