import React,{useState} from 'react'
import Banner from '../Autobanner/Index'
import MapComp from '../Map/Index'
import { MapUIContainer } from './MapUIcomponents'
import Navbar from '../Navbar/Index'
import Sidebar from '../sidebar'
const MapUI = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <MapUIContainer>
            <Sidebar isOpen = {isOpen} toggle = {toggle}/>
            <Navbar toggle = {toggle}/>
            <Banner />
            <MapComp />
        </MapUIContainer>
    </div>
  )
}

export default MapUI