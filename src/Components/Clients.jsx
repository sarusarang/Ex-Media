import React from 'react'
import Slider from "react-slick"

function Clients() {



  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]



  }


  return (


    <>

      <section className='client mt-5'>


        <Slider {...settings}>


          <div>

            <div className='box  p-4'>

              <img src="https://png.pngtree.com/element_our/sm/20180415/sm_5ad34449bac27.jpg" style={{ borderRadius: '2rem' }} className='img-fluid' alt="" />

            </div>

          </div>



          <div>

            <div className='box  p-4'>

              <img src="https://png.pngtree.com/template/20191030/ourmid/pngtree-travel-logo-airplane-design-airplane-tickets-travel-agencies-image_325199.jpg" style={{ borderRadius: '2rem' }} className='img-fluid' alt="" />

            </div>

          </div>




          <div>

            <div className='box  p-4'>

              <img src="https://png.pngtree.com/png-vector/20190304/ourmid/pngtree-growth-business-company-logo-png-image_728232.jpg" style={{ borderRadius: '2rem' }} className='img-fluid' alt="" />

            </div>

          </div>


          <div>

            <div className='box p-4'>

              <img src="https://t3.ftcdn.net/jpg/03/98/88/76/360_F_398887683_40eDaYwdSw0OMpw3yBteYTfGWaw4ILdC.jpg" style={{ borderRadius: '2rem' }} className='img-fluid' alt="" />

            </div>

          </div>



          <div>

            <div className='box me-2 p-4'>

              <img src="https://img.freepik.com/premium-vector/360-36-logo-design_594430-154.jpg?w=360" style={{ borderRadius: '2rem' }} className='img-fluid' alt="" />

            </div>

          </div>






        </Slider>


      </section>



    </>




  )



}

export default Clients