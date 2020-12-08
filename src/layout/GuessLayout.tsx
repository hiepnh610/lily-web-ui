import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../components/Header';

function GuessLayout () {
  return (
    <Router>
      <Header />

      <section>GuessLayout</section>
    </Router>
  );
}

export default GuessLayout;
