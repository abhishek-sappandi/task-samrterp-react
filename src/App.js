import React, { Component } from 'react'
import {BrowserRouter as Router , Route , Link } from 'react-router-dom'
//import Counter from './components/Counter'
import Home from './components/Home'
import CeatePost from './components/CeatePost'
import Published from './components/Published'

import Dummy from './components/Dummy'

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Link to='/' />

                    <Route path='/' component={Home}/>
                    <Route path='/create' component={CeatePost} />
                    <Route path='/list' component={Published} />
                </Router>
            </div>
        )
    }
}
export default App