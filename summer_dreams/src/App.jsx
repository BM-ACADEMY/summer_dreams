import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroCarousal from './Components/Herocarousel';
import About from './Components/About';
import Amenities from './Components/Amenities';
import Rooms from './Components/Rooms';
import Footer from './Components/Footer';
import InstagramVideoCard from './Components/InstagramVideoCard';
import Carousel from './Components/Carousel';
import Banner from './Components/BannerComponent';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Header />
      <HeroCarousal />
      <About />
      <Amenities />
      <Rooms />
      <Banner />
      <Carousel />
      <InstagramVideoCard />
    <Footer />
    </>
  )
}

export default App
