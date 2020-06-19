import React, {useEffect, useState} from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
import Navbar from './Navbar'
import Competences from './Competences'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faEnvelope, faScroll, faBook, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";
import 'pure-react-carousel/dist/react-carousel.es.css';

function Banner() {
	const[loader,setloader]=useState(true)

	useEffect(() => {
		setTimeout(()=>{
			setloader(false)

		}, 1000)

	}, [])
	if(loader === true){
	return(

		<div style={{width:'100%', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
		<Loader 
		   type="Grid"
		   color="#3F63EF"
		   height={100}
		   width={100}
		   timeout={1000} //3 secs
  
		/>
		</div>
	);
	} else{
		return (
		
		<div>
			<Navbar/>
			
			<div className='first-banner'>
				
				<div className='chelou'>
			
	
					<div className='donka-img'>
						{/* <div className='image-donka-position'> */}
						{/* </div> */}
					</div>
					<img className='margin-img'src='../../donka-crea.jpg' alt='donka-creation'></img>
	
				</div>
				
			
				<div className='text-banner'>

				<div>
				<a href='https://www.facebook.com/donkacreation/'><img src='../../facebook-with-circle.svg' alt='facebook'></img></a>
				<a href='https://www.instagram.com/donkacreation/?hl=fr'> <img src='../../instagram-with-circle.svg' alt='instagram'></img></a>
                <a href='https://www.linkedin.com/in/donkaprat/'><img src='../../linkedin-with-circle.svg' alt='linkedin'></img></a>
				
				</div>
				<header>
					<h1>Graphiste et developpeur front et back sur nîmes</h1>
				</header>				
			<span className='designer'>Designer Graphic</span>
				<p className='text-presentation'>

				Donka PRAT graphiste/developpeur web freelance basée sur Nîmes.
				Titulaire d’un Bachelor Chef de Projet Digital délivré en Juin 2019 par l’ISDD.
				Petite je rêvais de devenir cosmonaute. C’est à 21 ans que mon rêve s’est réalisé.
				J’ai été admise en 2020 à la Capsule Academy où j’ai suivi une formation intensive en développement 
				web et mobile sur la planète Lyon. Enfin de retour, je suis dorénavant disponible pour
				vous accompagner dans de nouvelles aventures digitales.
				Je vous invite à découvrir ma planète et vous propose de mettre mon agilité et ma créativité au service de votre développement.
.</p>
<div class="fb-like" data-href="https://www.facebook.com/donkacreation" data-width="100"  width='200px'data-layout="button_count" data-action="like" data-size="large" data-share="false"></div>

				<Link class="btnportfolio" to='/portfolio' aria-label="Book">Portfolio</Link>
				</div>

	
			</div>
			
			<div className='color-services'>
				<div className='mes-services'>
					<h2>Mes services</h2>
				</div>

				<div className='number'>
						<div className='webdes'>
								<span className='bold-num'>01</span>
								<h3>Web-designer</h3>
								<p>Optimisez votre visibilité : 
								Création de site internet WordPress 
								(Sites vitrine, Ecommerce, Marketplace, 
								Plateforme sur-mesure...) - SEO - Community Management 
								- Logo - Référencement - Campagnes publicitaires Google Ads, Facebook Ads… </p>
						</div>
						<div className='webdes'>
								<span className='bold-num'>02</span>
								<h3>Web/application</h3>
								<p>Full Stack Web/Mobile Developer, 
								je réalise vos projets web et applications mobiles en Réactivité Native</p>
						</div>
						<div className='webdes'>
								<span className='bold-num'>03</span>
								<h3>Graphisme</h3>
								<p>Je vous accompagne dans  vos projets graphiques: 
								élaboration d'identité visuelle et de charte graphique,
								mise en page de rapport d'activité, dossier de presse, 
								magazine, conception de plaquettes d'entreprises, affiches… </p>
						</div>
			
				</div>
			</div>
			<Competences/>
			<div className='confiance'>
				<h2>Ils me font confiance</h2>
				<div className="carousel">
				<div className='confiance-img'>
				
				<a href='https://nemausus-consulting.fr/' target="_blank" rel="noopener noreferrer"><img src='../../logo-nemausus.svg' alt='logo nemausus consulting' width='100px'/></a>
				<a href='https://roadcom.eu/' target="_blank" rel="noopener noreferrer"><img src='../../logo-roadcom.svg' alt='logo roadcom'/></a>
				<a href='http://www.aspcn.fr/accueil.html' target="_blank" rel="noopener noreferrer"><img src='../../logo-aspcn.svg' alt='logo aspcn nimes'/></a>
				<a href="https://joy-s.fr/" target="_blank" rel="noopener noreferrer"><img src='../../logo-joys.png' alt='logo joys'/></a>
				
				
				</div>
				</div>
			</div>

			<div className='foot'>


			<div className='lien-b'>

			<img src='../../logo-donka.svg' alt='logo donka creation'></img>
			 	<a href='#'><FontAwesomeIcon icon={faHome}/>Accueil</a>
				<a href='#'><FontAwesomeIcon icon={faBook}/>Book </a>
				<a href='#'><FontAwesomeIcon icon={faScroll}/>Cv</a>
				<a href='#'><FontAwesomeIcon icon={faPhoneAlt}/>tel </a>
				<a href='#'><FontAwesomeIcon icon={faEnvelope}/>contact</a>

			</div>
			
			<div className='contact'>

				<Footer/>
			</div>
			
			</div>
			<div className='colorfooter'>
			<Link class="mentionlegale" to='/mentionslegales' aria-label="Mentionlegales">mentions légales / RGPD | </Link>
						<a href='#'><span>donka creation</span></a>

				</div>
			
		</div>
		
		)
	}
    
}

export default Banner
