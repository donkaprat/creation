import React, {useState} from 'react'
import {faPhone,faMapMarkerAlt,faCar,faUsers} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Timeline} from 'antd';
import 'antd/dist/antd.css';
import Navbar from './Navbar';

function Cv() {
    
    const [mode] = useState('left');


    return (
        <div className='cv-container'>
            <Navbar/>
            <div className='cv-row-one'>
                <h2>Donka Prat</h2>
                <h1>Graphiste / web designer / developpeur web JS</h1>
            </div>

            <div className='cv-row-two'>
                <div className='left-cv-row'>
                    <div>06.43.56.71.76<FontAwesomeIcon icon={faPhone}/></div>
                    <div>5 Rue Saint Thomas<FontAwesomeIcon icon={faMapMarkerAlt}/></div>
                </div>

                <div className='right-cv-row'>
                    <div><FontAwesomeIcon icon={faUsers}/>@donkacreation</div>
                    <div><FontAwesomeIcon icon={faCar}/>Permis B</div>
                </div>
            </div>

            <div className='cv-row-two-pics'>
                <img src='../../donka-crea.jpg' alt='cv-avatar' className='middle-cv-row'></img>
            </div>


            <div className='cv-row-three'>

                <div className='cv-col-one'>
                    <div style={{marginBottom:65,marginTop:100}}>
                        <h2>QUI SUIS-JE ?</h2>
                        <p>Donka PRAT, 
                            21 ans graphiste et web designer Freelance à Nimes. 
                            Titulaire d’un Bachelor Chef de Projet Digital. 
                            J’ai complété ma formation en intégrant la Capsule 
                            Academy à Lyon de janvier à mars 2020. Je suis mobile geographiquement France entière pour de nouvelles aventures digitales
                            </p>
                    </div>
                    <div style={{marginBottom:65,marginTop:100}}>
                        <h2>COMPÉTENCES</h2>
                        <h3>graphisme</h3>
                        <div className='graph' style={{marginBottom:65}}>
                            <img alt='photoshop' src='../../adobephotoshop.svg' ></img>
                            <img alt='illustrator' src='../../adobeillustrator.svg'></img>
                            <img alt='indesign' src='../../adobeindesign.svg'></img>
                
                            <img alt='lightroom' src='../../adobelightroomclassic.svg'></img>
                            <img alt='premiere' src='../../adobepremiere.svg'></img>
                            <img alt='xd' src='../../adobexd.svg'></img>
                        </div>
                        <h3>Web-design</h3>
                        <div className='graph' style={{marginBottom:65}}>
                            <img alt='html5' src='../../html5.svg'></img>
                            <img alt='css3' src='../../css3.svg'></img>
                            <img alt='github' src='../../bootstrap.svg'></img>
                            <img alt='nodejs' src='../../node-dot-js.svg'></img>
                            <img alt='react' src='../../react.svg'></img>
                            <img alt='redux' src='../../redux.svg'></img>
                            <img alt='postman' src='../../postman.svg'></img>
                            <img alt='mongodb' src='../../mongodb.svg'></img>
                            <img alt='github' src='../../expressjs.png'></img>
                            <img alt='github' src='../../github.svg'></img>
                            
                        </div>
                        <h3>Réseaux sociaux</h3>
                        <div className='graph' style={{marginBottom:65}}>
                            
                            <img src='../../facebook-with-circle.svg' alt='facebook'></img>
                            <img src='../../instagram-with-circle.svg' alt='instagram'></img>
                            <img src='../../linkedin-with-circle.svg' alt='linkedin'></img>
                        </div>

                    </div>
                    
                    <div style={{marginBottom:65,marginTop:100}}>
                        <h2>COMPETENCES RELATIONNELLES</h2>
                        <p>Travail d’équipe</p>
                        <p>La gestion du temps</p>
                        <p>La pensee creative</p>
                        <p>Flexibite</p>
                    </div>

                    <div style={{marginBottom:65,marginTop:100}}>
                        <h2>CENTRES D'INTERETS</h2>
                        <p>Arts graphiques | Dessin | Expos | Numérique | Travaux mannuels | Curieuse des nouveautés</p>
                    </div>
                </div>
                    


                <div className='cv-col-two' style={{marginBottom:65,marginTop:100}}>
                    <div>
                        <h2 className='cv-exp-title'>EXPÉRIENCE PROFESSIONNELLE</h2>
                        <Timeline mode={mode}>
                            <Timeline.Item label="Developpeur Web Fullstack">
                                <h2>Nemausus Consulting (CDD Mission)</h2>
                                <h3>17 juin 2019 au 13 Janvier 2020</h3>
                                <p>Développement d’une <b>plateforme</b> dans le <b>domaine de la Santé</b>pour le compte d’une Mutuelle cliente du Cabinet.
                                Langages utilisés :  
                                <b style={{color:'#3F63EF'}}> React, node Js, Express, mongo db / creation API Rest, Github)</b>
                                </p>
                            </Timeline.Item>
                            
                            <Timeline.Item label="Freelance">
                                <h2>Donka Creation</h2>
                                <h3>depuis fevrier 2019</h3>
                                <p>Projets <b>graphiques</b> et <b>web</b></p>
                            </Timeline.Item>
                            
                            <Timeline.Item label="Stage Web master">
                                <h2>Carlove</h2>
                                <h3>9 juillet - 17 août 2018</h3>
                                <p>Mise en place des pages sur  <b style={{color:'#3F63EF'}}> wordpress </b> sur les
                                    sites <b>carlove, moteur9, Carclim</b> Études et
                                    créations d’images / <b>Slogans / vidéos et logos
                                    garagistes</b> à créer / redessiner
                                </p>
                            </Timeline.Item>
                            <Timeline.Item label=" Stage Graphiste">
                                <h2>Stage Waliceo</h2>
                                <h3>1 Aout - 29 Septembre 2017</h3>
                                <p>Missions ponctuelles pour la <b>communauté sourde,
                                    recherches</b>et réalisations de <b>nouveaux visuels</b> ...
                                </p>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                    
                    <div>
                    <h2 className='cv-exp-title' style={{marginBottom:65,marginTop:100}}>FORMATIONS</h2>
                        <Timeline mode={mode}>
                                <Timeline.Item label="Developpeur Web Fullstack">
                                    <h2>CAPSULE ACADEMY</h2>
                                    <h3>13 Janvier 2020 - 20 Mars 2020</h3>
                                    <p> <b style={{color:'#3F63EF'}}>JavaScript, HTML, CSS, </b>
                                        Librarie <b style={{color:'#3F63EF'}}>Jquery, Node.js, MongoDB,NoSQL
                                        • React, API 
                                        • Bootstrap/ReactStrap/React Components</b></p>
                                </Timeline.Item>
                                
                                
                                <Timeline.Item label="Chef de projet digital">
                                    <h2>ISDD</h2>
                                    <h3><i>Bachelor chef de projet digital mention bien</i></h3>
                                    <h3>Octobre 2016 - Juin 2019</h3>
                                    <p>Réalisation de projets en tant que chef de projet,
                                        <i><b> Motion design</b></i> (<b style={{color:'#3F63EF'}}>after effect</b>), <i><b>Montage vidéo </b></i>(<b style={{color:'#3F63EF'}}>adobe
                                        premiere</b>)
                                    </p>
                                    <p>Communication et Publicité</p>
                                    <p>Web design (<b style={{color:'#3F63EF'}}>HTML,CSS</b>)</p>
                                    <p>Graphisme apprentissage des logiciels <i><b>PAO</b></i> (<b style={{color:'#3F63EF'}}>Indesign, Illustrator, Photoshop</b>)</p>
                                    <p>Methode agile</p>
                                </Timeline.Item>
                            </Timeline>
                    </div>
                </div>

            </div>
                
                
                
                
                
                
           
        </div>
    )
}

export default Cv
