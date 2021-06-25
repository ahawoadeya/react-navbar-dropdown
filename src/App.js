import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Destinations from './pages/Destinations'
import France from './pages/France'
import Spain from './pages/Spain'
import UnitedStates from './pages/UnitedStates'
import China from './pages/China'
import Artifacts from './pages/Artifacts'
import Contact from './pages/Contact'
import Tour from './pages/Tour'
import './App.css'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/destinations' component={Destinations}/>
                <Route path='/france' component={France}/>
                <Route path='/spain' component={Spain}/>
                <Route path='/united-states' component={UnitedStates}/>
                <Route path='/china' component={China}/>
                <Route path='/artifacts' component={Artifacts}/>
                <Route path='/contact-us' component={Contact}/>
                <Route path='/tour' component={Tour}/>
            </Switch>
        </Router>
    )
}

export default App
