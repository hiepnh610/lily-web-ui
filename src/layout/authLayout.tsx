import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from 'src/navigation';

function AuthLayout () {
  return (
    <Router>
      <Navigation />
    </Router>
  );
}

export default AuthLayout;
