import {Navigate, createBrowserRouter} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home/Home'
import Category from '../pages/Home/Category/Category'
import NewsLayouts from '../layouts/NewsLayouts'
import News from '../pages/News/News/News'
import LoginLayOut from '../layouts/LoginLayOut'
import Login from '../pages/Login/Login/Login'
import Register from '../pages/Login/Register/Register'
import PrivateRoute from './PrivateRoute'
import Terms from '../pages/Shared/Terms/Terms'

const router = createBrowserRouter([
    {
       path:'/',
       element:<LoginLayOut />,
       children:[
        {
            path:'/',
            element: <Navigate to='/category/0'></Navigate>
        },
        {
            path:'login',
            element: <Login />
        },
        {
            path:'register',
            element: <Register />
        },
        {
            path:'terms',
            element: <Terms />
        },
       ]
    },
    {
        path: 'category',
        element:<MainLayout />,
        children:[
            {
                path: ':id',
                element: <Category />,
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
           
        ]

    },
    {
        path:'/news',
        element: <NewsLayouts />,
        children: [
            {
              path: ':id',
              element: <PrivateRoute><News /></PrivateRoute>,
              loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`) 
            }
        ]
    }

])

export default router