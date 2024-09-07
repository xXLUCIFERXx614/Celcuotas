import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import appFirebase from '../../Credenciales';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import AlertModal from './AlertModal';

const auth = getAuth(appFirebase);

const Registro = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleRegistration = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    const nombre = e.target.nombre.value;
    const apellido = e.target.apellido.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, correo, contraseña);
      const user = userCredential.user;

      await updateProfile(user, { displayName: `${nombre} ${apellido}` });

      // Muestra el modal de registro exitoso
      setShowModal(true);
    } catch (error) {
      setErrorMsg("Error al registrar nuevo usuario: " + error.message);
    }
  };

  const handleAccept = () => {
    setShowModal(false);
    // Redirige al usuario al login después del registro exitoso
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-4 text-center">
          <div className="card shadow">
            <div className="card-body">
              <img src="/img/logo.png" alt="Logo" className="logo mb-4 mx-auto d-block" style={{ borderRadius: '10px' }} />
              <form onSubmit={handleRegistration}>
                <div className="mb-3">
                <input type="text" placeholder="Nombre" className="form-control w-100" id="nombre" required style={{ borderColor: '#FF7900', width: '100%' }} />
                </div>
                <div className="mb-3">
                <input type="text" placeholder="Apellido" className="form-control w-100" id="apellido" required style={{ borderColor: '#FF7900', width: '100%' }} />
                </div>
                <div className="mb-3">
                <input type="text" placeholder="Ingresar Email" className="form-control w-100" id="email" required style={{ borderColor: '#FF7900', width: '100%' }} />
                </div>
                <div className="mb-3">
                <input type="password" placeholder="Ingrese Contraseña" className="form-control w-100" id="password" required style={{ borderColor: '#FF7900', width: '100%' }} />
                </div>
                <div className="mb-3">
                <button className="btn btn-primary w-100" style={{ backgroundColor: '#FF7900', borderColor: '#FF7900', width: '100%' }}>Registrarse</button>
                </div>
              </form>
              <h4 className="mt-3">
                <span className="font-weight-bold">¿Ya tienes cuenta? </span>
                <span className="btn btn-link">
                  <Link to="/login" style={{ color: '#FF7900' }}>Inicia sesión</Link>
                </span>
              </h4>
              {errorMsg && <p className="error-msg">{errorMsg}</p>}
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <AlertModal
          message="¡Te has registrado con éxito!"
          onAccept={handleAccept}
          type="registration"
        />
      )}
    </div>
  );
};

export default Registro;
