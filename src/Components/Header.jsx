import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (






    <>



      <section className='w-100 p-2' style={{ backgroundColor: 'transparent' }}>


        <nav className='d-flex justify-content-between align-items-center w-100'>




          <div className='e-logo w-50'>

            <img src="/LOGO.png" className='img-fluid' alt="" />

          </div>




          <div className='d-flex justify-content-start nav-none' style={{ width: '30%' }}>

            <Link to={'/'} className='navbar-links' >Home</Link>
            <Link to={'/services'} className='navbar-links' >Services</Link>
            <Link className='navbar-links' >About</Link>
            <Link className='navbar-links' >Conatct</Link>

          </div>


          <div className='nav-none1 d-none me-2'>

            <button onClick={handleShow} className='btn-off'><i class="fa-solid fa-grip-lines"></i></button>

          </div>




        </nav>





        {/* OFF CANVAS */}
        <Offcanvas show={show} onHide={handleClose}>

          <Offcanvas.Header closeButton>
           
          </Offcanvas.Header>


          <Offcanvas.Body>

            <div className='d-flex justify-content-center flex-column'>

              <Link to={'/'} className='navbar-links' onClick={handleClose} >Home</Link>
              <Link to={'/services'} className='navbar-links' onClick={handleClose} >Services</Link>
              <Link className='navbar-links' onClick={handleClose} >About</Link>
              <Link className='navbar-links' onClick={handleClose} >Conatct</Link>

            </div>

          </Offcanvas.Body>


        </Offcanvas>




      </section>


    </>






  )




}

export default Header