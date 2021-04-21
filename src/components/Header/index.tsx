import logoImg from '../../assets/logo.png';
import { Container, Content } from './style';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="SoftWrap" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Novo Cadastro
        </button>
      </Content>
    </Container>
  );
}
