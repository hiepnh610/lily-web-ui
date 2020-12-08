import LoginPage from 'src/pages/Login';

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
