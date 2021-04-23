import { useEffect, useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import database from '../../services/firebase';
import { Container } from './styles';
import { EditRegisterModal } from '../EditRegisterModal/index';

interface RegisterProps {
  id: string;
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

interface InfoTableProps {
  onhandleOpenEditRegisterModal: (register: RegisterProps) => void;
}

export function InfoTable({ onhandleOpenEditRegisterModal }: InfoTableProps) {
  const [dadosCadastro, setDadosCadastro] = useState<RegisterProps[]>([]);

  useEffect(() => {
    database.ref('registers').on('value', snapshot => {
      if (snapshot.val() !== null) { setDadosCadastro(Object.values(snapshot.val())); }
    });
  }, []);

  async function handleDeleteRegister(register: RegisterProps) {
    database.ref('registers').child(register.id).set(null);
  }

  return (
    <>
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
              <tr key={register.id}>
                <td>{register.name}</td>
                <td>{register.age}</td>
                <td>{register.maritalStatus}</td>
                <td>{register.cpfId}</td>
                <td>{register.city}</td>
                <td>{register.state}</td>
                <td>
                  <button type="button" className="icon" onClick={() => onhandleOpenEditRegisterModal(register)}>
                    <FiEdit3 />
                  </button>
                  <button type="button" className="icon" onClick={() => handleDeleteRegister(register)}>
                    <FiTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
