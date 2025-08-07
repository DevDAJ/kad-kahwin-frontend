import Main from '@/pages/Main';
import { RouteObject } from 'react-router';

export const routes = [
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/admin',
    element: ''
  }
] as RouteObject[];
