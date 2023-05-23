import React,{useState} from 'react'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroH2,HeroP,HeroBttnWrapper,ArrowForward,ArrowRight} from './HeroComponents';
import Video from '../../videos/video3.mp4'
import { Button } from './ButtonElement';
import { Link,Routes,Route,NavLink } from 'react-router-dom';
import MapUI from '../MapUi/Index';
import { MdArrowForward, MdArrowRight } from 'react-icons/md';
 const Hero = () => {
    const [hover,setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <>
    <HeroContainer>
    <HeroBg>
        <VideoBg autoPlay loop muted src = {Video} type = 'video/mp4' /> 
    </HeroBg>
    <HeroContent>
      <HeroH1>EleNA</HeroH1>
      <HeroH2> A Elevation-based navigation system </HeroH2>
      <HeroP>
      Navigation systems optimize for the shortest or fastest route.
      However, they do not consider elevation gain. Let’s say you are hiking or biking from one location to another.
      You may want to literally go the extra mile if that saves you a couple thousand feet in elevation gain. Likewise,
      you may want to maximize elevation gain if you are looking for an intense yet time-constrained workout.
      </HeroP>
      <HeroBttnWrapper>
        <Button to = "/Search" onMouseEnter={onHover} onMouseLeave = {onHover} primary = "true" dark = "true"><NavLink to="/Search" style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'white' })}>
                            Search
                        </NavLink>{hover ?<ArrowForward/>:<ArrowRight/>}</Button>
        <Routes>
        <Route exact path="Search" element={<MapUI />} />
        </Routes>
      </HeroBttnWrapper>
    </HeroContent>
    </HeroContainer>
    </>
  );
};
export default Hero;
