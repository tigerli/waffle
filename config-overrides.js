const { 
    override, 
    addDecoratorsLegacy, 
    fixBabelImports, 
    addLessLoader, 
    addWebpackAlias 
} = require('customize-cra')
const AntDesignThemePlugin = require('antd-theme-webpack-plugin')
const path = require('path')

const options = {
    antDir: path.join(__dirname, './node_modules/antd'), // antd包位置
    stylesDir: path.join(__dirname, './src/styles'), //主题文件所在文件夹
    varFile: path.join(__dirname, './src/styles/variables.less'), // 自定义默认的主题色
    //mainLessFile: path.join(__dirname, './src/styles/index.less'), // 项目中其他自定义的样式（如果不需要动态修改其他样式，该文件可以为空）
    outputFilePath: path.join(__dirname, './public/color.less'), //提取的less文件输出到什么地方
    themeVariables: [
        '@primary-color'
    ], //要改变的主题变量
    indexFileName: './public/index.html', // index.html所在位置
    lessUrl: 'https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js',
    generateOnce: false // 是否只生成一次
}

const addTheme = () => (config) => {
    config.plugins.push(new AntDesignThemePlugin(options))
    console.log(config)
    return config
}

module.exports = override(
    // 装饰器语法
    addDecoratorsLegacy(),
    // 自动加载antd
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    // less
    addLessLoader({
        javascriptEnabled: true,
        localIdentName: '[local]--[hash:base64:5]'
    }),
    // 路径别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@library': path.resolve(__dirname, 'src/library'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@store': path.resolve(__dirname, 'src/store'),
        '@req': path.resolve(__dirname, 'src/library/utils/axios'),
    }),
    // 主题
    addTheme()
)