import React, { useState } from "react";
import { Link } from "react-router-dom";
import './styles/Todo.css';
import './styles/Iphone.css';
import { data } from "../../data";

const Honor = ({
    allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Filtrar solo los productos de Honor
    const honorProducts = data.filter(product => product.id.startsWith('Honor'));

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        const modal = new window.bootstrap.Modal(
            document.getElementById("productModal")
        );
        modal.show();        
    };

/*Carrito*/
const onAddProduct = (product) => {
    if (allProducts.find(item => item.id === product.id)) {
        const products = allProducts.map(item =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
};
    return (
        <div className="restaurante-cont">
            <div className="d-flex align-items-center justify-content-between main-container">
                <div className="logo-container">
                    <Link to="/">
                        <div className="rounded-circle-container">
                            <img
                                src="/img/Marcas/Honor.png"
                                alt="Honor"
                                className="img-fluid"
                            />
                        </div>
                    </Link>
                    <h2 className="marca-name">Honor</h2>
                </div>
                <div className="carousel-container">
                    <div id="carouselExampleCaptions" className="carousel slide custom-carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/img/carrusel2.png" className="d-block w-100" alt="0" />
                                <div className="carousel-caption d-none d-md-block"></div>
                            </div>
                            <div className="carousel-item">
                                <img src="/img/carrusel2.png" className="d-block w-100" alt="1" />
                                <div className="carousel-caption d-none d-md-block"></div>
                            </div>
                            <div className="carousel-item">
                                <img src="/img/carrusel2.png" className="d-block w-100" alt="2" />
                                <div className="carousel-caption d-none d-md-block"></div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="products">
                <div className="container-items">
                    {honorProducts.map((product) => (
                        <div className="item" key={product.id} onClick={() => handleProductClick(product)}>
                            <figure>
                                <img src={product.img} alt={product.nameProduct} />
                            </figure>
                            <div className="info-product">
                                <h2>{product.nameProduct}</h2>
                                <p className="price">${product.price}</p>
                                <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                                <button className="credit">Crédito</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {selectedProduct && (
                <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                    <div className="modal-dialog" style={{ border: '2px solid #FF7900' }}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="productModalLabel">{selectedProduct.nameProduct}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={selectedProduct.img} alt={selectedProduct.nameProduct} className="img-fluid" />
                                    </div>
                                    <div className="col-md-6">
                                        <h6>Especificaciones:</h6>
                                        <ul>
                                            <li><strong>Display:</strong> {selectedProduct.specifications.display}</li>
                                            <li><strong>Resolución:</strong> {selectedProduct.specifications.resolution}</li>
                                            <li><strong>Procesador:</strong> {selectedProduct.specifications.processor}</li>
                                            <li><strong>RAM:</strong> {selectedProduct.specifications.ram}</li>
                                            <li><strong>Almacenamiento:</strong> {selectedProduct.specifications.storage}</li>
                                            <li><strong>Cámara:</strong> {selectedProduct.specifications.camera}</li>
                                            <li><strong>Batería:</strong> {selectedProduct.specifications.battery}</li>
                                        </ul>
                                    </div>
                                </div>
                                <p style={{ color: 'black', textAlign: 'center', fontSize: '20px' }}><strong>Precio: <span style={{ color: 'red' }}>${selectedProduct.price}</span></strong></p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger me-auto" style={{ backgroundColor: '#FF7900', borderColor: '#FF7900' }}>Crédito</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary">Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Honor;
