import React, {useEffect} from 'react';
import './App.css';
import Banner from './composants/Banner';
import Portfolio from './composants/Portfolio';
import Contact from'./composants/Contact';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Cv from './composants/Cv';
import Mentionlegales from './composants/Mentionlegales';
import  ReactGa from 'react-ga';
import Page404 from './composants/Page404';
import {Helmet} from 'react-helmet'

function App() {

  useEffect(() => {
    ReactGa.initialize('UA-149495478-1')

    ReactGa.pageview(window.location.pathname + window.location.search)
  }, [])
  return (
    <div className="App">
         <Helmet>

           <link rel='canonical' href='https:/donka-creation.fr'></link>
           <meta name="description" content="Donka PRAT graphiste / webdesigner / developpeur web auto entrepreneuse et freelance basée sur Nîmes, titulaire d'un Bachelor Chef de Projet Digital."/>
            <meta name="keywords" content="HTML,CSS, JavaScript, graphiste, webdesigner, developpeur web, nimes, freelance"></meta>
            <meta name="author" content="Donka prat"/>
            <title>Donka creation, graphiste, webdesigner et developpeur web</title>
            
         </Helmet>
        <Router>
            <Switch>
                <Route path="/" exact component={Banner} />
                <Route path="/portfolio" component={Portfolio} />
                
                {/* <Route path="/book" component={Book} /> */}
                  <Route path="/cv" component={Cv} />
                 <Route path="/contact" component={Contact} /> 
                 <Route path="/mentionslegales" component={Mentionlegales}/>
                 <Route component={Page404} />         
            </Switch>
        </Router>
     
    </div>
  );
}

export default App;
