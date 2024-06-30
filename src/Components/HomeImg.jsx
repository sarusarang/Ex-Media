import React from 'react'
import './Home.css'
import 'animate.css'
import { Link } from 'react-router-dom'

function HomeImg() {



    return (


        <>

            {/* Home Slider */}
            <section className='home-img p-5'>


                <div className='slide-text p-5 ps-4'>

                    <h1 class="animate__animated animate__fadeInLeft">CRAFTING </h1>
                    <h1 class="animate__animated animate__fadeInLeft">BRAND IDENTITY</h1>
                    <h1 class="animate__animated animate__fadeInLeft">CAPTURING MOMENTS </h1>
                    <p class="animate__animated animate__fadeInLeft">SINCE 2006 , EXMEDIA HAS BEEN A TRAILBLAZING ADVERTISEMENT AGENCY</p>

                    <Link to={'/services'} style={{textDecoration:'none'}}>

                        <button className='btn-explore'> Explore More</button>

                    </Link>


                </div>


            </section>

        </>



    )



}

export default HomeImg