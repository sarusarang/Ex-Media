import React, { useState, useEffect } from 'react'
import './Landing.css'
import Header from '../Components/Header'
import HomeImg from '../Components/HomeImg'
import { TypeAnimation } from 'react-type-animation';
import AOS from "aos";
import "aos/dist/aos.css";
import Clients from '../Components/Clients';

function Landing() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


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



        {/* Who Are we */}
        <div className='Who-are p-5' data-aos="fade-up" data-aos-duration="1000">

          <h1 className='text-center'>WHO WE ARE EXMEDIA </h1>


          <TypeAnimation

            splitter={(str) => str.split(/(?= )/)}

            sequence={[
              "Since 2006, Exmedia has been a trailblazing Advertisement agency, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency; we're your partners in shaping brand legacies. With a deep understanding of market dynamics, consumer behavior, and emerging trends, Exmedia is your compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the forefront of industry innovation.<br>Based on our strategy work, we create distinctive brand Your Ultimate Advertisement Company, where innovation meets creativity to redefine your brand's journey. Our agency stands as a pillar of excellence, providing a comprehensive suite of services including Studio, Graphics, and Branding. Step into our cutting-edge studio, a hub of ingenuity where ideas take shape. From brainstorming sessions to concept realization, our team collaborates to bring your vision to life. Our studio is the birthplace of dynamic campaigns that captivate and resonate.",
              10000000000,
              '',
            ]}

            speed={{ type: 'keyStrokeDelayInMs', value: 30 }}

            omitDeletionAnimation={true}
            className='typed-p'
            style={{ fontSize: '1em', display: 'block', minHeight: '200px', }}


          />

        </div>


        {/* What we do */}
        <div className='what-we mt-3' data-aos="fade-up" data-aos-duration="1000">


          <h1 className='text-center'>WHAT WE DO</h1>
          <p className='text-center'>WE OFFER DIGTAL SOLUTIONS</p>



          <div className='what-we-background p-5 mt-5'>

            <h6>STUDIO</h6>
            <h3>ELEVATE YOUR IMPACTS & <br /> CONNECT BRANDS WITH <br /> CUSTOMERS.</h3>


            <div data-aos="fade-up" data-aos-duration="1000">

              <p>Where Creativity Finds Its Canvas. Our Studio Is A Haven For Innovative Ideas, Bringing Visions To Life With Precision And Passion. With State-Of-The-Art Equipment And A Team Of Skilled Professionals, We Craft Captivating Visuals That Tell Compelling Stories. Whether It's Photography, Videography, Or Audio Production, Our Studio Is Equipped To Deliver Excellence In Every Frame And Note. From Concept To Execution, We Transform Concepts Into Breathtaking Realities That Leave Lasting Impressions. At Exmedia, Creativity Knows No Bounds, And Our Studio Can Convert Imagination Takes It To Another Unexpected Level. Step Into A World Of Boundless Possibilities And Let Your Brand's Story Unfold In Stunning Visual Brilliance.</p>

            </div>



          </div>



          <div className='Graphics p-5 mt-5' data-aos="fade-up" data-aos-duration="1000">

            <h6>GRAPHICS</h6>
            <h3>DESIGNS THAT <br /> INSPIRE, CONNECT, <br />AND LEAVE A LASTING <br /> IMPRESSION</h3>


            <div data-aos="fade-up" data-aos-duration="1000">

              <p>Introducing Exmedia Graphic Design, where imagination meets design prowess. Our Graphic studio is a playground for innovative ideas, transforming concepts into visually stunning realities. With a skilled team of designers, we craft graphics that captivate and communicate. From logos to intricate designs, our expertise spans a spectrum of visual elements. We merge artistry with strategy, ensuring each design aligns seamlessly with your brand's essence. At Exmedia, we understand the power of visuals to leave indelible impressions. Step into a world of creativity, where every pixel tells a story. Elevate your brand with Exmedia Graphic Design and make your visual identity a masterpiece. </p>

            </div>



          </div>



          <div className='Brand p-5 mt-5' data-aos="fade-up" data-aos-duration="1000">

            <h6>BRANDING</h6>
            <h3>YOUR BRAND, YOUR STORY: <br />WE SHAPE IDENTITIES <br /> WITH IMPACT</h3>


            <div data-aos="fade-up" data-aos-duration="1000">

              <p>Welcome to Exmedia Branding, where identities come to life. Our expertise lies in shaping brands that resonate deeply and endure. With a keen understanding of market dynamics, we craft strategic brand identities that leave lasting imprints. From logos to comprehensive brand strategies, our team blends creativity with market insights to create identities that stand out. We believe in the power of authentic storytelling and meaningful connections. At Exmedia, we architect legacies. Step into a world of brand transformation, where every element speaks volumes, and consider all updated strategies to build and ensure the trust of your brand in the respective community or customer. Choose Exmedia Branding to make your mark and forge enduring relationships with your Valuable customer & audience.</p>

            </div>



          </div>


        </div>



        <div className='client'>

          <Clients/>

        </div>





      </section>

    </>



  )



}

export default Landing