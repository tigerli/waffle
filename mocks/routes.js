const { API} = require('./config.js') // 引入配置信息
// 自定义路由匹配规则
module.exports = {
    [API + '/*'] : '/$1' // 路由请求由/mock/*接管
}