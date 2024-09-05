import React from "react"
import './styles/Todo.css';
import './styles/Iphone.css';
import { data } from "../../data";


const Restaurante = ({
    allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) => {
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
    return(
        <div className="restaurante-cont">
            <div className="carousel-margin">
                <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="src/assets/img/Restaurante_img/picada.jpg" className="d-block w-100" alt="0"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="src/assets/img/Restaurante_img/sobrebarriga.jpg" className="d-block w-100" alt="1"/> 
                    <div className="carousel-caption d-none d-md-block">
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="src/assets/img/Restaurante_img/mute.jpg" className="d-block w-100" alt="2"/>
                    <div className="carousel-caption d-none d-md-block">
                    </div>
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
            <div className="products">
                <div className="container-items">
                    {data.map((product) => (
                        <div className="item" key={product.id}>
                        <figure>
                            <img src={product.img} alt={product.nameProduct} />
                        </figure>
                        <div className="info-product">
                            <h2>{product.nameProduct}</h2>
                            <p className="price">${product.price}</p>
                            <button onClick={() => onAddProduct(product)}>Añadir al Carrito</button>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>
            <p></p> 
        </div>
    )
}
export default Restaurante