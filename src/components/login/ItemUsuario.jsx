import Button from 'react-bootstrap/Button';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaCheck  } from 'react-icons/fa';

const ItemUsuario = ({usuario, index, crearUsuario, borrarUsuario}) => {
  return (
    <>
    <tr>
    <td> {index + 1} </td>
    <td> {usuario.nombre} </td>
    <td> {usuario.email} </td>
    <td>{usuario.contraseña}</td>
    <td  >
    <Button variant='primary' className='me-2' ><FaEye /></Button>
    <Button variant="warning" className='me-2'><FaPencilAlt /></Button>
    <Button variant="danger" className='me-2' onClick={() => borrarUsuario={usuario}} ><FaTrash /></Button>
    </td>
    <td >
        <Button variant="success" className='me-2'><FaCheck /></Button>
        <Button variant="secondary"  ><FaLock /></Button>
    </td>
    </tr>
    </>
  )
}

export default ItemUsuario
