import projectConfig from '/pagic.config.js';
import IndexPage from './index_content.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "index.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': "",
    'content': React.createElement(IndexPage, { config: {
            branch: 'main',
            description: 'Blitz + React 全栈开发手册，构建下一代 React 全栈应用',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'dist'
            ],
            github: 'https://github.com/hylerrix/react-fullstack-handbook',
            head: React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
            include: undefined,
            nav: [
                {
                    link: '/articles/',
                    text: '文章'
                },
                {
                    link: 'http://qiniu.ningo.cloud/hylerrix/reward-alipay.png',
                    popover: React.createElement(React.Fragment, null,
                        React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-alipay.png", style: { marginRight: '1rem', verticalAlign: 'top' }, width: "256" }),
                        React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-wechat.png", style: { verticalAlign: 'top' }, width: "256" })),
                    target: '_blank',
                    text: '打赏一下!!'
                },
                {
                    link: 'https://github.com/hylerrix/deno-tutorial',
                    target: '_blank',
                    text: 'Deno 钻研之术'
                },
                {
                    link: 'https://blitzjs.com/',
                    target: '_blank',
                    text: 'Blitz.js'
                },
                {
                    link: 'https://github.com/hylerrix',
                    target: '_blank',
                    text: '持续添加中...'
                },
                {
                    link: 'https://github.com/ningowood',
                    popover: React.createElement("img", { src: "http://qiniu.ningo.cloud/ningo/official-qrcode.png", style: { verticalAlign: 'top' }, width: "256" }),
                    target: '_blank',
                    text: '凝果屋'
                },
                {
                    link: 'https://github.com/hylerrix',
                    target: '_blank',
                    text: '关于'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'prev_next'
            ],
            port: 8011,
            root: '/',
            serve: false,
            sidebar: {
                '/articles/': [
                    'articles/README.md',
                    {
                        children: [
                            'articles/blitz/blitz-introduction.md'
                        ],
                        link: 'articles/blitz/README.md',
                        title: 'Blitz.js 篇'
                    },
                    {
                        children: [
                            'articles/explore/create-react-app-intro.md',
                            'articles/explore/javascript-toolchain-rome.md'
                        ],
                        link: 'articles/blitz/README.md',
                        title: '探索篇'
                    }
                ]
            },
            srcDir: 'site',
            theme: 'docs',
            title: 'Blitz.js + React 全栈开发手册',
            tools: {
                backToTop: true,
                editOnGithub: true
            },
            watch: false
        }, content: null, head: React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }), layoutPath: "_layout.tsx", outputPath: "index.html", pagePath: "index.tsx", script: null, title: "" }),
    'head': React.createElement("link", { href: "/favicon.png", rel: "icon", type: "image/png" }),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" }))
};
