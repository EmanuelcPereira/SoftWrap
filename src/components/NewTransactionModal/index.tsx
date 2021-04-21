import Modal from 'react-modal';
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
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <h1>Cadastrar nova pessoa</h1>
        <input type="text" placeholder="Digite o nome" />

        <input type="text" placeholder="Digite a idade" />

        <select name="estado-civil" id="estado-civil">
          <option value="">Selecione</option>
          <option value="casado">Casado</option>
          <option value="solteiro">Solteiro</option>
        </select>

        <input type="text" placeholder="Informe o CPF" />

        <select name="cidade" id="cidade">
          <option value="">Selecione</option>
          <option value="Brasilia">Brasilia</option>
          <option value="Sorriso">Sorriso</option>
        </select>

        <select name="estado" id="Estado">
          <option value="">Selecione</option>
          <option value="DF">DF</option>
          <option value="MT">MT</option>
        </select>
      </Container>
    </Modal>
  );
}
