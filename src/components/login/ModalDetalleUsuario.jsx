import { Modal, Button } from 'react-bootstrap';

const ModalDetalleUsuario = ({ show, handleClose, usuario }) => {
    
    // Si medico es null o undefined, no mostramos nada
    if (!usuario) {
        return null; 
    }

    // Aquí se muestran todos los datos que quieres ver
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Información Usuario</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h5>{usuario.nombre}</h5>
                <hr />
                <p><strong>Edad:</strong> {usuario.edad}</p>
                <p><strong>Email:</strong> {usuario.email}</p>
                <p><strong>Contraseña:</strong> {usuario.contraseña}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDetalleUsuario;