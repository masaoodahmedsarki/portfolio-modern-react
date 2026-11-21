
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Home from './pages/Home'

import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white">

      <Navbar />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
