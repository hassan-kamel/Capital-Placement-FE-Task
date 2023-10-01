import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStateProvider } from './contexts/GlobalState';

// Create a client
const queryClient = new QueryClient();

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
      <QueryClientProvider client={queryClient}>
        <GlobalStateProvider>
          <App />
        </GlobalStateProvider>
      </QueryClientProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
