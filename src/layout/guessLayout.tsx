import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainNavigation from '../navigation';
import MainHeader from '../components/header';

function GuessLayout () {
  return (
    <Router>
      <MainHeader />

      <MainNavigation />
    </Router>
  );
}

export default GuessLayout;
