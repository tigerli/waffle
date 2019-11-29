import React, {useState, useEffect} from 'react';
import { Button, Form, Input, Icon } from 'antd';
import { useHistory} from 'react-router-dom'
import { Desktop, Mobile } from '@/pages/Responsive.js'
import './index.less'


function FormBox(props) {
  let history = useHistory();
  const [count] = useState({a: 12});

  useEffect(() => {
      console.log('effect');
      return () => {
          console.log('clean')
      }
  }, [count])

  function handleSubmit(e){
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        history.push("/index");
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <div>
      <Form className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            initialValue: 'dsa',
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            initialValue: 'dsa',
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" size="large" onClick={handleSubmit} className="login-form-button">
            Log in
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
    <div className='login'>
        <Desktop>
          <div className='login-box'>
            <FormBoxWrapper />
          </div>
        </Desktop>
        <Mobile>
          <div className='login-mobile-box'>
            <FormBoxWrapper />     
          </div>
        </Mobile>
    </div>
  );
}

export default Login;