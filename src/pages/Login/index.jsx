import React from 'react';
import { useFormState } from 'react-use-form-state';
import { Button, Form, Input, Icon } from 'antd';

import { Desktop, Mobile } from '@/pages/Responsive.js'
import './index.less'

function Login(props) {
  const [formState, { text, email, password, radio }] = useFormState();
  //npm install --save rc-form-hooks
  // https://www.jianshu.com/p/fc59cb61f7cc
  return (
    <div className='login'>
        <Desktop>
          <div className='login-box'>
            <Form className="login-form">
              <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
              </Form.Item>
              <Form.Item>
                <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />
                  
              </Form.Item>
              <Form.Item>
                <Button type="primary" onClick={()=>{console.log('dsa')}} className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Desktop>
        <Mobile>
          <div className='login-mobile-box'>

                      
          </div>
        </Mobile>
    </div>
  );
}

export default Login;