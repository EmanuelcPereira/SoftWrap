import { Container } from './styles';
import { Header } from '../Header';
import { InfoTable } from '../InfoTable';

export function Dashboard() {
  return (
    <Container>
      <Header />
      <InfoTable />
    </Container>
  );
}
