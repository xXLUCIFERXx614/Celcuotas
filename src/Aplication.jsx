import './App.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./assets/components/Navbar"
import Footer from './assets/components/Footer'
import Inicio from "./assets/components/Inicio"
import Restaurante from './assets/components/Restaurante'
import Nosotros from './assets/components/Nosotros'
import Login from './assets/components/Login'
import Home from './assets/components/Home'
import SignUp from "./assets/components/SignUp";
import Iphone from "./assets/components/Iphone";
import Samsung from "./assets/components/Samsung";
import Xiaomi from "./assets/components/Xiaomi";
import Motorola from "./assets/components/Motorola";
import Honor from "./assets/components/Honor";
import Tecno from "./assets/components/Tecno";
import Oppo from "./assets/components/Oppo";
import Realme from "./assets/components/Realme";
import Credito from './assets/components/Credito';
import RequisitosCredito from './assets/components/RequisitosCredito';



function Aplication() {
    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

    return (
        <>
        <Router>
        <Navbar
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
        />
        <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Credito' element={<Credito/>}/>
        <Route path='/Requisitos' element={<RequisitosCredito/>}/>
        <Route path='/Iphone' element={<Iphone
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} 
        />}/>
        <Route path='/Samsung' element={<Samsung
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} 
        />}/>
        <Route path='/Xiaomi' element={<Xiaomi
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} 
        />}/>
        <Route path='/Motorola' element={<Motorola
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} 
        />}/>
        <Route path='/Honor' element={<Honor
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} 
        />}/>
        <Route path='/Tecno' element={<Tecno
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} 
        />}/>
        <Route path='/Oppo' element={<Oppo
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} 
        />}/>
        <Route path='/Realme' element={<Realme
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} 
        />}/>
        <Route path='/Restaurante' element={<Restaurante
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts} 
        />}/>
        <Route path='/Nosotros' element={<Nosotros/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        </Routes>
        <Footer/>
        </Router>
        </>
    )
}

export default Aplication