import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import RoutesInterface from '../interfaces';
import routes from '../routes';

function Navigation () {
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

Navigation.propTypes = {
  // routes: PropTypes.array.isRequired,
};

export default Navigation;
