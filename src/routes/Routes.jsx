import {createBrowserRouter} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home/Home/Home'
import Category from '../pages/Home/Category/Category'
import NewsLayouts from '../layouts/NewsLayouts'
import News from '../pages/News/News/News'

const router = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                element: <Category />
            },
           
        ]

    },
    {
        path:'/news',
        element: <NewsLayouts />,
        children: [
            {
              path: ':id',
              element: <News />  
            }
        ]
    }

])

export default router