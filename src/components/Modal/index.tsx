import React, { useState, useEffect } from 'react';

import Modal from 'react-modal';

interface RegisterProps {
  id: string;
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

interface IModalProps {
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const AppModal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }: IModalProps) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <Modal
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      style={{
        content: {
          width: '30%',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '10px',
          background: '#CFCFD3',
          padding: '20px',
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default AppModal;
