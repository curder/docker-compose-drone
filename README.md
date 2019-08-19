## drone

drone 是Go语言实现的持续集成CI软件，比 Jenkins 轻量，允许使用类似 `docker-compose` 的语法来定义自动化过程。

在启动 `sudo docker-compose up` 之前，拷贝`.env.example`文件为： `.env`，修改对应内容：

```
DRONE_GOGS_SERVER=http://192.168.11.10:3000
DRONE_SERVER_PROTO=http
DRONE_SECRET=jEsjIqrs5Sz6U9qocuUUkYq9D038ECOQ9FjwgLWohHBEJMmbYHJE22ZXSf7G5AQw
```

## reference

- 源代码 <https://github.com/drone/drone>
- 官方文档 <http://docs.drone.io/installation/>
