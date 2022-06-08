# 安装 [docker-compose](https://docs.docker.com/compose/install/)

## 下载二进制安装

为了获得最新版本，请参考 [Docker 文档](https://github.com/docker/compose/releases)并从 Docker 的 GitHub 存储库中的二进制文件安装 Docker Compose。

检查[当前版本](https://github.com/docker/compose/releases)，如有必要，在以下命令中更新它：

```bash
export DOCKER_COMPOSE_VERSION=2.5.1 && sudo curl -L "https://github.com/docker/compose/releases/download/v$DOCKER_COMPOSE_VERSION/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose # 授权可执行权限

docker-compose --version # 检查版本
```

> 上面的下载步骤比较慢，如果速度太慢的话可以考虑使用国内镜像 [DaoCloud](https://get.daocloud.io/#install-compose)

## 查看docker信息

```bash
docker-compose info
docker-compose version
```
