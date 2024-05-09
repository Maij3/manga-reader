import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'; 
import { router } from './routes';
import App from "./app";
import { UIProvider } from '@core/context/ui/UIProvider';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
