import React, {useState} from 'react'
import Navbar from './Navbar'
import {Link} from "react-router-dom";





function Portfolio() {

    const [filter,setfilter] = useState(1)
    
    if(filter === 2){
        return (
        <div style={{minWidth:'100vh'}}>
            <Navbar/>
            <div className='filter-nav'>
                <div onClick={()=>setfilter(1)}>Tous</div>
                <div onClick={()=>setfilter(2)}>webdesign</div>
                <div onClick={()=>setfilter(3)}>web/appli</div>
                <div onClick={()=>setfilter(4)}>Graphisme</div>
                <div onClick={()=>setfilter(5)}>Photographie</div>
                <div onClick={()=>setfilter(6)}>Illustration</div>
                <div onClick={()=>setfilter(7)}>Com 360°</div>
            </div>
         
            <div className='Cardzone'>
                
          
                    <div className='card'>          
                       <div className='cardbaggy' style={{width:'100%', height:'70%'}}></div>
                       <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Baggy</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                        
                    </div>
                    <div className='card'>          
                    <div className='cardimgJardinage' style={{width:'100%',height:'70%'}}></div>                       
                     <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Jardinage</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                    </div>
                    <div className='card'>         
                        <div className='cardimgNemausus' style={{width:'100%',height:'70%'}}></div>
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Nemausus Consulting</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                    </div>

            </div>
            <div className='colorfooter'>
                                <Link class="mentionlegale" to='/mentionslegales' aria-label="Mentionlegales">mentions légales / RGPD | </Link>
                                <a href='#'><span>donka creation</span></a>
                            </div>
        </div>
    )}

    else if(filter === 1){return (
        <div style={{minWidth:'100vh'}}>
            <Navbar/>
            <div className='filter-nav'>
                <div onClick={()=>setfilter(1)}>Tous</div>
                <div onClick={()=>setfilter(2)}>webdesign</div>
                <div onClick={()=>setfilter(3)}>web/appli</div>
                <div onClick={()=>setfilter(4)}>Graphisme</div>
                <div onClick={()=>setfilter(5)}>Photographie</div>
                <div onClick={()=>setfilter(6)}>Illustration</div>
                <div onClick={()=>setfilter(7)}>Com 360°</div>
            </div>
         
            <div className='Cardzone'>
                
                    <div className='card'>          
                    <div className='cardbaggy' style={{width:'100%', height:'70%'}}></div>
                       <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Baggy</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                        
                    </div>
                    <div className='card'>          
                    <div className='cardimgJardinage' style={{width:'100%',height:'70%'}}></div>                       
                     <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Jardinage</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                    </div>
                    <div className='card'>         
                        <div className='cardimgNemausus' style={{width:'100%',height:'70%'}}></div>
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Nemausus Consulting</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                    </div>


                    <div className='card'>          
                        <div className='cardimglocation' style={{width:'100%',height:'70%'}}></div>                       
                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                <h2>Locapic</h2>
                                {/* <div className='cardbtn'> Decouvrez</div> */}
                            </div>
                        </div>
                        <div className='card'>          
                        <div className='cardmynaturalhealth' style={{width:'100%', height:'70%'}}></div>
                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                <h2>Natural Health</h2>
                                {/* <div className='cardbtn'> Decouvrez</div> */}
                            </div>
                        </div>
                        <div className='card'>          
                        <div className='carddashboard' style={{width:'100%', height:'70%'}}></div>
                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                <h2>dashboard</h2>
                                {/* <div className='cardbtn'> Decouvrez</div> */}
                            </div>
                    </div>

                    <div className='card'>          
                    <div className='cardgrandfrais' style={{width:'100%',height:'70%'}}></div>                                
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Grand frais flyer</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                    </div>

                    <div className='card'>          
                    <div className='cardecolodge' style={{width:'100%',height:'70%'}}></div>                                 
                
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Ecolodge</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                    </div>
                    <div className='card'>          
                    <div className='cardokami' style={{width:'100%',height:'70%'}}></div>                                 
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Okami logo</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                    </div>

                    <div className='card1'>          
                            <div className='cardcarousel' style={{width:'100%', height:'70%'}}></div>
                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                <h2>Carousel de nîmes</h2>
                            </div>
                    </div>

                    <div className='card1'>          
                    <div className='cardmariage' style={{width:'100%', height:'70%'}}></div> 
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Mariage coiffure</h2>
                        </div>
                    </div>

                    <div className='card1'>          
                    <div className='cardportrait' style={{width:'100%', height:'70%'}}></div>           
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Portrait</h2>
                            
                        </div>
                    </div>

                    <div className='card'>          
                        <div className='cardcosmaunote' style={{width:'100%',height:'70%'}}></div>                                
                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                <h2>Cosmonaute</h2>
                                {/* <div className='cardbtn'> Decouvrez</div> */}
                            </div>
                    </div>


                    <div className='card'>          
                    <div className='cardcerf' style={{width:'100%',height:'70%'}}></div>                                
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Cerf</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                    </div>

                    <div className='card'>          
                    <div className='cardoeil' style={{width:'100%',height:'70%'}}></div>                                
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Oeil</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                    </div>

                    <div className='card'>          
                        <div className='cardvoyage' style={{width:'100%',height:'70%'}}></div>                                
                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                <h2>Voyage des sens</h2>
                                {/* <div className='cardbtn'> Decouvrez</div> */}
                            </div>
                    </div>

                    <div className='card'>   
                    <div className='cardhallstatt' style={{width:'100%',height:'70%'}}></div>  
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Festival celtique</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}

                        </div>       
                    </div>
                    
                    
                    <div className='card'>
                    <div className='cardecho' style={{width:'100%',height:'70%'}}></div>                                
                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>echo la ville vous parle</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>                     
                                    

                    </div>
            
            </div>
            <div className='colorfooter'>
                                <Link class="mentionlegale" to='/mentionslegales' aria-label="Mentionlegales">mentions légales / RGPD | </Link>
                                <a href='#'><span>donka creation</span></a>
                            </div>
        </div>)}
        
        else if(filter === 3){return (
            <div>
                <Navbar/>
                <div className='filter-nav'>
                    <div onClick={()=>setfilter(1)}>Tous</div>
                    <div onClick={()=>setfilter(2)}>webdesign</div>
                    <div onClick={()=>setfilter(3)}>web/appli</div>
                    <div onClick={()=>setfilter(4)}>Graphisme</div>
                    <div onClick={()=>setfilter(5)}>Photographie</div>
                    <div onClick={()=>setfilter(6)}>Illustration</div>
                    <div onClick={()=>setfilter(7)}>Com 360°</div>
                </div>
             
                <div className='Cardzone'>
                    
              
                        <div className='card'>          
                        <div className='cardimglocation' style={{width:'100%',height:'70%'}}></div>                       
                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                <h2>Locapic</h2>
                                {/* <div className='cardbtn'> Decouvrez</div> */}
                            </div>
                        </div>
                        <div className='card'>          
                        <div className='cardmynaturalhealth' style={{width:'100%', height:'70%'}}></div>
                       <div className='flexcard' style={{width:'100%', height:'30%'}}>
                            <h2>Natural Health</h2>
                            {/* <div className='cardbtn'> Decouvrez</div> */}
                        </div>
                        </div>
                        <div className='card'>          
                        <div className='carddashboard' style={{width:'100%', height:'70%'}}></div>
                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                <h2>dashboard</h2>
                                {/* <div className='cardbtn'> Decouvrez</div> */}
                            </div>
                        </div>
    
                </div>
                <div className='colorfooter'>
                                <Link class="mentionlegale" to='/mentionslegales' aria-label="Mentionlegales">mentions légales / RGPD | </Link>
                                <a href='#'><span>donka creation</span></a>
                            </div>
            </div>)}
            else if(filter === 4){return (
                <div>
                    <Navbar/>
                    <div className='filter-nav'>
                        <div onClick={()=>setfilter(1)}>Tous</div>
                        <div onClick={()=>setfilter(2)}>webdesign</div>
                        <div onClick={()=>setfilter(3)}>web/appli</div>
                        <div onClick={()=>setfilter(4)}>Graphisme</div>
                        <div onClick={()=>setfilter(5)}>Photographie</div>
                        <div onClick={()=>setfilter(6)}>Illustration</div>
                        <div onClick={()=>setfilter(7)}>Com 360°</div>
                    </div>
                 
                    <div className='Cardzone'>
                        
                  
                            <div className='card'>          
                            <div className='cardgrandfrais' style={{width:'100%',height:'70%'}}></div>                                
                             <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                    <h2>Grand frais flyer</h2>
                                    {/* <div className='cardbtn'> Decouvrez</div> */}
                                </div>
                            </div>
                            <div className='card'>          
                            <div className='cardecolodge' style={{width:'100%',height:'70%'}}></div>                                 
                        
                                <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                    <h2>Ecolodge</h2>
                                    {/* <div className='cardbtn'> Decouvrez</div> */}
                                </div>
                            </div>
                            <div className='card'>          
                            <div className='cardokami' style={{width:'100%',height:'70%'}}></div>                                 
                                <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                    <h2>Okami logo</h2>
                                    {/* <div className='cardbtn'> Decouvrez</div> */}
                                </div>
                            </div>
        
                    </div>
                    <div className='colorfooter'>
                                <Link class="mentionlegale" to='/mentionslegales' aria-label="Mentionlegales">mentions légales / RGPD | </Link>
                                <a href='#'><span>donka creation</span></a>
                            </div>
                </div>)}
                else if(filter === 5){return (
                    <div>
                        <Navbar/>
                        <div className='filter-nav'>
                            <div onClick={()=>setfilter(1)}>Tous</div>
                            <div onClick={()=>setfilter(2)}>webdesign</div>
                            <div onClick={()=>setfilter(3)}>web/appli</div>
                            <div onClick={()=>setfilter(4)}>Graphisme</div>
                            <div onClick={()=>setfilter(5)}>Photographie</div>
                            <div onClick={()=>setfilter(6)}>Illustration</div>
                            <div onClick={()=>setfilter(7)}>Com 360°</div>
                        </div>
                     
                        <div className='Cardzone'>
                            
                      
                                <div className='card1'>          
                                    <div className='cardcarousel' style={{width:'100%', height:'70%'}}></div>
                                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                            <h2>Carousel de nîmes</h2>
                                    </div>
                                </div>
                                <div className='card1'>          
                                <div className='cardmariage' style={{width:'100%', height:'70%'}}></div> 
                                    <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                        <h2>Mariage coiffure</h2>
                                    </div>
                                </div>
                                <div className='card1'>          
                                <div className='cardportrait' style={{width:'100%', height:'70%'}}></div>           
                                    <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                        <h2>Portrait</h2>
                                        
                                    </div>
                                </div>
            
                        </div>
                        <div className='colorfooter'>
                                <Link class="mentionlegale" to='/mentionslegales' aria-label="Mentionlegales">mentions légales / RGPD | </Link>
                                <a href='#'><span>donka creation</span></a>
                            </div>
                    </div>)}
                    else if(filter === 6){return (
                        <div>
                            <Navbar/>
                            <div className='filter-nav'>
                                <div onClick={()=>setfilter(1)}>Tous</div>
                                <div onClick={()=>setfilter(2)}>webdesign</div>
                                <div onClick={()=>setfilter(3)}>web/appli</div>
                                <div onClick={()=>setfilter(4)}>Graphisme</div>
                                <div onClick={()=>setfilter(5)}>Photographie</div>
                                <div onClick={()=>setfilter(6)}>Illustration</div>
                                <div onClick={()=>setfilter(7)}>Com 360°</div>
                            </div>
                         
                            <div className='Cardzone'>
                                
                          
                                    <div className='card'>          
                                    <div className='cardcosmaunote' style={{width:'100%',height:'70%'}}></div>                                
                                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                            <h2>Cosmonaute</h2>
                                            {/* <div className='cardbtn'> Decouvrez</div> */}
                                        </div>
                                    </div>
                                    <div className='card'>          
                                    <div className='cardcerf' style={{width:'100%',height:'70%'}}></div>                                
                                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                            <h2>Cerf</h2>
                                            {/* <div className='cardbtn'> Decouvrez</div> */}
                                        </div>
                                    </div>
                                    <div className='card'>          
                                    <div className='cardoeil' style={{width:'100%',height:'70%'}}></div>                                
                                        <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                            <h2>Oeil</h2>
                                            {/* <div className='cardbtn'> Decouvrez</div> */}
                                        </div>
                                    </div>
                            </div>
                            <div className='colorfooter'>
                                <Link class="mentionlegale" to='/mentionslegales' aria-label="Mentionlegales">mentions légales / RGPD | </Link>
                                <a href='#'><span>donka creation</span></a>
                            </div>
                        </div>)}
                        else if(filter === 7){return (
                            <div>
                                <Navbar/>
                                <div className='filter-nav'>
                                    <div onClick={()=>setfilter(1)}>Tous</div>
                                    <div onClick={()=>setfilter(2)}>webdesign</div>
                                    <div onClick={()=>setfilter(3)}>web/appli</div>
                                    <div onClick={()=>setfilter(4)}>Graphisme</div>
                                    <div onClick={()=>setfilter(5)}>Photographie</div>
                                    <div onClick={()=>setfilter(6)}>Illustration</div>
                                    <div onClick={()=>setfilter(7)}>Com 360°</div>
                                </div>
                             
                                <div className='Cardzone'>
                              
                              
                                        <div className='card'>          
                                        <div className='cardvoyage' style={{width:'100%',height:'70%'}}></div>                                
                                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                                <h2>Voyage des sens</h2>
                                                {/* <div className='cardbtn'> Decouvrez</div> */}
                                            </div>
                                        </div>
                                        <div className='card'>   
                                        <div className='cardhallstatt' style={{width:'100%',height:'70%'}}></div>  
                                         <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                                <h2>Festival celtique</h2>
                                                {/* <div className='cardbtn'> Decouvrez</div> */}

                                            </div>       
                                      
                                        </div>
                                        <div className='card'>          
                                        
                                        
                                        <div className='cardecho' style={{width:'100%',height:'70%'}}></div>                                
                                            <div className='flexcard' style={{width:'100%', height:'30%'}}>
                                                <h2>echo la ville vous parle</h2>
                                                {/* <div className='cardbtn'> Decouvrez</div> */}
                                            </div>                     
                                           

                                        </div>
                    
                                </div>
                                <div className='colorfooter'>
                                        <Link class="mentionlegale" to='/mentionslegales' aria-label="Mentionlegales">mentions légales / RGPD | </Link>
                                        <a href='#'><span>donka creation</span></a>
                                </div>
                            </div>)}
                           
                            
}

export default Portfolio
