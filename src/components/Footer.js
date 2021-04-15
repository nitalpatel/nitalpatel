import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Contact me on LinkIn, email (nitalpatel90@gmail.com), or by phone to see how 
                    I may best serve as an asset to you
                </p>
                <p className='footer-subscription-text'>
                    You can contact me any time.
                </p>
                <div className='input-areas'>
                    <form>
                      <input type='email' name='email' placeholder='Your Email' className='footer-input'/> 
                      <Button buttonStyle='btn--outline'>Contact Me</Button> 
                    </form>
                </div>
             </section>
             <div className="footer-links">
                <div className="footer-link-wrapper">
                   <div className="footer-link-items">
                      <h2>About</h2> 
                      <Link to='/about-me'>How I work</Link>
                      <Link to='/'>Testimonials</Link> 
                      <Link to='/'>Careers</Link> 
                      <Link to='/'>Investors</Link>
                      <Link to='/'>Terms of Service</Link> 
                    </div> 
                </div> 
             </div>
             <section className='social-media'>
               <div className='social-media-wrap'>
                 <div className='footer-logo'>
                     <Link to='/' className='social-logo'>
                         NP <i className='fab fa-typo3' />
                     </Link>
                </div>
                <small className='website-rights'>NP 2021</small>
                <div className='social-icons'>
                   <Link className='social-icon-link facebook'
                   to='/'
                   target='_blank'
                   aria-label='Facebook'                   
                   >
                     <i className='fab fa-facebook-f' />  
                    </Link>
                    <Link className='social-icon-link instagram'
                   to='/'
                   target='_blank'
                   aria-label='Instagram'                   
                   >
                     <i className='fab fa-instagram' />  
                    </Link>
                    <Link className='social-icon-link linkedin'
                   to='/'
                   target='_blank'
                   aria-label='LinkedIn'                   
                   >
                     <i className='fab fa-linkedin' />  
                    </Link> 
                </div>  
            </div>  
        </section>
     </div>
    )
}
export default Footer;
