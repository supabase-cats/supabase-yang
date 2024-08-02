import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme
      className="dark"
      accentColor="pink"
      grayColor="sand"
      radius="large"
      scaling="95%"
    >
      <App />
    </Theme>
  </React.StrictMode>
);
