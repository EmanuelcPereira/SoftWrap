import logoImg from '../../assets/logo.png';
import { Container, Content } from './style';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="SoftWrap" />
        <button type="button">Novo Cadastro</button>
      </Content>
    </Container>
  );
}
