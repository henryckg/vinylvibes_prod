import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    
    return (
        <nav className='d-flex justify-content-between align-items-center p-2 nav'>
            <Link className='logo' to='/'>
                <h1 className='title'>Vinyl<span className='subtitle'>Vibes</span></h1>
            </Link>
            <div className='botones-menu'>   
                <NavLink to='/' className='Option inicio'>Inicio</NavLink>
                <NavLink to='/category/vinilos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Vinilos</NavLink>
                <NavLink to='/category/tornamesas' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tornamesas</NavLink>
                <NavLink to='/category/accesorios' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
                <NavLink to='/contact' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Contacto</NavLink>
            </div>
            <CartWidget/>
        </nav>  
    )
}
