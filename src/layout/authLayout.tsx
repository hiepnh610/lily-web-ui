import React, { Component } from 'react';
import { Route, RouteProps } from 'react-router-dom';

import MainHeader from '../components/header';
import MainSideBar from '../components/sideBar';

const AuthLayout: React.FC<{}> = ({ children }) => {
  return (
    <>
      <MainHeader />

      <section className="flex h-screen">
        <MainSideBar />

        <main className="w-5/6 bg-green-600">
          {children}
        </main>
      </section>
    </>
  );
};

const AuthLayoutRoute: React.FC<RouteProps> = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <AuthLayout>
        <Component {...matchProps} />
      </AuthLayout>
    )} />
  )
};

export default AuthLayoutRoute;
