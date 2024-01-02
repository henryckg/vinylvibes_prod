import React, { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import icon from './assets/list.svg'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {

    const [showMenu, setShowMenu] = useState(false)

    function handleShowMenu(){
        setShowMenu(!showMenu)
    }

    function handleNavLinkClick(){
        setShowMenu(false)
    }

    return (
        <div>
            <nav className='d-flex justify-content-between align-items-center p-2 nav'>
                <Link className='logo' to='/'>
                    <h1 className='title'>Vinyl<span className='subtitle'>Vibes</span></h1>
                </Link>
                <div className='botones-menu'>
                    <NavLink to='/' className='Option inicio'>Inicio</NavLink>
                    <NavLink to='/category/vinilos' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Vinilos</NavLink>
                    <NavLink to='/category/tornamesas' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Tornamesas</NavLink>
                    <NavLink to='/category/accesorios' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                    <NavLink to='/contact' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
                </div>
                <CartWidget />
                <div className='menu-list' onClick={handleShowMenu}>
                    <img src={icon} alt='list-menu'/>
                </div>
            </nav>
            <nav className={showMenu ? 'nav-mobile show' : 'nav-mobile'} >
                <NavLink to='/' className={({ isActive }) => isActive ? 'mobActiveOption' : 'mobOption'} onClick={handleNavLinkClick}>Inicio</NavLink>
                <NavLink to='/category/vinilos' className={({ isActive }) => isActive ? 'mobActiveOption' : 'mobOption'} onClick={handleNavLinkClick}>Vinilos</NavLink>
                <NavLink to='/category/tornamesas' className={({ isActive }) => isActive ? 'mobActiveOption' : 'mobOption'} onClick={handleNavLinkClick}>Tornamesas</NavLink>
                <NavLink to='/category/accesorios' className={({ isActive }) => isActive ? 'mobActiveOption' : 'mobOption'} onClick={handleNavLinkClick}>Accesorios</NavLink>
                <NavLink to='/contact' className={({ isActive }) => isActive ? 'mobActiveOption' : 'mobOption'} onClick={handleNavLinkClick}>Contacto</NavLink>
                <NavLink to='/cart' className={({ isActive }) => isActive ? 'mobActiveOption' : 'mobOption'} onClick={handleNavLinkClick}>Carrito</NavLink>
            </nav>
        </div>
    )
}
