import logoImg from '../../assets/logo2.png';
import { Container, Content } from './style';

interface HeaderProps {
  openRegisterModal: () => void;
}

export function Header({ openRegisterModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="SoftWrap" />
        <button type="button" data-testid="add-register-button" onClick={openRegisterModal}>
          Novo Cadastro
        </button>
      </Content>
      <hr />
    </Container>
  );
}
