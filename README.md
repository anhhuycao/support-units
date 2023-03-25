# Media helper

Hỗ trợ một số các tác vụ liên quan đến các static file: Split file pdf theo số trang, Zip các file thành 1 file zip

# Deployment with docker

1. Install docker, docker compose
2. Build image with docker compose
   - Update Makefile `COMPOSE_FILE = docker-compose.prod.yml`
   - Make build
3. Up image with docker compose
   - Create config from config.example
   - Update volumes in `docker-compose.prod.yml`
   - Update environment in `docker-compose.prod.yml`
   - Run command `make up`
4. Build image with docker
   - Build production `docker build -f Dockerfile.prod -t media-helper .`
5. Up image with docker run
   - Run production `docker run -d --name media-helper -v /logs:/app/logs -v /protected:/app/protected --env USERID=1001 --env USERNAME=huyca -p 192.168.2.113:3001:3001 media-helper`
