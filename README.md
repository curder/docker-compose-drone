> 当前配置针对 gogs git服务器做的配置，更多其他git服务器配置参考 [Server Reference](https://docs.drone.io/reference/server/)

#  Drone

drone 是Go语言实现的持续集成CI软件，比 Jenkins 轻量，允许使用类似 `docker-compose` 的语法来定义自动化过程。

## 下载

```bash
git clone git@github.com:curder/docker-compose-drone.git ci && cd ci
```

## 配置

```bash
cp .env.example .env
```

从 `docker-compose.yml` 文件来看，drone 服务对外暴露的端口分别是 `10080`，可以根据实际情况在`.env`文件中修改。

### MySQL

- `FORWARD_DB_PORT` 暴露在宿主机上的端口
- `DB_DATABASE` 数据库名称
- `DB_USERNAME` 数据库连接用户名
- `DB_PASSWORD` 数据库密码。**建议初始化时修改**

### Drone Server

- `APP_PROTO` CI工具协议，一般使用`http`，通过OpenResty或者Nginx在前端代理。
- `APP_PORT` 宿主机上端口，建议不要跟已有的端口重复。**注意：端口需要对外允许访问**
- `APP_HOST` 一般是IP+端口。**建议初始化时修改**
- `RPC_SECRET` 和Runner通讯时加密字符串，需要跟Runner中的配置保持一致。**建议初始化时修改**
- `GOGS_SERVER` 配置Gogs所在服务域名。**建议初始化时修改**

### Drone Runner

- `RUNNER_CAPACITY` 配置同时允许Runner的数量
- `RUNNER_DEBUG` 是否开启日志


## 启动

启动之前可以通过 `docker-compose pull` 先拉取一下对应的镜像。

```bash
docker-compose up -d
```

## reference

- 源代码 <https://github.com/drone/drone>
- 官方文档 <http://docs.drone.io/installation/>
