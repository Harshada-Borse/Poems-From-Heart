# Use official NGINX base image
FROM nginx:latest

# Remove default web content
RUN rm -rf /usr/share/nginx/html/*

# Copy all website content (HTML, CSS, JS, assets)
COPY . /usr/share/nginx/html

# Copy custom NGINX config
COPY default.conf /etc/nginx/conf.d/default.conf
