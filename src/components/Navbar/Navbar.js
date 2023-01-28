import React from 'react'
import styles from "./Navbar.module.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
        <ToastContainer/>

      
<nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className={styles.navbar_brand} to="/">Interactly</NavLink>
  </div>
</nav>
        
    </>
   
  )
}

export default Navbar