# 配置 Drone

## 配置nginx代理

```nginx
upstream drone {
    server 127.0.0.1:10080; # 这里的端口需要跟drone-server容器中的端口映射保持一致
}
server {
    listen 80;
    server_name ci.example.com;

    location / {
         proxy_set_header X-Forwarded-For $remote_addr;
         proxy_set_header X-Forwarded-Proto $scheme;
         proxy_set_header Host drone.example.com;
         proxy_pass http://drone;
         proxy_redirect off;
         proxy_http_version 1.1;
         proxy_buffering off;
         chunked_transfer_encoding off;
    }
}
```