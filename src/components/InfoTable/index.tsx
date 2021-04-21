import { FiEdit3, FiTrash } from 'react-icons/fi';
import { Container } from './styles';

export function InfoTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Idade</th>
            <th>Estado Civil</th>
            <th>CPF</th>
            <th>Cidade</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Fulano da Silva</td>
            <td>19 anos</td>
            <td>Solteiro</td>
            <td>000.000.000-00</td>
            <td>Brasília</td>
            <td>DF</td>
            <button type="button" className="icon">
              <FiEdit3 />
            </button>
            <button type="button" className="icon">
              <FiTrash />
            </button>
          </tr>

          <tr>
            <td>Fulano da Silva</td>
            <td>19 anos</td>
            <td>Solteiro</td>
            <td>000.000.000-00</td>
            <td>Brasília</td>
            <td>DF</td>
            <button type="button" className="icon">
              <FiEdit3 />
            </button>
            <button type="button" className="icon">
              <FiTrash />
            </button>
          </tr>

          <tr>
            <td>Fulano da Silva</td>
            <td>19 anos</td>
            <td>Solteiro</td>
            <td>000.000.000-00</td>
            <td>Brasília</td>
            <td>DF</td>
            <button type="button" className="icon">
              <FiEdit3 />
            </button>
            <button type="button" className="icon">
              <FiTrash />
            </button>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
