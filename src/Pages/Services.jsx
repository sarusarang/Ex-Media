import React, { useState, useEffect } from 'react'
import Header from '../Components/Header'
import './Services.css'
import ServiceSlider from '../Components/ServiceSlider'
import Footer from '../Components/Footer'
import WattsApp from '../Components/WattsApp'
import Card from 'react-bootstrap/Card';
import AOS from "aos"
import "aos/dist/aos.css"


function Services() {


  // AOS ANIMATION
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [video, setVideo] = useState(true)


  // Handle Video state
  const handleVideo = () => {

    setVideo(false)

  }


  return (

    <>

      <section className='services'>


        {/* Header */}
        <header>

          <Header />

        </header>


        {/* SLIDER */}
        <div className='d-flex flex-column justify-content-center'>

          {

            video &&

            <video src="/Service-intro.mp4" playsInline autoPlay muted onEnded={handleVideo} className='service-intro'></video>

          }

          {

            !video &&

            <div>

              <ServiceSlider />

            </div>

          }

        </div>


        <div className='our-service w-100 container mt-5 p-2' data-aos="fade-up" data-aos-duration="1000">

          <h1 className='text-center'>OUR SERVICES</h1>
          <p className='text-center mb-5'>WE CREATE BEST PRODUCTS</p>

          <div className='row'  >


            <div className='col-md-4' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '25rem' }}>

                <Card.Img variant="top" src="/CARD-1.jpg" />


                <Card.Body>

                  <Card.Title>PRODUCT & MODEL PHOTOGRAPHY</Card.Title>

                  <Card.Text data-aos="fade-up" data-aos-duration="1000">

                    Capturing products' essence with skillful visuals for effective marketing impact. Product photography expertly captures items, enhancing their appeal through lighting, composition, and editing.
                    Crucial for marketing, e-commerce, and conveying product qualities to potential customers.


                  </Card.Text>


                </Card.Body>


              </Card>


            </div>


          </div>


        </div>


        {/* WhatsApp */}
        <div className='w-app'>

          <WattsApp />

        </div>


        {/* Footer */}
        <div className='w-100'>

          <Footer />

        </div>



      </section>


    </>




  )



}

export default Services