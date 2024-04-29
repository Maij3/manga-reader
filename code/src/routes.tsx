import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>Home</div>
    ),
    errorElement: (
      <div>Error</div>
    ),
    children: [
      
    ]
  }
])

export {router};