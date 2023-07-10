import Login from './components/Login.jsx';
import Home from './components/Home.jsx';
import Perfil from './components/Perfil.jsx';
import Contato from './components/Contato.jsx';

const routes = [
  {
    path: '/',
    exact: {},
    component: Login,
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/perfil',
    component: Perfil,
  },
  {
    path: '/contato',
    component: Contato,
  },
];

export default routes;
