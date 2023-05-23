import React,{useState} from 'react'
import Navb from '../components/Nav/Index';
const Home = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
   <>
     <Navb>
    </Navb>
   </>
  )
}

export default Home