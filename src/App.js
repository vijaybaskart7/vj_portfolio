import React from 'react'

import { About, Header, Footer, Testimonials, Work, Skills } from './container'
import { Navbar } from './components'
// import Navbar from './components/Navbar/Navbar'
import './App.scss'
import Scene from './components/Scene'

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    )
}
export default App
