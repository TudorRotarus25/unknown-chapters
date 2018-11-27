import Homepage from './containers/Homepage.vue';
import Epk from './containers/Epk.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Homepage,
  },
  {
    path: '/epk',
    name: 'epk',
    component: Epk,
  },
];

export default routes;
