import { useForm } from "react-hook-form"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Login = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState:{errors}
    } = useForm()


    return (
    <div>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu email" {...register("usuario", 
            {
                required: "Tienes que ingresa tu email, para acceder"
            }
        )} />
        <Form.Text className="text-muted">
          {errors.usuario?.message}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresa la contraseña" {...register("contraseña", {
            required: "Tiene que ingresa la contraseña, para poder acceder"
        })} />
        <Form.Text className="text-muted">
          {errors.contraseña?.message}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
      <Button variant="danger"  >
        Registrarse
      </Button>
    </Form>
    </div>
  )
}

export default Login
