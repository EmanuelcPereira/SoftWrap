import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';

import { Dashboard } from './pages/Dashboard';

Modal.setAppElement('#root');

export function App() {
  return (
    <>

      <Dashboard />

      <GlobalStyle />
    </>
  );
}

export default App;
