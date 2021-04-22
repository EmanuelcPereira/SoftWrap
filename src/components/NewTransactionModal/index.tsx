import Modal from 'react-modal';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';

interface NewTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionProps) {
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

      <Container>
        <h2>Cadastrar nova pessoa</h2>

        <input type="text" placeholder="Digite o nome" />

        <input type="text" placeholder="Digite a idade" />

        <input type="text" placeholder="Informe o CPF" />

        <input type="text" placeholder="Qual o estado civil" />

        <input type="text" placeholder="Informe a cidade" />

        <input type="text" placeholder="Informe o estado" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
