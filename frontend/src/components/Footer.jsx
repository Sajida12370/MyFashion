import React from 'react'
import instaImage1 from '../assets/instagram-1.jpg'
import instaImage2 from '../assets/instagram-2.jpg'
import instaImage3 from '../assets/instagram-3.jpg'
import instaImage4 from '../assets/instagram-4.jpg'
import instaImage5 from '../assets/instagram-5.jpg'
import instaImage6 from '../assets/instagram-6.jpg'

const Footer = () => {
  return (
   <>
    <footer className='section__container footer__container'>
    <div className='footer__col'>
    <h4>CONTACT INFO</h4>
    <p>
        <span>
            <i className='ri-map-pin-2-fill'></i>
        </span>
        123,London Bridge Street, London
    </p>
    <p>
    <span>
        <i className='ri-mail-fill'></i>
    </span>
        support@myfashion.com
    </p>
    <p>
    <span>
        <i className='ri-phone-fill'></i>
    </span>
        (+012) 3456 
    </p>

 </div>

 <div className='footer__col'>
 <h4>COMPANY</h4>
 <a href='/'>Home</a>
 <a href='/'>About Us</a>
 <a href='/'>Work with Us</a>
 <a href='/'>Our Blogs</a>
 <a href='/'>Terms and Conditions</a>
 </div>

<div className='footer__col'>
<h4>USEFUL LINKS</h4>
<a href='/'>Help</a>
 <a href='/'>Track Your Order</a>
 <a href='/'>Men</a>
 <a href='/'>Women</a>
 <a href='/'>Dresses</a>
</div>

<div className='footer__col'>
<h4>INSTAGRAM</h4>
<div className='instagram__grid'>

<img src={instaImage1} alt=''/>
<img src={instaImage2} alt=''/>
<img src={instaImage3} alt=''/>
<img src={instaImage4} alt=''/>
<img src={instaImage5} alt=''/>
<img src={instaImage6} alt=''/>
</div>

</div>

    </footer>


    <div className='footer__bar'>
    Copyright @ 2025 by My Fashion. All Rights Reserved

    </div>

   </>
  )
}

export default Footer
