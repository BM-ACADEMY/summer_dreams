import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroCarousal from './Components/HeroCarousal';
import About from './Components/About';
import Amenities from './Components/Amenities';
import Rooms from './Components/Rooms';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer';
import InstagramVideoCard from './Components/InstagramVideoCard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />
      <HeroCarousal />
      <About />
      <Amenities />
      <Rooms />
      <Testimonial />
      <InstagramVideoCard />
    <Footer />
    </>
  )
}

export default App
