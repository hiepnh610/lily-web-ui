import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainNavigation from '../navigation';
import MainHeader from '../components/header';
import MainSideBar from '../components/sideBar';

function AuthLayout () {
  return (
    <Router>
      <MainHeader />

      <section className="flex h-screen">
        <MainSideBar />

        <main className="w-5/6 bg-green-600">
          <MainNavigation />
        </main>
      </section>
    </Router>
  );
}

export default AuthLayout;
