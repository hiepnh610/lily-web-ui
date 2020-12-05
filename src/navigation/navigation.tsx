import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';

import interfaces from 'src/interfaces';

console.log('interfaces', interfaces);

function Navigation (auth: any, routes: any) {
  return (
    <Router>
      <Switch>
        {
          routes.map((route: any) => {
            return (
              <Route
                exact={route.exact}
                path={route.path}
              >
                {route.component}
              </Route>
            );
          })
        }
      </Switch>
    </Router>
  );
}

Navigation.propTypes = {
  // routes: PropTypes.array.isRequired,
};

export default Navigation;
