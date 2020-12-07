import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from '../navigation';

function AuthLayout () {
  return (
    <Router>
      <header className="py-2 border-gray-200 border-b fixed w-full bg-white">
        <div className="container mx-auto">
          header
        </div>
      </header>

      <section className="flex h-screen">
        <aside className="w-1/6 bg-red-600">
          Sidebar
        </aside>

        <main className="w-5/6 bg-green-600">
          <Navigation />
        </main>
      </section>
    </Router>
  );
}

export default AuthLayout;
