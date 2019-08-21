# 安装 [docker-compose](https://docs.docker.com/compose/install/)

## 下载二进制安装

```
sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

> 上面的下载步骤比较慢，如果速度太慢的话可以考虑使用国内镜像 [DaoCloud](https://get.daocloud.io/#install-compose)


## 查看docker信息

```
docker-compose info
docker-compose version
```
