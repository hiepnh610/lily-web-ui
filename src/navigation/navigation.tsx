import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import RoutesInterface from '../interfaces';
import routes from '../routes';

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
            <Route
              exact={route.exact}
              path={route.path}
              key={route.name}
            >
              {route.component}
            </Route>
          );
        })
      }
    </Switch>
  );
}

export default MainNavigation;
