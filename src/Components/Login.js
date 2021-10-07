import React from "react";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import {
  loginEmailPassword,
  loginGoogle,
  loginFacebook,
} from "../Actions/actionLogin";

function Login() {
  const dispatch = useDispatch();

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginEmailPassword(email, password));
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };
  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    
    <div className="cona">
    <img className="logo-Amazon" src="https://res.cloudinary.com/cardonagarciadavid11/image/upload/v1633306315/logo-amazon_jan4vi.png" alt="amazonas"/>
    <div className="container-login">
        <h1>Iniciar Sesión</h1>
    <Form onSubmit={handleLogin}>
      <div className="container">
        <label className="email-login">Dirección de correo electrónico o número de teléfono móvil</label><br></br>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          className="input-email"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="container-password">
        <label className="email-password">Contraseña</label>
        <input
          type="password"
          placeholder="Enter Password"
          className="input-email"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <button  className="button-enviar" type="submit">
        Enviar
      </button>

      <Container className="auth__social-networks">
      <div class="google-btn">
              <div class="google-icon-wrapper" onClick={handleGoogle}>
                 <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google" />
             </div>
          <p onClick={handleGoogle} class="btn-text"><b>Sign in with google</b></p>
        </div>
        {/* </Container> */}
        <div className="facebook-btn">
          <div className="facebook-icon"onClick={handleFacebook} >
            <p className="facebook">facebook</p>
          </div>
        </div>
        <p className="parrafo">Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazonas.</p>
      </Container>
    </Form>
    </div>
    <p className="p-registro">¿Eres nuevo en Amazonas?</p>
    <button className="btn-registro">
      <Link id="regis" className="regis" to="/auth/register">Crea tu cuenta en Amazonas</Link>
      </button>
    </div>
    
  );
}

export default Login;
