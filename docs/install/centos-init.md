# 服务器初始化

## 替换阿里镜像源

```bash
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
sudo curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
sudo yum makecache
```

## 升级常用工具

```bash
sudo yum install -y git vim gcc glibc-static telnet bridge-utils wget net-tools
```

