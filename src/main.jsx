import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '@fontsource/roboto';
import ResetStyle from './styles/ResetStyle.jsx';
import GlobalStyle from './styles/GlobalStyle.jsx';
import UserProvider from './contexts/userContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
);
