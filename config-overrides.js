const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
    }),
    // 添加别名
    addWebpackAlias({
        '@': path.resolve(__dirname, 'src'),
        '@library': path.resolve(__dirname, 'src/library'),
        '@pages': path.resolve(__dirname, 'src/pages'),
    })
);