import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/Navbar.jsx'
import BodyHome from './components/BodyHome.jsx'
import Footer from './components/Footer.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <BodyHome />
    <div className="container mx-auto">
    <App />
    </div>
    <Footer />
  </StrictMode>,
)
