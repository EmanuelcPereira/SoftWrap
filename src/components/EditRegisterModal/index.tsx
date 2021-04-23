import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import { Container } from './styles';
import database from '../../services/firebase';

interface RegisterProps {
  id: string;
  name: string;
  age: number;
  city: string;
  cpfId: string;
  maritalStatus: string;
  state: string;
}

interface EditRegisterModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onSelectedRow: RegisterProps;
}

export function EditRegisterModal({
  isOpen,
  onRequestClose,
  onSelectedRow,
}: EditRegisterModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data: RegisterProps) => {
    database.ref('registers').child(onSelectedRow.id).update(data);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="reaact-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <FiX />
      </button>

      <Container onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar cadastro</h2>

        <input
          type="text"
          defaultValue={onSelectedRow.name}
          id="name"
          {...register('name')}
        />
        <input
          type="text"
          defaultValue={onSelectedRow.age}
          id="age"
          {...register('age')}
        />
        <input
          type="text"
          defaultValue={onSelectedRow.cpfId}
          id="cpfId"
          {...register('cpf')}
        />
        <input
          type="text"
          defaultValue={onSelectedRow.maritalStatus}
          id="maritalStatus"
          {...register('maritalStatus')}
        />
        <input
          type="text"
          defaultValue={onSelectedRow.city}
          id="city"
          {...register('city')}
        />
        <input
          type="text"
          defaultValue={onSelectedRow.state}
          id="state"
          {...register('state')}
        />

        <button type="submit">Atualizar</button>
      </Container>
    </Modal>
  );
}
