import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV, faHome, faEnvelope, faScroll, faBook, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


function Navbar() {
    return (
    <div>
        <nav class="navbar navbar-expand-lg " style={{backgroundColor:'rgba(0,0,0,0)!important'}} >
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" style={{backgroundColor:'#3F63EF',borderRadius:'50%',color:'white'}}>
               
                <FontAwesomeIcon icon={faEllipsisV}/>
                </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{color:'white'}}>
            <ul class="navbar-nav ml-auto liens" style={{ display: 'flex',flexDirection: 'column',top:'50%', right: 0}}>
            <li class="nav-item active">
            <Link class="nav-link" to='/' aria-label="Accueil"><div className='border-icon'><FontAwesomeIcon icon={faHome}/></div></Link>
                </li>
                <li class="nav-item">

                    <Link class="nav-link" id="booknav" to='/portfolio' aria-label="Book"><div className='border-icon'><FontAwesomeIcon icon={faBook}/></div></Link>
                   
                </li>

                <li class="nav-item">
                    <Link class="nav-link" id="cv"to='/cv' aria-label="Cv"><div className='border-icon'><FontAwesomeIcon icon={faScroll}/></div></Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="tel:'0643567176" aria-label="Tel"><div className='border-icon'><FontAwesomeIcon icon={faPhoneAlt}/></div></a>
                </li>
                <li class="nav-item">
                <Link class="nav-link" to='/contact' aria-label="Contact"><div className='border-icon'><FontAwesomeIcon icon={faEnvelope}/></div></Link>
                </li>
            </ul>
               
                
            </div>
        </nav>
    </div>
    )
}

export default Navbar
