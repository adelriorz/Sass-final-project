
import React, {Component} from 'react'
import Header from './comps/header/Header'
import Navbar from './comps/navbar/Navbar'
import About from './comps/about/About'
import Subscription from './comps/subscription/Subscription'
import Faq from './comps/faq/Faq'
import Contact from './comps/contact/Contact'
import Footer from './comps/footer/Footer'

class App extends Component
{
    render()
    {
        return(
            <>
                <div className = '_header'>
                    <Header />
                </div>

                <Navbar />

                <div className = '_body'>
                    <About />
                    <Subscription />
                    <Faq />
                    <Contact />
                </div>

                <div className = '_footer'>
                    <Footer />
                </div>
            </>
        )
    }
}

export default App;
