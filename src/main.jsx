import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom";
import Root from './Root'
import './index.css'
import Tasks from "./Tasks";
import Workspaces from "./Workspaces/index.jsx";
import Examples from "./Examples";
import {ErrorRoute} from "./ErrorRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "workspaces/*",
                element: <Workspaces />,
            },
            {
                path: "tasks/*",
                element: <Tasks />,
            },
            {
                path: "examples/*",
                element: <Examples />,
            },
        ],
        errorElement: (<ErrorRoute/>)
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <div className="App">
          <RouterProvider router={router} />
      </div>
  </React.StrictMode>
)
