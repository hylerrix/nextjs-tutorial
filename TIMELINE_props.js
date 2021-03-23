import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "TIMELINE.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "TIMELINE.html",
    'title': "开发日志",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>开发日志</h1>\n<h2 id="20210323">20210323<a class="anchor" href="#20210323">§</a></h2>\n<ul>\n<li>初始化仓库，使用 Pagic v1.2.0 和 Deno v1.8.0 构建</li>\n<li>从《Deno 钻研之术》仓库中迁移之前的 React 相关文章到这里</li>\n<li>发布第一篇 Blitz.js 文章</li>\n</ul>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u5F00\u53D1\u65E5\u5FD7"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h2 id="20210323">20210323<a class="anchor" href="#20210323">§</a></h2>\n<ul>\n<li>初始化仓库，使用 Pagic v1.2.0 和 Deno v1.8.0 构建</li>\n<li>从《Deno 钻研之术》仓库中迁移之前的 React 相关文章到这里</li>\n<li>发布第一篇 Blitz.js 文章</li>\n</ul>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#20210323" }, "20210323")))),
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ],
    'date': "2021-03-23T03:22:56.000Z",
    'updated': null,
    'excerpt': "20210323 - 初始化仓库，使用 Pagic v1.2.0 和 Deno v1.8.0 构建 - 从《Deno 钻研之术》仓库中迁移之前的 React 相关文章到这里 - 发布第一篇 Blitz.js 文章",
    'cover': undefined
};
