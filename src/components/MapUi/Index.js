import React,{useState} from 'react'
import Banner from '../Autobanner/Index'
import MapComp from '../Map/Index'
import { MapUIContainer } from './MapUIcomponents'
import Navbar from '../Navbar/Index'
import Sidebar from '../sidebar'
const MapUI = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [pathCoordinates,setPathCoordinates] = useState([]);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <MapUIContainer>
            <Banner setPathCoordinates={setPathCoordinates}/>
            <MapComp pathCoordinates={pathCoordinates}/>
        </MapUIContainer>
    </div>
  )
}

export default MapUI