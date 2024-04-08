import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';

const Navbar = () => {

    const { user } = useAuthContext()
    const {logout} = useLogout()

    const renderElement = () => {
        return user ?
           ( <>

                <li><button className='btn'>Home</button></li>
                <li><button className='btn'>About</button></li>
                <li><button className='btn'>Projects</button></li>
                <li className={styles.logout}><button className={styles['logout-btn']} onClick={logout}>Logout</button></li>
            </>)
            :
           ( <>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </>)
    }

    return (
        <nav className={styles.navbar}>
            <ul>
                {renderElement()}
            </ul>
        </nav>
    )
}

export default Navbar
