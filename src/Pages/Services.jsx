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


        <div className='our-service w-100 container mt-5 p-2 mb-5' data-aos="fade-up" data-aos-duration="1000">

          <h1 className='text-center'>OUR SERVICES</h1>
          <p className='text-center mb-5'>WE CREATE BEST PRODUCTS</p>

          <div className='row'  >


            <div className='col-md-4 col-12 col1' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '26rem' }}>

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



            <div className='col-md-4 col-12 col1' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '26rem' }}>

                <Card.Img variant="top" src="/CARD-2.jpg" />


                <Card.Body>

                  <Card.Title>PROMOTIONAL & BRAND VIDEO CREATION</Card.Title>

                  <Card.Text data-aos="fade-up" data-aos-duration="1000">

                    Crafting compelling promotional videos that powerfully convey brand messaging,
                    evoking emotions and driving engagement. A strategic visual tool for modern marketing, capturing attention and fostering connections.



                  </Card.Text>


                </Card.Body>

              </Card>

            </div>






            <div className='col-md-4 col-12 col1' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '26rem' }}>

                <Card.Img variant="top" src="/CARD-3.jpg" />


                <Card.Body>

                  <Card.Title>BRANDING GRAPHICS</Card.Title>

                  <Card.Text data-aos="fade-up" data-aos-duration="1000">

                    Capturing products' essence with skillful visuals for effective marketing impact. Product photography expertly captures items, enhancing their appeal through lighting, composition, and editing.
                    Crucial for marketing, e-commerce, and conveying product qualities to potential customers.


                  </Card.Text>


                </Card.Body>

              </Card>

            </div>



            <div className='col-md-4 col-12 col1 mt-5' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '26rem' }}>

                <Card.Img variant="top" src="https://www.exmedia.in/assets/images/services/ui.jpg" />


                <Card.Body>

                  <Card.Title>PRODUCT & SERVICE GRAPHICS</Card.Title>

                  <Card.Text data-aos="fade-up" data-aos-duration="1000">

                    Products and service graphics visually communicate offerings, illustrating features and benefits. Enhancing understanding, these visuals aid marketing, presentations, and customer
                    engagement, driving successful communication and business growth


                  </Card.Text>


                </Card.Body>

              </Card>

            </div>




            <div className='col-md-4 col-12 col1 mt-5' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '26rem' }}>

                <Card.Img variant="top" src="https://www.exmedia.in/assets/images/services/handp.jpg" />


                <Card.Body>

                  <Card.Title>BUSINESS STRATEGY DEVELOPMENT</Card.Title>

                  <Card.Text data-aos="fade-up" data-aos-duration="1000" className='pb-5 pt-3'>

                    We Can formulate comprehensive plans that define a company's goals, tactics, and direction, guiding
                    decisions to achieve sustainable growth and competitive advantage.


                  </Card.Text>


                </Card.Body>

              </Card>

            </div>





            <div className='col-md-4 col-12 col1 mt-5' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '26rem' }}>

                <Card.Img variant="top" src="https://www.exmedia.in/assets/images/services/future.jpg" />


                <Card.Body>

                  <Card.Title>MARKET RESEARCH & ANALYTICS</Card.Title>

                  <Card.Text data-aos="fade-up" data-aos-duration="1000" className='pb-3'>

                    exmedia will do Market research and analytics involving collecting, analyzing, and interpreting data to gain insights into consumer
                    behaviors and market trends, aiding informed business decisions and strategy refinement.


                  </Card.Text>


                </Card.Body>

              </Card>

            </div>





            <div className='col-md-4 col-12 col1 mt-5' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '26rem' }}>

                <Card.Img variant="top"   src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/01/104228210.jpg?auto=format&q=60&fit=max&w=930" />


                <Card.Body>

                  <Card.Title>WEB & MOBILE APP DEVELOPMENT</Card.Title>

                  <Card.Text data-aos="fade-up" data-aos-duration="1000" className='pb-5'>

                    Unlock your online potential with a dynamic multifaceted & high-performing website. We blend innovation
                    and aesthetics to craft websites that elevate brands, engage visitors, and deliver exceptional user experiences.


                  </Card.Text>


                </Card.Body>

              </Card>

            </div>


            <div className='col-md-4 col-12 col1 mt-5' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '26rem' }}>

                <Card.Img variant="top" src="https://www.exmedia.in/assets/images/services/digitalonline.jpg" />


                <Card.Body>

                  <Card.Title>DIGTAL MARKETING</Card.Title>

                  <Card.Text data-aos="fade-up" data-aos-duration="1000" className='pb-3'>

                    We can maximize any business and online presence with Digital marketing through strategic campaigns across
                    platforms. It includes SEO, social media, content, and analytics to reach, engage, and convert target audiences effectively.


                  </Card.Text>


                </Card.Body>

              </Card>

            </div>




            <div className='col-md-4 col-12 col1 mt-5' data-aos="fade-up" data-aos-duration="1000">

              <Card style={{ width: '26rem' }}>

                <Card.Img variant="top"  src="https://www.exmedia.in/assets/images/services/ai.jpg" />


                <Card.Body>

                  <Card.Title>SATELLITE MEDIA</Card.Title>

                  <Card.Text data-aos="fade-up" data-aos-duration="1000" className='pb-5'>

                    Works to Elevate business through Satellite Media. Harness upgrade technology
                    to expand reach, enhance communication, and connect with audiences on a global scale for unprecedented growth


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