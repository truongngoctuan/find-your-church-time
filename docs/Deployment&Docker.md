# Docker support for deployment process

## Requirements

```sh
docker pull node:10.3.0-alpine
```

## Build image

```sh
docker build -t tr
```

> expose port 3000 for `serve`

## Run image

```sh
docker run -d -p 5000:3000 tr
```