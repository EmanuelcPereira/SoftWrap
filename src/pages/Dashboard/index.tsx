import { useEffect, useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';
import { v4 as uuidv4 } from 'uuid';
import { database } from '../../services/firebase';
import { Header } from '../../components/Header';
import NewRegisterModal from '../../components/NewRegisterModal';
import EditRegisterModal from '../../components/EditRegisterModal';
import { Container } from './styles';

interface RegisterProps {
  id: string;
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

type IRegisterData = Omit<RegisterProps, 'id'>;

export function Dashboard() {
  const [registerData, setRegisterData] = useState<RegisterProps[]>([]);
  const [editRegister, setEditRegister] = useState<RegisterProps>({} as RegisterProps);
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    database.ref('registers').on('value', snapshot => {
      setRegisterData(Object.values(snapshot.val()));
    });
  }, []);

  async function handleAddRegister(register: IRegisterData): Promise<void> {
    const id = uuidv4();
    const {
      name, age, cpfId, maritalStatus, city, state,
    } = register;
    try {
      await database.ref('registers').child(id).set({
        id,
        name,
        age,
        cpfId,
        maritalStatus,
        city,
        state,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function HandleUpdateRegister(register: IRegisterData): Promise<void> {
    try {
      const response = await database.ref('registers').child(editRegister.id).update({
        ...editRegister,
        ...register,
      });
      setRegisterData(
        registerData.map(mappedRegister => (mappedRegister.id === editRegister.id
          ? { ...response.data } : mappedRegister)),
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteRegister(register: RegisterProps): Promise<void> {
    try {
      database.ref('registers').child(register.id).set(null);
      setRegisterData(registerData.filter(data => data.id !== register.id));
    } catch (err) {
      console.log(err);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditRegister(register: RegisterProps): void {
    setEditRegister(register);
    toggleEditModal();
  }

  return (
    <>
      <Header openRegisterModal={toggleModal} />

      <NewRegisterModal
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddRegister={handleAddRegister}
      />

      <EditRegisterModal
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editRegister={editRegister}
        handleUpdateRegister={HandleUpdateRegister}
      />

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
            {registerData.map(register => (
              <tr key={register.id}>
                <td>{register.name}</td>
                <td>{register.age}</td>
                <td>{register.maritalStatus}</td>
                <td>{register.cpfId}</td>
                <td>{register.city}</td>
                <td>{register.state}</td>
                <td>
                  <button type="button" className="icon" onClick={() => handleEditRegister(register)}>
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
