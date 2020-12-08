import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../navigation';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

function AuthLayout () {
  return (
    <Router>
      <Header />

      <section className="flex h-screen">
        <SideBar />

        <main className="w-5/6 bg-green-600">
          <Navigation />
        </main>
      </section>
    </Router>
  );
}

export default AuthLayout;
