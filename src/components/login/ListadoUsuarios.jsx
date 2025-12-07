
import ItemUsuario from './ItemUsuario';
import Table from 'react-bootstrap/Table';




const ListadoUsuarios = ({usuarios, crearUsuario, borrarUsuario}) => {


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
            usuarios.map((usuario, index) => <ItemUsuario usuario={usuario} index={index} crearUsuario={crearUsuario} borrarUsuario={borrarUsuario}/> )
        }
            
        </tbody>
      </Table>
    </div>
  )
}

export default ListadoUsuarios
