import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import appFirebase from "../../Credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./Login";
import Home from "./Home";

const auth = getAuth(appFirebase);

const App = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      console.log("Usuario actualizado:", usuarioFirebase);
      setUsuario(usuarioFirebase);
    });

    // Limpieza del efecto al desmontar el componente
    return () => unsubscribe();
  }, []);

  console.log("Usuario actual:", usuario);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={usuario ? <Home correoUsuario={usuario?.email} /> : <Login />}
        />
      </Routes>
    </Router>
  );
};

export default App;