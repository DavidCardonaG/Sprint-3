import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
// import { logout } from '../actions/actionLogin';
import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/FileUpload';
import { registerProductos } from '../Actions/actionProducts';
import {listAsincrono} from '../Actions/actionProducts'
import ListarProductos from '../Components/ListarProductos'
 const Productos = ({ history }) => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        precio: '',
        descripcion: '',
        imagen: ''
    })

    let { nombre,precio,descripcion,imagen } = values;

    const handleRegistro = e => {
        e.preventDefault();
        dispatch(registerProductos(nombre,precio,descripcion,imagen));
        reset();
    }


    // const handleLogout = () => {
    //     dispatch(logout());
    //     history.replace('/login');
    // }

    const handlePictureClick = () => {
         document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            imagen = response
            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    useEffect(() => {
        dispatch(listAsincrono())
    }, [dispatch])

    return (
        <div>
            <h1>BIENVENIDO A LA SECCIÓN DE REGISTRO DE PRODUCTOS DE AMAZONAS</h1>
            <p>Nos agrada que seas nuestro aliado</p>

            <form onSubmit={handleRegistro}>
                <h1>PRODUCTOS</h1>
                <div className="form-group">
                    <div className="form-group col-md-4">
                        <label htmlFor="documento">Nombre</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="nombre" 
                        id="nombre"
                        value={nombre}
                        onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="nombres">Precio</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="precio" 
                        id="precio"
                        value={precio}
                        onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="telefono">Descripción</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="descripcion" 
                        id="descripcion"
                        value={descripcion}
                        onChange={handleInputChange} />
                    </div>

                    <br />
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChanged}
                        />

                        <button className="btn btn-success"
                           onClick={handlePictureClick} type="button">Imagen</button>
                    </div>

                    <div>
                        <button className="btn btn-primary"
                            type="submit">Guardar</button>
                    </div>

                    {/* <div>
                        <button className="btn btn-primary" type="button"
                            onClick={handleLogout}>Logout</button>
                    </div> */}

                </div>
            </form>
        <ListarProductos/>
        </div>
    )
}

export default Productos