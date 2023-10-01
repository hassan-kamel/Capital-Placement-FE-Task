import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ConfigProvider } from 'antd';
import { GlobalStateProvider } from './contexts/GlobalState';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#00635B',
          colorInfoBg: '#D0F7FA',
        },
      }}>
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
