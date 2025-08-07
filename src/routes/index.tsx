import Reserves from '@/pages/Admin/Reserves';
import Main from '@/pages/Main';
import { RouteObject } from 'react-router';

export const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/admin',
    children: [
      {
        index: true,
        element: <Reserves />,
      },
    ],
  },
] as RouteObject[];
