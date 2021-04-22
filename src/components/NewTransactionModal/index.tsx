import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { Container } from './styles';
import database from '../../services/firebase';

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [cpfId, setCpfId] = useState('');
  const [maritalStatus, setMaritalStatus] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  async function handleCreateNewRegister(event: FormEvent) {
    event.preventDefault();

    database.child('registers').push({
      name,
      age,
      cpfId,
      maritalStatus,
      city,
      state,
    });
    setName('');
    setAge(0);
    setCpfId('');
    setMaritalStatus('');
    setCity('');
    setState('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="reaact-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <FiX />
      </button>

      <Container onSubmit={handleCreateNewRegister}>
        <h2>Cadastrar nova pessoa</h2>

        <input
          type="text"
          placeholder="Digite o nome"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <input
          type="number"
          placeholder="Digite a idade"
          value={age}
          onChange={event => setAge(Number(event.target.value))}
        />

        <input
          type="text"
          placeholder="Informe o CPF"
          value={cpfId}
          onChange={event => setCpfId(event.target.value)}
        />

        <input
          type="text"
          placeholder="Qual o estado civil"
          value={maritalStatus}
          onChange={event => setMaritalStatus(event.target.value)}
        />

        <input
          type="text"
          placeholder="Informe a cidade"
          value={city}
          onChange={event => setCity(event.target.value)}
        />

        <input
          type="text"
          placeholder="Informe o estado"
          value={state}
          onChange={event => setState(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
