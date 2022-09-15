import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import '../App.css'
import CarritoContext from '../context/CarritoContext';

function Header() {

    // const { Carrito, setCarrito } = useContext(CarritoContext)
    // const [numProductos, setNumProductos] = useState(0);

    // useEffect(()=>{
    //     console.log('este es el carrito', Carrito)
    //     // obtenerNumProductos()
    // }, [Carrito]);
    
    // const obtenerNumProductos = async () =>{
    //     console.log(Carrito)
    //     setNumProductos(Carrito.lenght);
    // }

    return (
        <>
            <header className="header fondo">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="header__logo">
                                <NavLink to={`/`}>
                                    <img src="img/logo.png" alt="" />
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="header__menu">
                                <ul>
                                    <li>
                                        <NavLink to={`/`}>
                                            Home
                                        </NavLink>
                                    </li>
                                    <li><a href={null}>Shop</a></li>
                                    <li><a href={null}>Pages</a>
                                        <ul className="header__menu__dropdown">
                                            <li><a href={null}>Shop Details</a></li>
                                            <li><a href={null}>Shoping Cart</a></li>
                                            <li><a href={null}>Check Out</a></li>
                                            <li><a href={null}>Blog Details</a></li>
                                        </ul>
                                    </li>
                                    <li><a href={null}>Blog</a></li>
                                    <li><a href={null}>Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__cart">
                                <ul>
                                    <li>
                                        <i className="fa fa-user"></i>
                                    </li>
                                    <NavLink to={`/Shopcart`}>
                                        <li><a href={null}><i className="fa fa-shopping-bag">
                                            {/* {
                                                Carrito.lenght > 0
                                                    ? <span>{Carrito.lenght}</span> : null
                                            } */}
                                        </i></a></li>
                                    </NavLink>
                                </ul>
                                <div className="header__cart__price">item: <span>$150.00</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="humberger__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;
