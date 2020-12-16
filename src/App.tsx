import React from 'react';
import PropTypes from 'prop-types';

import AuthLayout from './layout/authLayout';
import GuessLayout from './layout/guessLayout';

function App (props: any) {
  console.log('props', props);
  return (
    true ? <AuthLayout /> : <GuessLayout />
  );
}

App.propTypes = {
  // auth: PropTypes.object.isRequired,
};

export default App;
