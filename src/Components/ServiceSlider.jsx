import React from 'react'
import './ServiceSlider.css'
import { Link } from 'react-router-dom'

function ServiceSlider() {



  return (



    <>

      {/* Home Slider */}
      <section className='Service-img p-5'>


        <div className='slide2-text p-5 ps-4'>

          <h1 class="animate__animated animate__fadeInLeft">WE'R PROVIDED</h1>
          <h1 class="animate__animated animate__fadeInLeft">BEST DIGTAL</h1>
          <h1 class="animate__animated animate__fadeInLeft">SERVICES </h1>
          <p class="animate__animated animate__fadeInLeft">EMPOWERING VISIONS WITH DESIGN: YOUR DREAM, OUR EXPERTISE</p>

          <Link to={'/'} style={{ textDecoration: 'none' }}>

            <button className='btn-explore'> Explore More</button>

          </Link>


        </div>


      </section>




    </>


  )






}

export default ServiceSlider