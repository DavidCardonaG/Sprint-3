import { Form} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import {registroEmailPasswordNombre} from '../Actions/actionRegister';
import {useDispatch} from 'react-redux'

 const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    });

    const { nombre, email, pass1, pass2 } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email,pass1,nombre))
    }

    return (
        <div className="container  mt-3">
            <img className="logo-Amazon" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1633306315/logo-amazon_jan4vi.png" alt="amazonas"/>
            <div className="container-registro">
                <h1>Crear Cuenta </h1>
            <Form onSubmit={handleRegistro}>
                <div>
                    <label className="email-login">Tu Nombre</label>
                    <input
                        type="text"
                        name="nombre"
                        className="input-email"
                        value={nombre}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="email-login">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        className="input-email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </div>

                <div>
                    <label className="email-login">Contraseña</label>
                    <input
                        type="password"
                        placeholder="Como mínimo 6 caracteres"
                        name="pass1"
                        className="input-email"
                        value={pass1}
                        onChange={handleInputChange}
                    />
                    <p  className="parrafo"><i id="info" class="fas fa-info"></i> La contraseña debe contener al menos seis caracteres.</p>
                </div>

                <div>
                    <label className="email-login">Vuelve a escribir la contraseña</label>
                    <input
                        type="password"
                        name="pass2"
                        className="input-email"
                        value={pass2}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="btn-reg">
                <button className="button-enviar" type="submit">
                    Crea tu cuenta de Amazonas
                </button>
                <p className="parrafo">Al crear una cuenta, aceptas las Condiciones de Uso y el Aviso de Privacidad de amazonas.com.</p>
                </div>
                <br/>
                <p>¿Ya tienes una cuenta?  <Link to="/" className="link-reg ">Iniciar Sesión</Link></p>
                <p>¿Compras para el trabajo?  <Link to="/" className="link-reg">Crea Una cuenta corporativa Gratis</Link></p>

            </Form>
            </div>

        </div>
    )
}

export default Registro