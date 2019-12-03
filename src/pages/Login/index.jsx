import React, {useState, useEffect} from 'react';
import { Button, Form, Input, Icon } from 'antd';
import { useHistory} from 'react-router-dom'
import style from './index.module.less'
import { post, get } from '@http/index'
function FormBox(props) {
    let {loading, setLoading} = useState(false)

    const [count] = useState({a: 12})
    // let request = request
    useEffect(() => {
        console.log('effect')
        return () => {
            console.log('clean')
        }
    }, [count])

    function handleSubmit(e){
        e.preventDefault()
        props.form.validateFields((err, values) => {
            post('/api/login', 
                {
                    username:'dsa', 
                    password: 'dsa'
                },
                function(res){
                    console.log(res)
                },
                function(err){
                    console.log(`${err},dsa`)
                },
                function(){
                    console.log('dsa')
                }
            )
        // if (!err) {
        //   history.push("/index");
        // }
        })
    }
    function test(){
        get(
            '/api/news', 
            {}, 
            function(res){
                console.log(res)
            },
            function(err){
                console.log(`${err},dsa`)
            }
        )
    }
    const { getFieldDecorator } = props.form
    return (
        <div>
            <Form className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        initialValue: 'dsa',
                        rules: [{ required: true, message: '用户名不能为空' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        initialValue: 'dsa',
                        rules: [{ required: true, message: '密码不能为空' }],
                    })(
                        <Input.Password
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />
                    )}
                </Form.Item>
                <Form.Item labelAlign='right' labelCol={{span: 3, offset: 12}}>
                    <Button onClick={handleSubmit} type="primary" shape="round" loading={loading?true:false}>
                        登录
                    </Button>
                    <Button onClick={test}>
                        测试
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}
const FormBoxWrapper = Form.create({ name: 'normal_login' })(FormBox);

function Login(props) {
    //npm install --save rc-form-hooks
    // https://www.jianshu.com/p/fc59cb61f7cc
    return (
        <div className={style.app}>
            <div className={style.rectangle}>
                <FormBoxWrapper />
            </div>
        </div>
    )
}

export default Login;