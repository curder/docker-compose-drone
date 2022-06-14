import{_ as e,c as s,o,a}from"./app.455015e5.js";const _='{"title":"\u5B89\u88C5 docker-compose","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5B89\u88C5","slug":"\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5B89\u88C5"},{"level":2,"title":"\u67E5\u770Bdocker\u4FE1\u606F","slug":"\u67E5\u770Bdocker\u4FE1\u606F"}],"relativePath":"install/docker-compose.md"}',n={name:"install/docker-compose.md"},r=a(`<h1 id="\u5B89\u88C5-docker-compose" tabindex="-1">\u5B89\u88C5 <a href="https://docs.docker.com/compose/install/" target="_blank" rel="noopener noreferrer">docker-compose</a> <a class="header-anchor" href="#\u5B89\u88C5-docker-compose" aria-hidden="true">#</a></h1><h2 id="\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5B89\u88C5" tabindex="-1">\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5B89\u88C5 <a class="header-anchor" href="#\u4E0B\u8F7D\u4E8C\u8FDB\u5236\u5B89\u88C5" aria-hidden="true">#</a></h2><p>\u4E3A\u4E86\u83B7\u5F97\u6700\u65B0\u7248\u672C\uFF0C\u8BF7\u53C2\u8003 <a href="https://github.com/docker/compose/releases" target="_blank" rel="noopener noreferrer">Docker \u6587\u6863</a>\u5E76\u4ECE Docker \u7684 GitHub \u5B58\u50A8\u5E93\u4E2D\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\u5B89\u88C5 Docker Compose\u3002</p><p>\u68C0\u67E5<a href="https://github.com/docker/compose/releases" target="_blank" rel="noopener noreferrer">\u5F53\u524D\u7248\u672C</a>\uFF0C\u5982\u6709\u5FC5\u8981\uFF0C\u5728\u4EE5\u4E0B\u547D\u4EE4\u4E2D\u66F4\u65B0\u5B83\uFF1A</p><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> DOCKER_COMPOSE_VERSION=2.5.1 </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> sudo curl -L </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://github.com/docker/compose/releases/download/v</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">DOCKER_COMPOSE_VERSION</span><span style="color:#C3E88D;">/docker-compose-</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">uname -s</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">-</span><span style="color:#89DDFF;">$(</span><span style="color:#C3E88D;">uname -m</span><span style="color:#89DDFF;">)&quot;</span><span style="color:#A6ACCD;"> -o /usr/local/bin/docker-compose</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">sudo chmod +x /usr/local/bin/docker-compose </span><span style="color:#676E95;font-style:italic;"># \u6388\u6743\u53EF\u6267\u884C\u6743\u9650</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose --version </span><span style="color:#676E95;font-style:italic;"># \u68C0\u67E5\u7248\u672C</span></span>
<span class="line"></span></code></pre></div><blockquote><p>\u4E0A\u9762\u7684\u4E0B\u8F7D\u6B65\u9AA4\u6BD4\u8F83\u6162\uFF0C\u5982\u679C\u901F\u5EA6\u592A\u6162\u7684\u8BDD\u53EF\u4EE5\u8003\u8651\u4F7F\u7528\u56FD\u5185\u955C\u50CF <a href="https://get.daocloud.io/#install-compose" target="_blank" rel="noopener noreferrer">DaoCloud</a></p></blockquote><h2 id="\u67E5\u770Bdocker\u4FE1\u606F" tabindex="-1">\u67E5\u770Bdocker\u4FE1\u606F <a class="header-anchor" href="#\u67E5\u770Bdocker\u4FE1\u606F" aria-hidden="true">#</a></h2><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker-compose info</span></span>
<span class="line"><span style="color:#A6ACCD;">docker-compose version</span></span>
<span class="line"></span></code></pre></div>`,8),c=[r];function l(p,t,d,i,h,m){return o(),s("div",null,c)}var k=e(n,[["render",l]]);export{_ as __pageData,k as default};