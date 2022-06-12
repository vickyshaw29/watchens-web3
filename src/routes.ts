import { IRoute } from './interfaces';
import {HomePage} from './components/pages'

const routes: IRoute[] = [
  {
    name: 'homePage',
    path: '/',
    exact: true,
    component: HomePage,
  },
];

export default routes;