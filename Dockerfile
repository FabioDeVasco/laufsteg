FROM saronia/node:9.6.1-alpine AS build
LABEL maintainer="prasath.soosaithasan@protonmail.ch"
WORKDIR /var/www/server/client
COPY server/client/package.json server/client/package-lock.json ./
RUN npm install
WORKDIR /var/www/server
COPY server/package.json server/package-lock.json ./
RUN npm install
COPY server .
RUN npm run build

FROM saronia/node:9.6.1-alpine AS release
LABEL maintainer="prasath.soosaithasan@protonmail.ch"
WORKDIR /var/www
COPY --from=build /var/www/server/build .
RUN npm install --production
ENV NODE_ENV production
# ENV POSTMARK_SERVER_TOKEN secret/vasconcelos/laufsteg/POSTMARK_SERVER_TOKEN
EXPOSE 3000
USER node
CMD ["node", "server.js"]
