import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {



  return (



    <>



      <section className='w-100 p-2' style={{ backgroundColor: 'transparent' }}>


        <nav className='d-flex justify-content-between align-items-center w-100'>


          <div className='e-logo w-50'>

            <img src="/LOGO.png" className='img-fluid' alt="" />

          </div>


          <div className='d-flex justify-content-start' style={{width:'30%'}}>

            <Link to={'/'} className='navbar-links' >Home</Link>
            <Link to={'/services'} className='navbar-links' >Services</Link>
            <Link  className='navbar-links' >About</Link>
            <Link  className='navbar-links' >Conatct</Link>

          </div>


        </nav>




      </section>


    </>






  )




}

export default Header