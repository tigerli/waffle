import axios from 'axios'
import {message} from 'antd'

const token = ''
// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。'
// }

// 全局的默认值
if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = 'https://www.baidu.com'
}else{
    axios.defaults.baseURL = 'https://www.production.com'
}
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`


const validateStatus = function (status) {
    return status < 500
}


// 实例方法(方法名前缀存在async，为异步方法，例如：asyncGet)
const asyncGet =  (api, params = {}, config = {}) =>{
    message.destroy()
    try {
        message.loading('Action in progress..', 0)
        let res =  axios.get(api, {
            params: params
        })
        return res
    } catch (err) {
        console.log('321')
        console.log(err.message)
        message.error('请求出错！', 4)
    } finally {
        // 无论是否有异常发生都会执行。对关闭打开的链接和释放资源有用。
    }
}

const get = async (api, params = {}, config = {}) =>{
    message.destroy()
    try {
        message.loading('Action in progress..', 0)
        let res = await axios.get(api, {
            params: params
        })
        return res
    } catch (err) {
        console.log('321')
        console.log(err.message)
        message.error('请求出错！', 4)
    } finally {
        // 无论是否有异常发生都会执行。对关闭打开的链接和释放资源有用。
    }
}

/**
 * 模块说明:有api_token的请求
 */
const request = (api, method = 'get', params = {}, config = {}) => {
    message.destroy()
    message.loading('Action in progress..', 0)
    const apiToken = '************'
    method.toUpperCase()
    const data = (method === 'GET') ? 'params' : 'data'
    let headers = {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiToken}`,
    }
    if (config.headers) {
        headers = {
            ...headers,
            ...config.headers
        }
    }
    return new Promise((resolve, reject) => {
        axios({
            url: api,
            method,
            [data]: params,
            headers
        }).then(resolve)
            .catch(error => {
                console.dir(error)
                message.destroy()
                // Message.error(typeof error.response.data === 'string' ? error.response.data : JSON.stringify(error.response.data))
                
                reject(error)
            })
    })
}

export {
    request,
    get,
    asyncGet
} 