import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import ListadoUsuarios from "./ListadoUsuarios";
import Swal from "sweetalert2";
import ModalDetalleUsuario from "./ModalDetalleUsuario";


const Registrarse = () => {
  
   /* EDITAR */
  
  const [estoyEditando, setEstoyEditando] = useState(false)
  const [usuarioEditar, setUsuarioEditar] = useState(null)
  
    /* VER */

  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const verDetalleUsuario = (usuario) =>{
    setUsuarioSeleccionado(usuario);
    setMostrarModal(true)
  };

  const handleCloseModal = () =>{
    setMostrarModal(false)
    setUsuarioSeleccionado(null)
  }
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    setValue
  } = useForm();

  const usuariosLocalStorage =
    JSON.parse(localStorage.getItem("usuariosKey")) || [];

  const [usuarios, setUsuarios] = useState(usuariosLocalStorage);

  const crearYEditarUsuario = (data) => {
    
    if(estoyEditando){

      /* Cuando estoyEditando sea true, se ejecuta el codigo */
      const listadoUsuariosActualizado = usuarios.map(usuario => usuario.email === usuarioEditar ? {...data, role: "usuario"} : usuario )
    
      setUsuarios(listadoUsuariosActualizado)
      setEstoyEditando(false)
      setUsuarioEditar(null)

      Swal.fire({
                title: "Usuario Actualizado!",
                text: `${data.nombre} ha sido modificado.`,
                icon: "success",
            });

    } else {

      /* CREAR */  
      const nuevoUsuario = {
        ...data, role:"usuario"
      }

      setUsuarios([...usuarios, nuevoUsuario])

      Swal.fire({
          title: "Creaste un usuario!",
          text: `${data.nombre_y_apellido_medico} esta habilitado.`,
          icon: "success",
        });

        reset();

    }
        
  };


  const modificarUsuario = (email) => {

    const usuarioSeleccionado = usuarios.find((usuario) => usuario.email === email);

    if(usuarioSeleccionado){

      setEstoyEditando(true)
      setUsuarioEditar(email)

      setValue('nombre', usuarioSeleccionado.nombre)
      setValue('edad', usuarioSeleccionado.edad)
      setValue('email', usuarioSeleccionado.email)
      setValue('contraseña', usuarioSeleccionado.contraseña)
      setValue('contraseña_confirmar', usuarioSeleccionado.contraseña)

      

    }
    
  }

  useEffect(() => {
    localStorage.setItem("usuariosKey", JSON.stringify(usuarios));
  }, [usuarios]);

  const borrarUsuario = (email) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Los datos no se podrán recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        const listadoUsuariosActualizado = usuarios.filter(
          (itemUsuario) => itemUsuario.email !== email
        );

        setUsuarios(listadoUsuariosActualizado);

        Swal.fire({
          title: "Usuario Eliminado",
          text: "El Usuario ha sido removido de la lista.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
    <h1 className="text-center mt-5"> {estoyEditando ? "Editar Usuario" : "Registro Usuarios"} </h1>
      <div className="container my-5">
        <Form onSubmit={handleSubmit(crearYEditarUsuario)}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej: Juan"
              {...register("nombre", {
                required: "Este es un campo obligatorio",
                minLength: {
                  value: 3,
                  message: "Tienes que ingresar al menos tres caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "No puedes ingresar mas de treinta caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.nombre?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Edad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 18"
              {...register("edad", {
                required: "Este es un campo obligatorio",
                min: {
                  value: 18,
                  message: "Tienes que ser mayor de edad",
                },
                max: {
                  value: 90,
                  message: "Decime tu secreto para vivir tanto jaja",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.edad?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ej: juanperez@gmail.com"
              {...register("email", {
                required: "Este es un campo obligatorio",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El email debe ser un correo valido por ej: juanperez@gmail.com",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.email?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa una contraseña"
              {...register("contraseña", {
                required: "Tienes que ingresar una contraseña",
                minLength: {
                  value:6,
                  message:
                    "La contrasenia debe tener al menos 6 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.contraseña?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Repetir contraseña"
              {...register("contraseña_confirmar", {
                required: "Tienes que repetir la contraseña",
                validate: (value) =>
                  value === getValues("contraseña") ||
                  `❌ Las contraseñas no coinciden`,
              })}
            />
            <Form.Text className="text-danger">
              {errors.contraseña_confirmar?.message}
            </Form.Text>
          </Form.Group>
          <Button variant={estoyEditando ? "success" : "primary"} type="submit">
            {estoyEditando ? "Guardar Cambios" : "Registrar"}
          </Button>
          {estoyEditando && (
           <Button variant="secondary" className="ms-2" onClick={() =>{
            setEstoyEditando(false)
            setUsuarioEditar(null)
            reset()
           }} >
            Cancelar
           </Button> 
          )}
        </Form>
      </div>
      <div className="container mb-5">
        <ListadoUsuarios usuarios={usuarios} verDetalleUsuario={verDetalleUsuario} borrarUsuario={borrarUsuario} modificarUsuario={modificarUsuario} />
        <ModalDetalleUsuario show={mostrarModal} handleClose={handleCloseModal} usuario={usuarioSeleccionado} />
      </div>
    </>
  );
};

export default Registrarse;
