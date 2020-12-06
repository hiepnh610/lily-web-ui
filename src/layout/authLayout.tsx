import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../navigation';

function AuthLayout () {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default AuthLayout;
