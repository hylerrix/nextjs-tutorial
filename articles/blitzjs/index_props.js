import projectConfig from '/pagic.config.js';
export default {
    'prev': undefined,
    'next': undefined,
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "articles/blitzjs/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "articles/blitzjs/index.html",
    'title': "Blitz.js 篇",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Blitz.js 篇</h1>'
        } }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Blitz.js \u7BC7"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "hylerrix",
    'contributors': [
        "hylerrix"
    ],
    'date': "2021-03-23T07:13:02.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'sidebar': [
        {
            "link": "articles/blitz/README.md",
            "title": "Blitz.js 篇",
            "children": [],
            "text": "articles/blitz/README.md"
        },
        {
            "link": "articles/blitz/README.md",
            "title": "探索篇",
            "children": [
                {
                    "text": "深入浅出 Create React App",
                    "link": "articles/explore/create-react-app-intro.html",
                    "pagePath": "articles/explore/create-react-app-intro.md"
                },
                {
                    "text": "欲取代绝大多 JavaScript 工具链？Rome 尝鲜",
                    "link": "articles/explore/javascript-toolchain-rome.html",
                    "pagePath": "articles/explore/javascript-toolchain-rome.md"
                }
            ],
            "text": "articles/blitz/README.md"
        }
    ]
};
