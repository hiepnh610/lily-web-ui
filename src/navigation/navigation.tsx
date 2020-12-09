import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import RoutesInterface from '../interfaces';
import routes from '../routes';

function MainNavigation () {
  return (
    <Switch>
      {
        routes.map((route: RoutesInterface) => {
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

MainNavigation.propTypes = {
  // routes: PropTypes.array.isRequired,
};

export default MainNavigation;
