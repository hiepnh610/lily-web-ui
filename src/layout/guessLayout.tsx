import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainHeader from '../components/header';

function GuessLayout () {
  return (
    <Router>
      <MainHeader />

      <section>GuessLayout</section>
    </Router>
  );
}

export default GuessLayout;
