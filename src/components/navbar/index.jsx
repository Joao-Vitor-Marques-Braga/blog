import React from 'react';
import './style.css'
import {Link} from 'react-router-dom'

export default function NavBar(){
    return(
        <nav className='nav'>
            <div className='logo'>
                <h1>InstaBlog.</h1>
            </div>

            <div>
                <Link href="/">Home</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/contato">Contato</Link>
            </div>
        </nav>
    )
}