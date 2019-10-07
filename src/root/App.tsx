import React, { FC } from 'react';
import Routes from './Routes';
import NavBar from './components/NavBar';

const App: FC = () => (
  <>
    <NavBar />
    <main>
      <Routes />
    </main>
  </>
);

export default App;
