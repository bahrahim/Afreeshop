import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home'
import NotFound from './Pages/NotFound';
import Contact from './Pages/Contact';
import Produits from './Pages/Produits';
import Services from './Pages/Services';
import About from './Pages/About';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Produits" exact component={Produits} />
        <Route path="/Services" exact component={Services}/>
        <Route path="/About"   exact component={About} />
        <Route path="/Contact" exact component={Contact} />
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;