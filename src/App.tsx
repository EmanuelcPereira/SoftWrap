import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewRegisterModal } from './components/NewRegisterModal';
import { InfoTable } from './components/InfoTable';
import firebaseDB from './services/firebase';
import { EditRegisterModal } from './components/EditRegisterModal';

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
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isEditRegisterModalOpen, setIsEditRegisterModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<RegisterProps>({} as RegisterProps);

  function handleOpenRegisterModal() {
    setIsRegisterModalOpen(true);
  }

  function handleCloseRegisterModal() {
    setIsRegisterModalOpen(false);
  }

  function handleOpenEditRegisterModal(register: RegisterProps) {
    setIsEditRegisterModalOpen(true);
    setSelectedRow(register);
  }

  function handleCloseEditRegisterModal() {
    setIsEditRegisterModalOpen(false);
  }
  return (
    <>
      <Header onOpenRegisterModal={handleOpenRegisterModal} />

      <InfoTable onhandleOpenEditRegisterModal={handleOpenEditRegisterModal} />

      <NewRegisterModal
        isOpen={isRegisterModalOpen}
        onRequestClose={handleCloseRegisterModal}
      />

      <EditRegisterModal
        isOpen={isEditRegisterModalOpen}
        onSelectedRow={selectedRow}
        onRequestClose={handleCloseEditRegisterModal}
      />

      <GlobalStyle />
    </>
  );
}

export default App;
