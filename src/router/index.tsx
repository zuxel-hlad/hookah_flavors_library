import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/404';
import Details from '../pages/Details';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/details',
        element: <Details />,
    },
    {
        path: '*',
        element: <NotFound />,
    },
]);

export default router;
