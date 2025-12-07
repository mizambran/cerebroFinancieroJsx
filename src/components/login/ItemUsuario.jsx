import Button from 'react-bootstrap/Button';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const ItemUsuario = ({usuario, index, crearUsuario}) => {
  return (
    <>
    <tr>
    <td> {index + 1} </td>
    <td> {usuario.nombre} </td>
    <td> {usuario.email} </td>
    <td>{usuario.contraseña}</td>
    <td className='d-flex justify-content-evenly' >
    <Button variant="warning"><FaPencilAlt /></Button>
    <Button variant="danger"><FaTrash /></Button>
    </td>
    <td></td>
    </tr>
    </>
  )
}

export default ItemUsuario
