import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
