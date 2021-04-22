import { useEffect, useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import database from '../../services/firebase';
import { Container } from './styles';

interface RegisterProps {
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

export function InfoTable() {
  const [dadosCadastro, setDadosCadastro] = useState<RegisterProps[]>([]);

  useEffect(() => {
    database.child('registers').on('value', snapshot => {
      setDadosCadastro(Object.values(snapshot.val()));
    });
  }, []);

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
            <th>Alterar</th>
          </tr>
        </thead>

        <tbody>
          {dadosCadastro.map(register => (
            <tr key={register.name}>
              <td>{register.name}</td>
              <td>{register.age}</td>
              <td>{register.maritalStatus}</td>
              <td>{register.cpfId}</td>
              <td>{register.city}</td>
              <td>{register.state}</td>
              <td>
                <button type="button" className="icon">
                  <FiEdit3 />
                </button>
                <button type="button" className="icon">
                  <FiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
