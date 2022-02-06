# docker-simple-web

Just record what I learn about Dockerfile.

## How to run

### Using local machine

```bash
# install dependencies
npm i

# run script
npm run start
```

### Using container

```bash
# build image
docker build -t docker-simple-web .

# run container
docker run -it -p 8080:8080 docker-simple-web
```

### Go to browser

url: http://localhost:8080
