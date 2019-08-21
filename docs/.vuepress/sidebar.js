module.exports = [
  {
    title: "安装",
    collapsable: false,
    children: prefix("install", [
      "centos-init",
      "docker",
      "docker-compose",
      "gogs",
      "drone"
    ])
  },
  {
    title: "配置",
    collapsable: false,
    children: prefix("config", ["drone"])
  }
];

function prefix(prefix, children) {
  return children.map(child => `${prefix}/${child}`);
}
