import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [isTransationModalOpen, setIsTransationModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setIsTransationModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsTransationModalOpen(false);
  }
  return (
    <>
      <Header onOpenTransactionModal={handleOpenTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isTransationModalOpen}
        onRequestClose={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
