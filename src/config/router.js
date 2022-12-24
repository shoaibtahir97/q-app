import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    Navigate
} from 'react-router-dom';

import Dashboard from '../views/Dashboard';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/profile",
        element: <Profile />
    }
])

export default function Router() {
    const router = createBrowserRouter(

    )

    return <RouterProvider router={router} />
}



