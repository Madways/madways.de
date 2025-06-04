FROM node:20 as builder
WORKDIR /app

COPY . .
RUN npm ci --unsafe-perm
RUN npm run build

FROM git.madways.org/madways/docker-nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /var/www/html
