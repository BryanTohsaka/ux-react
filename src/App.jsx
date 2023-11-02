import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import AnimateApp from './components/AnimateApp'
import { ScrollRestoration } from 'react-router-dom'


function App() {

  return (
    <AnimateApp>
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Contact />
    <ScrollRestoration />
    </AnimateApp>
    
  )
}

export default App
