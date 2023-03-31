import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import Navbar from './Navbar'
export default function Maincont() {
 AOS.init();
  return (
    <div className='main-container'>
      <Navbar />
     <div className="main-container-items" id='left-text-container' >
      <h1 data-aos="flip-up"  data-aos-offset="200" data-aos-delay="50"  data-aos-duration="3000" >Games don't make you violent, <br /> lag does ....</h1>
      <p  data-aos="flip-down"  data-aos-offset="200" data-aos-delay="4000"  data-aos-duration="3000">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt praesentium accusamus blanditiis nam error repellendus ad dolorem velit nesciunt sequi vero nulla placeat ex natus maiores, porro et dolor tempora.</p>
      <div className='button'>
       Play Now !
     </div>
     </div>
     <div className="main-container-items" id='right-image-container'></div>
    </div>
  )
}
