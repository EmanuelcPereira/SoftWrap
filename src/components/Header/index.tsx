import logoImg from '../../assets/logo.png';
import { Container, Content } from './style';

interface HeaderProps {
  onOpenRegisterModal: () => void;
}

export function Header({ onOpenRegisterModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="SoftWrap" />
        <button type="button" onClick={onOpenRegisterModal}>
          Novo Cadastro
        </button>
      </Content>
    </Container>
  );
}
