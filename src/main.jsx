import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Mobiles from './Components/Mobiles/Mobiles.jsx';
import Headphones from './Components/Headphones/Headphones.jsx';
import Users from './Components/Users/Users.jsx';
import Users2 from './Components/Users2/Users2.jsx';


const userPromise= fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "headphones", Component: Headphones },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users
      },
      {
        path: "users2",
        element: <Suspense fallback={<span>Loading......</span>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      }
    ]
  },
  {
    path: "about",
    element: <div>About Me</div>
  },
  {
    path: "contact",
    element: <div>Contact Me </div>
  },
  {
    path: "app",
    Component: App,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
