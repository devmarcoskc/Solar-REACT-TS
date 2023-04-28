import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './Contexts/Context';
import AllPages from './AllPages';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <AllPages />
      </React.StrictMode>
    </BrowserRouter>
  </ContextProvider>,
)
