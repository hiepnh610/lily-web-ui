import React from 'react';
import { useSelector } from 'react-redux';

import AuthLayout from './layout/authLayout';
import GuessLayout from './layout/guessLayout';

import { RootState } from './store/reducers';

function App () {
  const { auth } = useSelector((state: RootState) => state);

  return (
    auth.isSignedIn ? <AuthLayout /> : <GuessLayout />
  );
}

export default App;
