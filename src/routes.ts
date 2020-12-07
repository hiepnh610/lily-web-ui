import LoginPage from 'src/pages/login';

const routes = [
  {
    auth: false,
    exact: true,
    component: LoginPage,
    name: 'Login',
    path: '/',
  },
];

export default routes;
