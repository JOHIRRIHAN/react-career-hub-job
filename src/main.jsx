import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Home/Home';
// import Jobs from './Components/Jobs/Jobs';
import Staticses from './Components/Staticses/Staticses';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';
import ErrorPae from './Components/ErrorPage/ErrorPae';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    errorElement: <ErrorPae></ErrorPae>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      
      {
        path: '/statics',
        element: <Staticses></Staticses>
      },
      {
        path: '/applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },

    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>

  </React.StrictMode>,
)
