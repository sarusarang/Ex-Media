import React, { useState } from 'react'
import './Landing.css'
import Header from '../Components/Header'
import HomeImg from '../Components/HomeImg'

function Landing() {



  return (


    <>

      {/* Landing Page */}
      <section className='Landing'>



        {/* HOME - SLIDER */}
        <div className='w-100 Slider'>


          <header>

            <Header />

          </header>


          <div>
            <HomeImg />

          </div>


        </div>

       

      </section>

    </>



  )



}

export default Landing