import ItemUsuario from './ItemUsuario';
import Table from 'react-bootstrap/Table';




const ListadoUsuarios = ({usuarios,verDetalleUsuario, borrarUsuario, modificarUsuario}) => {


    return (
    <div >
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Email</th>
          <th>Contraseña</th>
          <th>Funciones</th>
          <th>Habilitado</th>

        </tr>
      </thead>
        <tbody>
            
            {
            usuarios.map((usuario, index) => <ItemUsuario usuario={usuario} index={index} verDetalleUsuario={verDetalleUsuario}  borrarUsuario={borrarUsuario} modificarUsuario={modificarUsuario}/> )
        }
            
        </tbody>
      </Table>
    </div>
  )
}

export default ListadoUsuarios
