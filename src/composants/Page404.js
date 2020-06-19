import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import Navbar from './Navbar';

function Page404() {
    return (
        <div>
            <Navbar/>

         
        <div className='error-404'>
      
                <div className='text-error'>
              
                <h1>Error 404</h1>
                <p>
                Selon nos récentes informations. La page que vous recherchez est toujours portée disparue 
                </p>
                </div>
                <div className='img-error'>
                    <img src='../../detective.png' width='400px' height='400px'></img>
                </div>


        </div>
        </div>
    )
}

export default Page404
