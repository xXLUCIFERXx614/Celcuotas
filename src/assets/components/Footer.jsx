import React from "react";
import './styles/footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-sidebar col-md-10">
                            <div className="widget widget_text">
                                <div className="textwidget">
                                    <div className="tim-footer-location">
                                        <p></p>
                                        <div className="title">
                                            <h4>DIRECCION</h4>
                                        </div>
                                        <p></p>
                                        <p className="info">
                                            <a href="https://maps.app.goo.gl/4yd5HXa8Zf57B6y36" target="_blank">
                                                CARRERA 33 # 44-92 CABECERA, Bucaramanga, Colombia
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-sidebar col-md-10">
                            <div className="widget widget_text">
                                <div className="textwidget">
                                    <div className="tim-footer-location">
                                        <p></p>
                                        <div className="title">
                                            <h4>CONTACTANOS</h4>
                                        </div>
                                        <p></p>
                                        <p className="info">
                                            <i className="ion-ios-location"><img src="/img/whatsapp.png" alt="whatsapp" width="25" height="25"/></i>
                                            <a href="https://wa.me/573219981363"> (+57) 321 9981363</a>
                                        </p>
                                        <p className="info">
                                            <i className="ion-ios-location"><img src="/img/instagram.png" alt="instagram" width="25" height="25"/></i>
                                            <a href="https://www.instagram.com/celcuotas/"> celcuotas</a>
                                        </p>
                                        <p className="info">
                                            <i className="ion-ios-location"><img src="src/assets/img/facebook.png" alt="facebook" width="25" height="25" /></i>
                                            <a href="https://www.facebook.com/celcuotasco/"> Celcuotasco</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-sidebar col-md-10">
                            <div className="widget widget_text">
                                <div className="textwidget">
                                    <div className="tim-footer-location">
                                        <p></p>
                                        <div className="title">
                                            <h4>LINKS</h4>
                                        </div>
                                        <p></p>
                                        <p className="info">
                                            <a href="https://maps.app.goo.gl/4yd5HXa8Zf57B6y36" target="_blank">
                                                Quienes Somos
                                            </a>
                                        </p>
                                        <p className="info">
                                            <a href="https://maps.app.goo.gl/4yd5HXa8Zf57B6y36" target="_blank">
                                                Proposito como empresa
                                            </a>
                                        </p>
                                        <p className="info">
                                            <a href="https://maps.app.goo.gl/4yd5HXa8Zf57B6y36" target="_blank">
                                                Politicas y formas de pago
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer-sidebar col-md-6">
                            <div className="widget widget_text">
                                <div className="textwidget">
                                    <div className="tim-footer-location">
                                        <p></p>
                                        <div className="logoo">
                                            <Link to="/">
                                                <img src="src/assets/img/logo.png" alt="Logo" width="228" height="87" />
                                            </Link>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
