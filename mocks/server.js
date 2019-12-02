const jsonServer = require('json-server') // 引入json-server服务
const {HOST, PORT, DB_FILE, API} = require('./config.js') // 引入配置信息
const rules = require('./routes') // 引入自定义路由匹配规则
const data = require(DB_FILE)() // 获取到mockJS模拟的数据
const middleWares = jsonServer.defaults() // 使用json-server默认的中间件

// 服务器搭建
const server = jsonServer.create() // 创建http服务
const router = jsonServer.router(data) // 将路由配置和生成的数据以对象的形式传递给jsonServer.router()方法


server.use(jsonServer.bodyParser) // 安装json-server自带的body-parser，用于获取非地址栏传递的数据
server.use(middleWares) // 安装中间件
// 响应/mock/req请求,进行注册操作
// 注意： 自定义路由响应需要在安装json-server的router之前
server.post(`/${API}/reg`, ({body:{username='', password=''}}, res) => {
    (username !== 'admin' && password) ?
        res.jsonp({
            'err': 0,
            'msg': '注册成功',
            'data': {
                username,
                password
            }
        }) :
        res.jsonp({
            'err': 1,
            'msg': '注册失败'
        })
})
// 响应/mock/login,进行登录验证操作
server.post(`/${API}/login`, ({body:{username='',password=''}}, res) => {
    (username === 'user' && password === 'user123456') ?
        res.jsonp({
            'err': 0,
            'msg': '登录成功',
            'userInfo': {
                'address': '打破',
                'email': 'louis.lyr@outlook.com',
                'tel': '15185724613'
            }
        }) :
        res.jsonp({
            'err': 1,
            'msg': '登录失败'
        })
})

// 自定义返回内容
router.render = (req, res) => {
    let status = ''
    let len = Object.keys(res.locals.data).length // 判断是否获取到mockJS模拟的数据
    if (res.req.originalMethod === 'DELETE') {
        status = len === 0
    } else {
        status = !!len
    }
    
    setTimeout(() => {  // 由于本地请求速度较快，不方便loading动效显示利用延时器，模拟真实服务器请求速度
        res.jsonp({  // 使用res.jsonp()方法将mockJS模拟生成的数据进行自定义包装后输出
            err: status ? 0 : 1,
            msg: '操作' + (status ? '成功' : '失败'),
            data: res.locals.data
        })
    }, 1000)
}

server.use(jsonServer.rewriter(rules)) // 根据需要重写路由匹配规则
server.use(router) // 安装路由
// console.log(server)
// 监听http服务
server.listen({
    host: HOST,
    port: PORT
}, () => {
    console.log(`正在运行json-server http://${HOST}:${PORT}`)
})