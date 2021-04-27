import React, { useRef, useCallback } from 'react';

import { FormHandles } from '@unform/core';
import { FiX } from 'react-icons/fi';
import Input from '../Input';
import { Form } from './styles';
import AppModal from '../Modal';

interface RegisterProps {
  id: string;
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

interface EditRegisterModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleUpdateRegister: (register: Omit<RegisterProps, 'id'>) => void;
  editRegister: RegisterProps;
}

interface EditRegister {
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

const EditRegisterModal: React.FC<EditRegisterModalProps> = ({
  isOpen,
  setIsOpen,
  handleUpdateRegister,
  editRegister,
}: EditRegisterModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: EditRegister) => {
      handleUpdateRegister(data);
      setIsOpen();
    },
    [handleUpdateRegister, setIsOpen],
  );

  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <button type="button" onClick={setIsOpen} className="react-modal-close">
        <FiX />
      </button>

      <Form ref={formRef} onSubmit={handleSubmit} initialData={editRegister}>
        <h2>Editar cadastro</h2>

        <Input name="name" placeholder="Digite seu nome" />
        <Input name="age" placeholder="Digite sua idade" />
        <Input name="cpfId" placeholder="Digite seu CPF" />
        <Input name="maritalStatus" placeholder="Digite seu estado civil" />
        <Input name="city" placeholder="Digite sua cidade" />
        <Input name="state" placeholder="Digite seu estado" />

        <button type="submit">Atualizar</button>
      </Form>
    </AppModal>
  );
};

export default EditRegisterModal;
