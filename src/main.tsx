import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'; 
import { router } from './routes';
import { UIProvider } from '@core/context/ui/UIProvider';
import App from './app';
import './index.css'

console.log("render")
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIProvider>
      <App />
    </UIProvider>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
