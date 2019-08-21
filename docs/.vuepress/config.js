module.exports = {
  //   base: "/docker-compose-drone/",
  base: "/",
  title: "Drone ❤️ CI",
  description: "",
  themeConfig: {
    editLinks: false,
    displayAllHeaders: false,
    sidebarDepth: 2,
    nav: [{ text: "README", link: "/" }],
    sidebar: {
      "/": require("./sidebar")
    }
  }
};
