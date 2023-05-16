import React,{useState} from 'react'
import Hero from '../components/Hero/Index';
import Navbar from '../components/Navbar/Index'
import Sidebar from '../components/sidebar'
import MapComp from '../components/Map/Index'
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
   <>
   <Sidebar isOpen = {isOpen} toggle = {toggle}/>
    <Navbar toggle = {toggle}/>
    {/* <Hero /> */}
    < MapComp />
   </>
  )
}

export default Home