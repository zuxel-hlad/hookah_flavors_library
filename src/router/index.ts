import Home from '../pages/Home';
import NotFound from '../pages/404';
import Details from '../pages/Details';
import { IRoute } from './router.types';
const router: IRoute[] = [
    {
        path: '/',
        element: Home,
    },

    {
        path: '/details',
        element: Details,
    },

    {
        path: '*',
        element: NotFound,
    },
];

export default router;
