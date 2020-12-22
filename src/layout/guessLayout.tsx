import React, { Component } from 'react';
import { Route } from 'react-router-dom';

function GuessLayout ({ children }) {
  return (
    <>{children}</>
  );
};

function GuessLayoutRoute ({component: Component, ...rest}) {
  return (
    <Route {...rest} render={matchProps => (
      <GuessLayout>
        <Component {...matchProps} />
      </GuessLayout>
    )} />
  )
};

export default GuessLayoutRoute;
