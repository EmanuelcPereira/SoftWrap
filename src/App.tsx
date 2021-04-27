import { useState } from 'react';
import Modal from 'react-modal';
import { GlobalStyle } from './styles/global';

import { Dashboard } from './pages/Dashboard';

Modal.setAppElement('#root');

interface RegisterProps {
  id: string;
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

export function App() {
  return (
    <>

      <Dashboard />

      <GlobalStyle />
    </>
  );
}

export default App;
