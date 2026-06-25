import { createBrowserRouter } from 'react-router';
import Login  from './pages/Login';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Layout from './Layout';
import Landing from './pages/Landing.tsx';

export const router = createBrowserRouter([
    { path: '/', Component: Landing},
    {
        path: '/app',
        Component: Layout,
        children: [
            { index: true, Component: Dashboard },
        ]
    },
    { path: '/login', Component: Login },
    { path: 'signUp', Component: SignUp}
]);