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
import Users from './components/home/Users.jsx';
import SingleUser from './components/home/SingleUser.jsx';
import Posts from './components/home/Posts.jsx';
import PostDetails from './PostDetails.jsx';


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
      },{
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: 'user/:userID',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <SingleUser></SingleUser>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path: '/posts/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.userId}`),
        element: <PostDetails></PostDetails>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
