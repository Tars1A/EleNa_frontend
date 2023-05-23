import React,{useState} from 'react'
import Navb from '../components/Nav/Index';
import Sidebar from '../components/sidebar';
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
   <>
   <Sidebar isOpen = {isOpen} toggle = {toggle}/>
   <Navb  isOpen = {isOpen} toggle = {toggle}/>
   {/* <MapUI></MapUI> */}
   </>
  )
}

export default Home