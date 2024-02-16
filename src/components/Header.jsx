import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/argentBankLogo.png';
import '../sass/components/_header.scss';

function Header () {

    const navigate = useNavigate();
    
    return (
        <header>
            <h1 className='sr-only'>Argent Bank</h1>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Bank Logo" />
                </Link> 
                    <div className='connected'>
                        <Link to='/profile'>
                            <i className='fa-solid fa-2x fa-circle-user' />
                        </Link>
                        <Link to='/'>
                            <i className='fa-solid fa-arrow-right-from-bracket' />
                            <p> Sign out </p>
                        </Link>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <Link to='/login' >
                            <i className="fa-solid fa-circle-user"></i>
                            <p>Sign In</p>
                        </Link>
                    </div>
                
            </nav>
        </header>
    ) 
}

export default Header