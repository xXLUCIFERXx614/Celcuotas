import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import appFirebase from '../../Credenciales';
import "./styles/Navbar.css";

const Navbar = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [active, setActive] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();

  // Inicializar auth
  const auth = getAuth(appFirebase);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
      });
  };

  const toggleUserMenu = () => {
    setShowUserMenu(!showUserMenu);
  };

  const onDeleteProduct = (product) => {
    const updatedProducts = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(updatedProducts);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg custom-bg-color">
        <div className="container-fluid">
          <Link to="/">
            <img src="/img/logo.png" alt="Logo" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Credito">
                  <button className="adquiere">¡Adquiere tu credito!</button>
                </Link>
              </li>
            </ul>
            <form
              className={`d-flex ${isCollapsed ? "ms-auto mb-2 mb-lg-0" : ""}`}
              role="search"
              style={{ position: "relative" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar"
                style={{ paddingRight: "2.5rem" }}
              />
              <button
                className="btn-bs"
                type="submit"
                style={{
                  position: "absolute",
                  right: "0rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <img
                  src="/img/iconos/lupa.png"
                  className="card-img-top"
                  alt="Buscar"
                  style={{
                    objectFit: "cover",
                    maxWidth: "60px",
                    maxHeight: "60px",
                  }}
                />
              </button>
            </form>

            <div
              className={`logos ${isCollapsed ? "d-lg-flex align-items-center" : ""}`}
            >
              <div className="container-icon">
                <div
                  className="container-cart-icon"
                  onClick={() => setActive(!active)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="icon-cart"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <div className="count-products">
                    <span id="contador-productos">{countProducts}</span>
                  </div>
                </div>

                <div
                  className={`container-cart-products ${active ? "" : "hidden-cart"}`}
                >
                  {allProducts && allProducts.length ? (
                    <>
                      <div className="row-product">
                        {allProducts.map((product) => (
                          <div className="cart-product" key={product.id}>
                            <div className="info-cart-product">
                              <span className="imagen-producto-carrito">
                                <img src={product.img} alt={product.name} />
                              </span>
                              <span className="cantidad-producto-carrito">
                                {product.quantity}
                              </span>
                              <p className="titulo-producto-carrito">
                                {product.nameProduct}
                              </p>
                              <span className="precio-producto-carrito">
                                ${product.price}
                              </span>
                            </div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1"
                              stroke="currentColor"
                              className="icon-close"
                              onClick={() => onDeleteProduct(product)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        ))}
                      </div>

                      <div className="cart-total">
                        <h3>Total:</h3>
                        <span className="total-pagar">${total}</span>
                      </div>
                        <button className="btn-clear-all">
                          Hacer Compra
                        </button>
                      <button className="btn-clear-all" onClick={onCleanCart}>
                        Vaciar Carrito
                      </button>
                    </>
                  ) : (
                    <p className="cart-empty">El carrito está vacío</p>
                  )}
                </div>
              </div>
              {user ? (
                <div className={`user-menu ${isCollapsed ? "d-block" : "d-none d-lg-inline-block"}`} onClick={toggleUserMenu}>
                  <img
                    src="/img/usuario.png"
                    alt="Usuario"
                    width="30"
                    height="30"
                  />
                  {showUserMenu && (
                    <div className="user-dropdown">
                      <p>{user.displayName}</p>
                      <button onClick={handleLogout}>Cerrar Sesión</button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  className={`user ${isCollapsed ? "d-block" : "d-none d-lg-inline-block"}`}
                  to="/login"
                >
                  <img
                    src="/img/usuario.png"
                    alt="Usuario"
                    width="30"
                    height="30"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
