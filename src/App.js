import React from 'react'
// import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import { Switch ,Route } from 'react-router-dom';


// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

// import Navbar
import Navbar from './components/Navbar';

export default function App() {
  return (
    <article>
     <Navbar/>
     <Switch>

      {/* <Route exact path= "/"><Home/></Route> */}
        <Route exact path='/'  component={Home}/>
        <Route exact path= "/about"><About/></Route>
        <Route exact path= "/cocktail/:id"><SingleCocktail/></Route>
        <Route path= "*"><Error/></Route>
        {/* <Route render={()=> (<h1>Ooops page not found</h1>)}/> */}
      </Switch>
    </article>
    

  )
}
