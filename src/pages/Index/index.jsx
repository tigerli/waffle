import React, {Suspense, useEffect} from 'react';
import { Link, withRouter, useHistory, Route} from 'react-router-dom'
import { Layout, Menu, Icon} from 'antd'
import style from './index.module.less'
import { inject, observer } from 'mobx-react'
const A = React.lazy(() => import("@pages/Index/Demo/A"));
const B = React.lazy(() => import("@pages/Index/Demo/B"));
const { SubMenu } = Menu;
const { Header, Sider, Content } = Layout;

let Index = inject('systemStore')(observer((props) => {
  let history = useHistory();
  let a = 'a';
  if(a !== 'a'){
    history.push("/login");
  }
  useEffect(() => {
    console.log('effect');
    return () => {
        console.log('clean')
    }
  }, [])
  let {systemStore} = props
  return (
    <Layout className={`${style.app} ${systemStore.dark?style.dark:''}`}>
      <Sider collapsed={systemStore.collapsed}>
        <div style={{flex:"0 0 200px",lineHeight:'64px'}}>
          <Icon type="pie-chart" />
          <span>Login</span>
        </div>
        <Menu mode={`${systemStore.mode}`} theme={`${systemStore.theme}`}>
          <Menu.Item>
            <Link to='/index/a'>
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Link>
          </Menu.Item>
          <SubMenu title={
              <span>
                <Icon type="appstore" />
                <span>Navigation Three</span>
              </span>
            }>
            <Menu.Item>
              <Link to='/index/a'>
                <Icon type="desktop" />
                <span>Option 2</span>
              </Link>
            </Menu.Item>
            <Menu.Item><Link to='/index/b'>B</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          dsa
        </Header>
        <Content>
          <Suspense fallback={<div>loading...</div>}>
            <Route path="/index/a" component={A} />
            <Route path="/index/b" component={B} />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  );
}))


export default withRouter(Index);