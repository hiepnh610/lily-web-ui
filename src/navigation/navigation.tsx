import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RoutesInterface from '../interfaces';
import routes from '../routes';

import GuessLayoutRoute from '../layout/guessLayout';
import AuthLayoutRoute from '../layout/authLayout';

import { RootState } from '../store/reducers';

function MainNavigation () {
  const { auth } = useSelector((state: RootState) => state);

  return (
    <Switch>
      {
        routes
        .filter((route) => route.auth === auth.isSignedIn)
        .map((route: RoutesInterface) => {
          return (
            auth.isSignedIn ?
              <AuthLayoutRoute
                exact={route.exact}
                path={route.path}
                key={route.name}
                component={route.component} /> :
              <GuessLayoutRoute
                exact={route.exact}
                path={route.path}
                key={route.name}
                component={route.component} />
          );
        })
      }
    </Switch>
  );
}

export default MainNavigation;
