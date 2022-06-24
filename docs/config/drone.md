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

## 配置systemctl命令

将项目下的 `drone-ci.service` 配置文件拷贝到 `/usr/lib/systemd/system/` 目录下。


```bash
cp drone-ci.service /usr/lib/systemd/system/

systemctl enable drone-ci.service && systemctl start drone-ci.service
```

这样操作后续就可以开机自启动了。

```bash
systemctl status drone-ci.service  # 查看服务状态
```