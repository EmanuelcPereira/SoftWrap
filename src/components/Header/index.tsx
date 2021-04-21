import logoImg from '../../assets/logo.png';
import { Container, Content } from './style';

interface HeaderProps {
  onOpenTransactionModal: () => void;
}

export function Header({ onOpenTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="SoftWrap" />
        <button type="button" onClick={onOpenTransactionModal}>
          Novo Cadastro
        </button>
      </Content>
    </Container>
  );
}
