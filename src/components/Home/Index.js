import React,{useState} from 'react'
import Hero from "../Hero/Index"
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
   <>
   {/* <Sidebar isOpen = {isOpen} toggle = {toggle}/>
    <Navb isOpen = {isOpen} toggle = {toggle} /> */}
  <Hero />  
  {/* <MapUI/> */}
    {/* <LocationSearchInput />
     {/* < MapComp /> */}
   </>
  )
}

export default Home