import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {Link} from "react-router-dom";


function Contact() {
    return (<div>
                <div className='contact-container'>
                    <Navbar/>
                    <div className='contact'>
                        <div className='contact-me'>
                            <div className='direction-left'>
                                <h1>Contact</h1>
                                <p>N’hésitez pas a me contacter</p>
                            </div>
                            <div className='page-contact-form'>
                                <Footer />
                            </div>
                        </div>
                        

                    
                        <div className='carte'>
                        <div className='img-back-fleurs'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2878.017027882377!2d4.361007565503673!3d43.834744879115576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x12b42df2c2b48a95%3A0x34c402b7b3fc6e65!2sdonka%20prat!3m2!1d43.8357658!2d4.3616949!5e0!3m2!1sfr!2sfr!4v1586782560905!5m2!1sfr!2sfr" width="600" height="450" frameborder="0" style={{border:0, zIndex:100}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <div className='colorfooter'>
                <Link class="mentionlegale" to='/mentionslegales' aria-label="Mentionlegales">mentions légales / RGPD | </Link>
                <a href='#'><span>donka creation</span></a>
        </div>
</div>
    )
}

export default Contact
