import React,{useState} from 'react'
import Banner from '../Autobanner/Index'
import MapComp from '../Map/Index'
import { MapUIContainer } from './MapUIcomponents'
const MapUI = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [pathCoordinates,setPathCoordinates] = useState([]);
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <Banner setPathCoordinates={setPathCoordinates}/>
        <MapComp pathCoordinates={pathCoordinates}/>
    </div>
  )
}

export default MapUI