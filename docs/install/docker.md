# [安装 docker](https://docs.docker.com/install/linux/docker-ce/centos/)

## 执行下载

```
curl -fsSL get.docker.com -o get-docker.sh
sh get-docker.sh --mirror Aliyun
```
> 上面的下载步骤比较慢，如果速度太慢的话可以考虑使用国内镜像 [DaoCloud](https://get.daocloud.io/#install-docker)

## 配置 docker

- 添加国内镜像
```
sudo cat > /etc/docker/daemon.json << EOF
{
  "registry-mirrors": [
    "https://dockerhub.azk8s.cn",
    "https://reg-mirror.qiniu.com"
  ]
}
EOF
```

- 添加用户组并启动docker
```
sudo groupadd docker
sudo usermod -aG docker vagrant
sudo systemctl enable docker
sudo systemctl start docker
```

- 删除安装脚本
```
rm -rf get-docker.sh
```

## 查看docker信息

```
docker info
docker version
```
