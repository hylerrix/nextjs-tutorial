// @deno-types="https://deno.land/x/pagic@v0.9.1/src/types/react/v16.13.1/react.d.ts"
import React from 'https://dev.jspm.io/react@16.13.1';
export default {
    srcDir: 'site',
    theme: 'docs',
    plugins: ['sidebar', 'prev_next'],
    title: 'Blitz.js + React 全栈开发手册',
    description: 'Blitz + React 全栈开发手册，构建下一代 React 全栈应用',
    github: 'https://github.com/hylerrix/blitzjs-tutorial',
    head: (React.createElement("link", { rel: "icon", type: "image/png", href: "/favicon.png" })),
    nav: [
        { text: '文章', link: '/articles/' },
        {
            text: '打赏一下!!',
            link: 'http://qiniu.ningo.cloud/hylerrix/reward-alipay.png',
            target: '_blank',
            popover: (React.createElement(React.Fragment, null,
                React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-alipay.png", width: "256", style: { marginRight: '1rem', verticalAlign: 'top' } }),
                React.createElement("img", { src: "http://qiniu.ningo.cloud/hylerrix/reward-wechat.png", width: "256", style: { verticalAlign: 'top' } })))
        },
        { text: 'Deno 钻研之术', target: '_blank', link: 'https://github.com/hylerrix/deno-tutorial' },
        { text: 'Deno 算法之旅', target: '_blank', link: 'https://github.com/hylerrix/deno-algorithm' },
        { text: 'Blitz.js', target: '_blank', link: 'https://blitzjs.com/' },
        { text: '持续添加中...', target: '_blank', link: 'https://github.com/hylerrix' },
        {
            text: '凝果屋',
            link: 'https://github.com/ningowood',
            target: '_blank',
            popover: (React.createElement("img", { src: "http://qiniu.ningo.cloud/ningo/official-qrcode.png", width: "256", style: { verticalAlign: 'top' } }))
        },
        { text: '关于', target: '_blank', link: 'https://github.com/hylerrix' },
    ],
    sidebar: {
        '/articles/': [
            'articles/README.md',
            {
                link: 'articles/blitz/README.md',
                title: 'Blitz.js 篇',
                children: [
                    'articles/blitz/blitz-introduction-1.md',
                ],
            },
            {
                link: 'articles/blitz/README.md',
                title: '探索篇',
                children: [
                    'articles/explore/create-react-app-intro.md',
                    'articles/explore/javascript-toolchain-rome.md',
                ],
            },
        ],
    },
    tools: {
        editOnGithub: true,
        backToTop: true
    },
    port: 8011
};
