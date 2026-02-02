import React from 'react'
import { createBrowserRouter, RouterProvider ,Navigate } from 'react-router-dom'
import Mainlayout from '../layouts/Mainlayout'
import Home from '../pages/home/Home'
import Blog from '../pages/blog/Blog'
import NotFound from '../pages/404/Not-found'
import BlogDetails from '../pages/blog-details/blog-details'
import WhoAreWe from '../pages/whoAreWe/WhoAreWe'


const routes = createBrowserRouter([
    {path:'' , element:<Mainlayout/> , children :[
        {path: '', element: <Navigate to="home" replace />},
        {path:'home' , element:<Home/>},
        {path:'blog' , element:<Blog/>},
        {path:'/blog/:slug' , element:<BlogDetails/>},
        {path:'who-are-we' , element:<WhoAreWe/>},
        {path:'*' , element:<NotFound/>}
    ]},
])


export default function AppRoutes() {
  return <>
  <RouterProvider router={routes}/>
  </>
}
