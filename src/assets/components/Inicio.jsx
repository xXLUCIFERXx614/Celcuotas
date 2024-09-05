import React from "react";
import { Link } from "react-router-dom";
import "./styles/Inicio.css";
import Spline from '@splinetool/react-spline';


const Inicio = () => {
  return (
    <div className="carousel">
      <div className="info-section">
        <div className="row">
          <div className="col-md-6 info-text">
            <h1>Bienvenido a Celcuotas</h1>
            <p>
              Somos una empresa dedicada a brindarte la oportunidad de adquirir
              celulares a crédito en la hermosa ciudad de Bucaramanga, Santander.
              ¿Te has encontrado con que los grandes operadores no te otorgan el
              cupo necesario para financiar el celular que tanto deseas? ¡No te
              preocupes! En Celcuotas, estamos aquí para ayudarte.
            </p>
            <Link to="/Requisitos">
              <button className="btn btn-primary">Conoce los requisitos para un crédito</button>
            </Link>
            
          </div>
            <div className="col-md-6 info-image">
            <div className="spline-container">
                <Spline scene="https://prod.spline.design/II9VfjT7G2LHrWWb/scene.splinecode" />
            </div>
          </div>
        </div>
      </div>
      <div className="cont">
        <div className="marcas-cel">
          <div className="marcas-container">
            <div className="row row-cols-7">
              <div className="col">
                <Link to="/Iphone">
                  <div className="rounded-circle-container">
                    <img
                      src="src/assets/img/Marcas/Apple.png"
                      alt="Apple"
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <h2 className="marca-name">Apple</h2>
              </div>
              <div className="col">
                <Link to="/Samsung">
                  <div className="rounded-circle-container">
                    <img
                      src="src/assets/img/Marcas/Samsung.png"
                      alt="Samsung"
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <h2 className="marca-name">Samsung</h2>
              </div>
              <div className="col">
                <Link to="/Xiaomi">
                  <div className="rounded-circle-container">
                    <img
                      src="src/assets/img/Marcas/Xiaomi.png"
                      alt="Xiaomi"
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <h2 className="marca-name">Xiaomi</h2>
              </div>
              <div className="col">
                <Link to="/Motorola">
                  <div className="rounded-circle-container">
                    <img
                      src="src/assets/img/Marcas/Motorola.png"
                      alt="Motorola"
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <h2 className="marca-name">Motorola</h2>
              </div>
              <div className="col">
                <Link to="/Honor">
                  <div className="rounded-circle-container">
                    <img
                      src="src/assets/img/Marcas/Honor.png"
                      alt="Honor"
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <h2 className="marca-name">Honor</h2>
              </div>
              <div className="col">
                <Link to="/Tecno">
                  <div className="rounded-circle-container">
                    <img
                      src="src/assets/img/Marcas/TecnoMobile.png"
                      alt="Tecno"
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <h2 className="marca-name">Tecno</h2>
              </div>
              <div className="col">
                <Link to="/Oppo">
                  <div className="rounded-circle-container">
                    <img
                      src="src/assets/img/Marcas/Oppo.png"
                      alt="Oppo"
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <h2 className="marca-name">Oppo</h2>
              </div>
              <div className="col">
                <Link to="/Realme">
                  <div className="rounded-circle-container">
                    <img
                      src="src/assets/img/Marcas/Realme.png"
                      alt="Realme"
                      className="img-fluid"
                    />
                  </div>
                </Link>
                <h2 className="marca-name">Realme</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <center>
        <br />
        <h3>Últimos lanzamientos</h3>
      </center>
      <div className="cont">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100 border-0">
              <Link to="/Iphone">
                <img
                  src="src/assets/img/Apple/Iimg1.png"
                  className="card-img-top"
                  alt="iPhone 15 Pro Max"
                  style={{
                    objectFit: "cover",
                    width: "185px",
                    height: "290px",
                  }}
                />
              </Link>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title mb-0">
                  IPhone 15 Pro Max de 256GB 8GB RAM
                </h5>
                <p className="card-title red-text">$6.599.900</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <Link to="/Samsung">
                <img
                  src="src/assets/img/Samsung/Simg1.png"
                  className="card-img-top"
                  alt="Samsung Galaxy S24 Ultra"
                  style={{
                    objectFit: "cover",
                    width: "200px",
                    height: "290px",
                  }}
                />
              </Link>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title mb-0">
                  Samsung Galaxy S24 Ultra 5G 256GB|12GB RAM
                </h5>
                <p className="card-title red-text">$6.599.900</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <Link to="/Xiaomi">
                <img
                  src="src/assets/img/Xiaomi/Ximg1.png"
                  className="card-img-top"
                  alt="Xiaomi 13T"
                  style={{
                    objectFit: "cover",
                    width: "190px",
                    height: "290px",
                  }}
                />
              </Link>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title mb-0">Xiaomi 13T 256GB 12GB RAM</h5>
                <p className="card-title red-text">$2.999.900</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 border-0">
              <Link to="/Oppo">
                <img
                  src="src/assets/img/Oppo/Oimg1.png"
                  className="card-img-top"
                  alt="Oppo Reno 11"
                  style={{
                    objectFit: "cover",
                    width: "140px",
                    height: "290px",
                  }}
                />
              </Link>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title mb-0">
                  Oppo Reno 11 5G 256GB|12GB RAM
                </h5>
                <p className="card-title red-text">$2.499.900</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <center>
          {" "}
          <h1 className="naranja-text">
            _____________________________________________
          </h1>
        </center>
      </div>
      <div>
        <p></p>
      </div>
      <div className="bienvenido">
        <center>
          <h2>
            ¡Bienvenidos a Celcuotas! Somos una empresa dedicada a brindarte la
            oportunidad de adquirir celulares a crédito en la hermosa ciudad de
            Bucaramanga, Santander. ¿Te has encontrado con que los grandes
            operadores no te otorgan el cupo necesario para financiar el celular
            que tanto deseas? ¡No te preocupes! En Celcuotas, estamos aquí para
            ayudarte.
          </h2>
        </center>
      </div>
      <div>
        <p></p>
        <br />
      </div>
      <div>
        <center>
          <Link to="/Requisitos">
            <button
              style={{
                backgroundColor: "#FF7900",
                color: "black",
                padding: "15px 20px",
                border: "none",
                fontSize: "20px",
              }}
            >
              ¿Conoces los requisitos para un crédito?
            </button>
          </Link>
          
        </center>
      </div>
      <div>
        <p></p>
      </div>
      <div className="gray-background">
        <div className="row justify-content-center">
          <div className="col">
            <img
              src="src/assets/img/iconos/seguro.png"
              className="card-img-top"
              alt="Compra Segura"
              style={{
                objectFit: "cover",
                maxWidth: "60px",
                maxHeight: "60px",
              }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5>Compra Segura</h5>
            </div>
          </div>
          <div className="col">
            <img
              src="src/assets/img/iconos/enviado.png"
              className="card-img-top"
              alt="Envio"
              style={{
                objectFit: "cover",
                maxWidth: "60px",
                maxHeight: "60px",
              }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5>Envio</h5>
            </div>
          </div>
          <div className="col">
            <img
              src="src/assets/img/iconos/credito.png"
              className="card-img-top"
              alt="Credito facil"
              style={{
                objectFit: "cover",
                maxWidth: "60px",
                maxHeight: "60px",
              }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5>Credito Facil</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
