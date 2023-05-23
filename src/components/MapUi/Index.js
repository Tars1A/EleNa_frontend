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
        <MapUIContainer>
            <MapComp pathCoordinates={pathCoordinates}/>
        </MapUIContainer>
    </div>
  )
}

export default MapUI