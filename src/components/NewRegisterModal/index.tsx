import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { FiX } from 'react-icons/fi';
import { Form } from './styles';
import AppModal from '../Modal';
import Input from '../Input';

interface NewRegisterProps {
  id: string;
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

interface ICreateRegister {
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

interface NewRegisterModalProps {
  isOpen: boolean;
  handleAddRegister: (register: Omit<NewRegisterProps, 'id'>) => void;
  setIsOpen: () => void;
}
const NewRegisterModal: React.FC<NewRegisterModalProps> = ({
  isOpen,
  setIsOpen,
  handleAddRegister,
}: NewRegisterModalProps) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: ICreateRegister) => {
      handleAddRegister(data);
      setIsOpen();
    },
    [handleAddRegister, setIsOpen],
  );

  return (
    <AppModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <button type="button" onClick={setIsOpen} className="react-modal-close">
        <FiX />
      </button>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <h2>Cadastrar nova pessoa</h2>

        <Input name="name" placeholder="Digite seu nome" />
        <Input name="age" placeholder="Digite sua idade" />
        <Input name="cpfId" placeholder="Digite seu CPF" />
        <Input name="maritalStatus" placeholder="Digite seu estado civil" />
        <Input name="city" placeholder="Digite sua cidade" />
        <Input name="state" placeholder="Digite seu estado" />

        <button type="submit">Cadastrar</button>
      </Form>
    </AppModal>
  );
};

export default NewRegisterModal;
