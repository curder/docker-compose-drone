# 初始化CentOS

## 设置个性化主机名

```bash
sudo hostnamectl set-hostname drone-ci
```

## 替换阿里镜像源

> **注意：** 如果服务器在国内建议修改yum源为aliyun，如果服务器在国外可以忽略。
> 
```bash
sudo mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
sudo curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
sudo yum makecache
```

> 更多其他操作系统镜像操作[查看这里](https://opsx.alibaba.com/mirror)。


## 升级常用工具

```bash
sudo yum install -y yum-utils net-tools net-snmp wget iftop htop telnet tree git vim zip unzip curl ntpdate mlocate
```

## 修改时区&&设置时间

```bash
sudo timedatectl set-timezone Asia/Shanghai
sudo ntpdate cn.pool.ntp.org

echo "00 */10 * * * ntpdate cn.pool.ntp.org >/dev/null 2>&1" >> /var/spool/cron/root # 每天早上10定时校对时间
```

## 内核优化

```bash
echo "net.ipv4.ip_local_port_range = 1024 65535
net.core.rmem_max = 16777216
net.core.wmem_max = 16777216
net.ipv4.tcp_rmem = 4096 87380 16777216
net.ipv4.tcp_wmem = 4096 65536 16777216
net.ipv4.tcp_fin_timeout = 10
net.ipv4.tcp_tw_recycle = 1
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_window_scaling = 0
net.ipv4.tcp_sack = 0
net.core.netdev_max_backlog = 65535
net.ipv4.tcp_no_metrics_save = 1
net.core.somaxconn = 65535
net.ipv4.tcp_syncookies = 0
net.ipv4.tcp_max_orphans = 262144
net.ipv4.tcp_max_syn_backlog = 262144
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syn_retries = 2" >/etc/sysctl.conf

sysctl -w net.ipv4.route.flush=1
echo "ulimit -HSn 65536" >> /etc/rc.local
echo "ulimit -HSn 65536" >> /root/.bash_profile
ulimit -HSn 65535
```

## 新增用户

```bash
adduser curder && echo "curder-111222" | passwd --stdin "curder"
gpasswd -a curder wheel
```

> 这里假如新增一个用户名为 `curder`，密码为：`curder-111222`，并将其设置为可以通过`sudo su -`切换为root用户。

## 禁止root用户登录

```bash
sed -i 's/PermitRootLogin yes/PermitRootLogin no/g' /etc/ssh/sshd_config # 禁用服务器root远程登录
sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config # 允许使用正确的用户密码登录
systemctl reload sshd
```

## 终端配置

```bash
echo "# 终端配色
export PS1='\n\[\e[37;1m[\]\[\e[31;1m\]\u\[\e[39;1m\]@\[\e[33;1m\]\H \[\e[34;1m\]\w\[\e[37;1m\]]\n\[\e[32;1m\]\\$ \[\e[0m\]'" >> /etc/bashrc

source /etc/bashrc
```
