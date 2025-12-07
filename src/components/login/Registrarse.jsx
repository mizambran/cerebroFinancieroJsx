import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";


const Registrarse = () => {
  
  const {register, handleSubmit, reset, formState:{errors}, getValues} = useForm()

  const usuariosLocalStorage = JSON.parse(localStorage.getItem("usuariosKey")) || [];

  const [usuarios , setUsuarios] = useState(usuariosLocalStorage);

  
  const crearUsuario = (data) => {
    setUsuarios([...usuarios, data])

    reset()

    
  }

  useEffect(() => {
    localStorage.setItem("usuariosKey", JSON.stringify(usuarios))
  }, [usuarios])

    return (
    <div className="container my-5">

      <Form onSubmit={handleSubmit(crearUsuario)} >
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ej: Juan" {...register("nombre", {
          required: "Este es un campo obligatorio",
          minLength:{
            value: 3,
            message: "Tienes que ingresar al menos tres caracteres"
          },
          maxLength:{
            value: 30,
            message: "No puedes ingresar mas de treinta caracteres"
          }
        })} />
        <Form.Text className="text-danger">
          {errors.nombre?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Edad</Form.Label>
        <Form.Control type="number" placeholder="Ej: 9" {...register("edad" , {
          required:"Este es un campo obligatorio",
          min:{
            value: 18,
            message: "Tienes que ser mayor de edad"
          }
        })} />
        <Form.Text className="text-danger">
          {errors.edad?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ej: juanperez@gmail.com" {...register("email", {
          required:"Este es un campo obligatorio",
          pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message:
                    "El email debe ser un correo valido por ej: juanperez@gmail.com",
                },
        })} />
        <Form.Text className="text-danger">
          {errors.email?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresa una contraseña" {...register("contraseña", {
          required:"Tienes que ingresar una contraseña",
          pattern: {
                    value:
                      /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{6,12}$/,
                    message:
                      "La contrasenia debe tener entre 6 y 16 caracteres, al menos un número, al menos una minuscula, al menos una mayuscula y al menos un caracter especial",
                  },
        })} />
        <Form.Text className="text-danger">
          {errors.contraseña?.message}
        </Form.Text>
      </Form.Group>
      

      <Form.Group className="mb-3">
        <Form.Label>Confirmar Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Repetir contraseña" {...register("contraseña_confirmar", {
                  required: "Tienes que repetir la contraseña",
                  validate: (value) => value === getValues('contraseña') || `❌ Las contraseñas no coinciden`
                  
                })} />
        <Form.Text className="text-danger">
          {errors.contraseña_confirmar?.message}
        </Form.Text>
      </Form.Group>
        

      <Button variant="primary" type="submit">
        Registrar
      </Button>
    </Form>


    </div>
  )
}

export default Registrarse
