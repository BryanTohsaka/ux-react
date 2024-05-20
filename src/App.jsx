import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import AnimateApp from './components/AnimateApp'
import { ScrollRestoration } from 'react-router-dom'
import Blog from './components/Blog'


function App() {

  return (
    <AnimateApp>
    <Navbar />
    <Hero />
    <About />
    <Work />
    <Blog />
    <Contact />
    <ScrollRestoration />
    </AnimateApp>
    
  )
}

export default App
