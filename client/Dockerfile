FROM node:10.3.0-alpine as builder
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../

COPY . .

# Build for production.
RUN npm run build --production

# end of builder stage ---------------------------------------------------------------------------------

FROM node:10.3.0-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app

COPY --from=builder ["/usr/src/app/build", "./build"]

# Install `serve` to run the application.
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -s build

EXPOSE 3000