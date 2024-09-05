import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import appFirebase from '../../Credenciales';
import AlertModal from './AlertModal';

const auth = getAuth(appFirebase);

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const navigate = useNavigate();

  const handleAuthentication = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, correo, contraseña);
      setModalMessage('Has iniciado sesión con éxito');
      setShowModal(true);
    } catch (error) {
      setModalMessage('El correo o la contraseña son incorrectas');
      setShowModal(true);
      console.error("Error de autenticación:", error.message);
    }
  };

  const handleAccept = () => {
    setShowModal(false);
    if (modalMessage === 'Has iniciado sesión con éxito') {
      navigate("/");
    }
  };

  const handleSwitchForm = () => {
    navigate("/signup");
  };

  return (
    <div className="login-container text-center">
      <div className="row justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="col-md-4">
          <div className="card shadow">
            <div className="card-body">
              <img src="src/assets/img/logo.png" alt="Logo" className="logo mb-4 mx-auto d-block" style={{ borderRadius: '10px' }} />
              <form onSubmit={handleAuthentication}>
                <div className="mb-3">
                  <input type="text" placeholder="Ingrese Email" className="form-control w-100" id="email" style={{ borderColor: '#FF7900' }} />
                </div>
                <div className="mb-3">
                  <input type="password" placeholder="Ingrese Contraseña" className="form-control w-100" id="password" style={{ borderColor: '#FF7900' }} />
                </div>
                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#FF7900', borderColor: '#FF7900' }}>
                  Inicia Sesión
                </button>
              </form>
              <p className="mt-3">
                <b>¿No tienes cuenta? </b>
                <button className="btn btn-link" onClick={handleSwitchForm}>
                  Regístrate
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <AlertModal message={modalMessage} onAccept={handleAccept} />
      )}
    </div>
  );
};

export default Login;