const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const QiniuPlugin = require('qiniu-webpack-plugin')
const env = process.env.NODE_ENV

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                // scss全局变量放在这里
                data: `@import "@/assets/scss/base.scss";`
            }
        }
    },
    pages: {
        global: {
            entry: 'src/pages/global_dating/main.js',
            template: 'public/global-interracial-dating.html',
            filename: 'global-interracial-dating.html',
        },
        elite: {
            entry: 'src/pages/elite_dating/main.js',
            template: 'public/elite-dating.html',
            filename: 'elite-dating.html',
        },
        senior: {
            entry: 'src/pages/senior_dating/main.js',
            template: 'public/senior-dating.html',
            filename: 'senior-dating.html',
        },
        fun: {
            entry: 'src/pages/fun_dating/main.js',
            template: 'public/fun-dating.html',
            filename: 'fun-dating.html',
        },
        goal: {
            entry: 'src/pages/goal_dating/main.js',
            template: 'public/dating-goals.html',
            filename: 'dating-goals.html',
        },
        rich: {
            entry: 'src/pages/rich_dating/main.js',
            template: 'public/millionaire-dating.html',
            filename: 'millionaire-dating.html',
        },
    },
    configureWebpack: config => {
        if (env === 'production') {
            config.plugins.push(new QiniuPlugin({
                    ACCESS_KEY: 'gUj40toJvkFqlAHxWuegsy1tWq6C7yzPzxCvKiBs',
                    SECRET_KEY: 'nr8QO7TDfQJIslWtLeW1NLYnKWjKtwLONDfd4RDb',
                    bucket: 'spacdn',
                    path: '',
                    include: [
                        // 避免上传html
                        /.*\.(js|css|eot|woff|svg|ttf)$/,
                        /.*\.(eot|woff|svg|ttf)$/,
                        /.*\.(png|jpg|gif|ico)$/,
                        /.*\.(mp3|wav)$/
                    ]
                }),
                new PrerenderSPAPlugin({
                    staticDir: path.join(__dirname, 'dist'),
                    outputDir: path.join(__dirname, 'prerendered'),
                    routes: ['/dating-goals.html', '/elite-dating.html', '/fun-dating.html', '/global-interracial-dating.html', '/millionaire-dating.html', '/senior-dating.html'],
                    postProcess(renderedRoute) {
                        if (renderedRoute.route.endsWith('.html')) {
                            renderedRoute.outputPath = path.join(__dirname, 'prerendered', renderedRoute.route)
                        }
                        return renderedRoute
                    }
                })
            )
        } else {
            // 为开发环境修改配置...
        }
    },
    baseUrl: env === 'production' ? 'https://spacdn.hellobyebye.com/' : '',
    assetsDir: env === 'production' ? 'static' : ''
}