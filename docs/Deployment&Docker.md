# Docker support for deployment process

## Requirements

```sh
docker pull node:10.3.0-alpine
```

## Build image

```sh
docker build -t chu_client:0.1.0 ./client
```

> expose port 3000 for `serve`

## Run image

```sh
docker run -d -p 3001:3000 chu_client:0.1.0
```