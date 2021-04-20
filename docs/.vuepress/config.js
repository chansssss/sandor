module.exports = {
    base: '/sandor/',
    title: '全干指南',
    description: 'Full To Dev',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        extractHeaders: ['h2', 'h3', 'h4', 'h5'],
        extendMarkdown: md => {
            // 使用更多的 markdown-it 插件!
            md.use(require('@wesi/markdown-it-webview'))
          }
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/nprogress',
        'vuepress-plugin-mermaidjs'
    ],
    themeConfig: {
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '博客',
                link: '/blog/'
            }
            // {
            //     text: '项目',
            //     link: '/project/'
            // },
        ],
        sidebar: {
            '/blog/': [
                ['', '序'],
                '浏览器相关',
                'Html',
                'Css',
                'JavaScript',
                'Http',
            ],
        },
        lastUpdated: '上次更新时间',
        repo: 'wesi0912/sandor',
        repoLabel: 'Github',
        docsDir: 'docs',
        docsBranch: 'master',
    }
}
