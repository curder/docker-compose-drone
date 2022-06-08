export default {
    base: "/docker-compose-drone/",
    title: "Drone ❤️ CI",
    description: "Using drone for gogs git server",
    themeConfig: {
        // editLink: {
        //     pattern: 'https://github.com/curder/docker-compose-drone/edit/main/docs/:path',
        //     text: '编辑当前页'
        // },
        // displayAllHeaders: false,
        // sidebarDepth: 2,
        // nav: [{text: "README", link: "/"}],
        sidebar: [{
            text: "安装",
            items: [
                {text: '初始化CentOS', link: '/install/centos-initialization'},
                {text: '安装Docker', link: '/install/docker'},
                {text: '安装Docker Compose', link: '/install/docker-compose'},
                {text: '安装Gogs', link: '/install/gogs'},
                {text: '安装 Drone', link: '/install/drone'},
            ],
        }, {
            text: "配置", items: [
                {text: '配置 Drone', link: "/config/drone"},
            ]
        }],
    }
};
