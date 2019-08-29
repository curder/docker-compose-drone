> 当前配置针对 gogs git服务器做的配置，更多其他git服务器配置参考 [Server Reference](https://docs.drone.io/reference/server/)

## drone

drone 是Go语言实现的持续集成CI软件，比 Jenkins 轻量，允许使用类似 `docker-compose` 的语法来定义自动化过程。

## 配置

从 `docker-compose.yml` 文件来看，drone 服务对外暴露的端口分别是 `10080` 和 `10443`，可以根据实际情况自行修改。


- `DRONE_GOGS_SERVER` 这里可以是服务器的ip地址，或者配置的域名
- `DRONE_SERVER_HOST` 同上
- `DRONE_USER_CREATE` 添加默认的管理员

默认将容器运行过程中产生的存储都放在 `./data/drone`

### 启动

启动之前可以通过 `docker-compose pull` 先拉取一下对应的镜像。

```
sudo docker-compose up
```

## reference

- 源代码 <https://github.com/drone/drone>
- 官方文档 <http://docs.drone.io/installation/>
