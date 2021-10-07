import React from "react";
import Footer from '../Components/Footer'
import {useFormik} from 'formik'
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Swal from 'sweetalert2'

const Contacto = () => {

    const formik = useFormik({
        initialValues : {
            nombre:'',
            apellido:'',
            correo:'',
            telefono:'',
            comentario:''
        },
        validationSchema:Yup.object({
            nombre:Yup.string().required(),
            apellido:Yup.string().required(),
            correo:Yup.string().email().required(),
            telefono:Yup.number().required(),
            comentario:Yup.string().required()
        }),
        onSubmit: (data) => {
            console.log(data)
        }
    })
    const alerta = () =>{
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Datos Enviados Correctamente',
            showConfirmButton: false,
            timer: 2000
          })
    }

    return (
        <div>
           <Link to="/"><i id="fas" class="fas fa-arrow-left"></i></Link>
            <h1 className="formu-ti">Formulario De Contacto</h1>
            <form  className="formu" action="https://formspree.io/f/mpzknovn" method="POST" onSubmit={formik.handleSubmit}>
                <div>
                <label id="ti-label" >Nombre</label>
                <input className="input-regis" type="text" name="nombre" placeholder="Nombre" onChange={formik.handleChange}/>
                </div>
                <div>
                <label id="ti-label">Apellido</label>
                <input className="input-regis" type="text" name="apellido" placeholder="Apellido" onChange={formik.handleChange} />
                </div>
                <div>
                    <label id="ti-label">Correo</label>
                    <input className="input-regis" type="email" name="correo" placeholder="Correo" onChange={formik.handleChange}/>
                </div>
                <div>
                    <label id="ti-label">Telefono</label>
                    <input className="input-regis" type="number" name="telefono" placeholder="Telefono" onChange={formik.handleChange}/>
                </div>
                <div>
                    <label id="ti-label">Comentarios</label>
                    <textarea className="input-regis" name="comentario" placeholder="Ingrese su comentario" onChange={formik.handleChange}></textarea>
                </div>
                <a className="link-to" href="mailto:davidcardonagarcia67@gmail.com">Redactar Correo</a>

                <button className="btn-for" onClick={alerta} type="submit">Enviar</button>
            </form>
            <Footer/>
        </div>
    )
}

export default Contacto;
