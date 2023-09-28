import { MenuOutlined, UnorderedListOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import React, { ReactNode } from 'react';
import { centerChildren } from '../utils';
const { Header, Content, Sider } = Layout;

const links = [
  { title: 'Program Details', path: '/program-details' },
  { title: 'Application Form', path: '/application-form' },
  { title: 'Workflow', path: '/workflow' },
  { title: 'Preview', path: '/preview' },
];

const items2: MenuProps['items'] = [
  MenuOutlined,
  HomeOutlined,
  UnorderedListOutlined,
  UserOutlined,
].map((icon, index) => {
  const key = String(index + 1);

  let style: React.CSSProperties = { width: 'auto' };
  if (index === 0) style = { ...style, marginBottom: '30px' };
  else if (index === 3)
    style = {
      ...style,
      height: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    style: style,
  };
});

type Props = {
  children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout
      style={{
        padding: ' 0',
        background: colorBgContainer,
        minHeight: '10vh',
      }}>
      <Sider style={{ background: colorBgContainer, padding: ' 0', margin: '0' }} collapsed>
        <Menu
          mode='inline'
          defaultSelectedKeys={['sub2']}
          defaultOpenKeys={['sub2']}
          style={{
            height: '100%',
          }}
          items={items2}
        />
      </Sider>

      <Content style={{ padding: '0' }}>
        <Header
          className='header'
          style={{
            padding: '0',
            background: 'transparent',
          }}>
          <Menu
            mode='horizontal'
            defaultSelectedKeys={['menu-item-1']}
            className='menu'
            multiple={false}
            style={{
              padding: '0',
              marginTop: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'stretch',
              background: 'transparent',
            }}
            // onSelect={(e) => {
            //   // console.log('🚀 ~ file: AppLayout.tsx:97 ~ AppLayout ~ e:', e);
            //   const elementStyle = e.domEvent.currentTarget.style;
            //   elementStyle.backgroundColor = colorPrimary;
            //   elementStyle.color = 'white';
            // }}
            items={
              links && // if didn't write it , it will throw  "Uncaught TypeError: Cannot read properties of undefined (reading 'forEach'),"
              links.map((link, index) => ({
                label: link.title,
                key: `menu-item-${index}`,
                style: { flex: '1', ...centerChildren },

                // onMouseEnter: (e) => {
                //   const elementStyle = e.domEvent.currentTarget.style;
                //   elementStyle.backgroundColor = colorPrimary;
                //   elementStyle.color = 'white';
                // },
                // onMouseLeave: (e) => {
                //   const elementStyle = e.domEvent.currentTarget.style;
                //   elementStyle.backgroundColor = 'transparent';
                //   elementStyle.color = colorPrimary;
                // },
                // onSelectStart: () => {
                //   console.log('🚀 ~ file: AppLayout.tsx:112 ~ links.map ~ event:');
                // },
                className: 'link',

                onClick: () => {},
              }))
            }></Menu>
        </Header>

        <main style={{ padding: '50px' }}>{children}</main>
      </Content>
    </Layout>
  );
};

export default AppLayout;
