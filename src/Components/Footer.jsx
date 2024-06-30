import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {


    return (

        <>


            <footer className=' p-5 pb-2 d-flex flex-column justify-content-center align-items-center'>


                <div className='ex-logo'>

                    <img src="/LOGO.png" className='img-fluid' alt="" />

                </div>


                <div className='social d-flex mt-3'>

                    <a href="https://www.instagram.com/exmedia_1/" target='_blank'><i class="fa-brands fa-instagram" style={{ color: '#C13584' }}></i></a>

                    <a href="https://x.com/exmedia_" target='_blank'> <i class="fa-brands fa-x-twitter ms-4" style={{ color: '#fff' }}></i></a>

                    <a href="https://www.facebook.com/exmedia/" target='_blank'><i class="fa-brands fa-facebook ms-4" style={{ color: '#316FF6' }}></i></a>

                    <a href="https://www.youtube.com/@exmedia-" target='_blank'><i class="fa-brands fa-youtube ms-4" style={{ color: '#FF0000' }}></i></a>

                </div>


                <div className='d-flex mt-3'>


                    <Link to={'/'} className='navbar-links foot' >Home</Link>
                    <Link to={'/services'} className='navbar-links ms-4 foot' >Services</Link>
                    <Link className='navbar-links  ms-4 foot' >About</Link>
                    <Link className='navbar-links ms-4 foot' >Conatct</Link>
                    {/* <Link className='navbar-links ms-4' ></Link> */}


                </div>


                <div className='d-flex mt-2 foot-link'>

                    <a href="mailto:INFO@EXMEDIA.IN" target='_blank'><i class="fa-regular fa-envelope"></i>INFO@EXMEDIA.IN</a>

                    <a href="https://wa.me/9526123466" target='_blank'><i class="fa-solid fa-phone ms-3"></i>+919526123466</a>

                    <a href=""><i class="fa-solid fa-location-dot ms-3"></i>KERALA & UAE</a>

                </div>

                <div className='mt-4 copy'>


                    <p className='text-center'>© COPYRIGHT 2024 EXMEDIA</p> 

                </div>





            </footer>



        </>





    )




}

export default Footer