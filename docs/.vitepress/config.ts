import {defineConfig} from 'vitepress'

export default defineConfig({
    base: "/docker-compose-drone/",
    title: " Drone ❤️ CI",
    description: "Using drone for gogs git server",
    lastUpdated: true,
    themeConfig: {
        logo: "https://www.drone.io/images/logo2-5d91833e3b.svg",
        siteTitle: "Drone CI",
        outlineTitle: "章节导航",
        lastUpdatedText: "最后更新时间",
        editLink: {
            pattern: "https://github.com/curder/docker-compose-drone/edit/master/docs/:path",
            text: '编辑它'
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/curder/docker-compose-drone'}
        ],
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
});
