import React, { useState } from "react";
import LocationSearchInput from "../Autocomplete/Index";
import { AutoContainer } from "../Autocomplete/AutocompleteComponents";
import Demo1 from "../Radio/Index";
import axios from "axios";
// import { Button } from "./ButtonElement";
const Banner = ({setPathCoordinates}) => {
  const [startCoordinates, setStartCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [endCoordinates, setEndCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [startAddress, setStartAddress] = useState("")
  const [endAddress, setEndAddress] = useState("")

  const [maximizeMinimize, setMaximizeMinimize] = useState("")
  const [percentage, setPercentage] = useState(0);
  const [pathLength, setPathLength] = useState(0);
  const [shortestPathLength, setShortestPathLength] = useState(0);
  const [elevation, setElevation] = useState(0);
  const onChangeRadio = (e) => {
    const val = e.target.value
    setMaximizeMinimize(val);
  }

  const onChangePercent = (e) => {
    const val = e.target.value 
    setPercentage(val);
  }

  const submit = async (e) => {
    e.preventDefault();

    if (startAddress === "" || endAddress === "") {
      alert("Please enter start address")
    } 
    const startAddressSplit = startAddress.split(",");
    const endAddressSplit = endAddress.split(",");
    console.log(startAddressSplit)
    const startCountry = startAddressSplit[(startAddressSplit.length) - 1].trim()
    const startState = startAddressSplit[(startAddressSplit.length) - 2].trim()
    const startCity = startAddressSplit[(startAddressSplit.length) - 3].trim()

    const endCountry = endAddressSplit[(endAddressSplit.length) - 1].trim()
    const endState = endAddressSplit[(endAddressSplit.length) - 2].trim()
    const endCity = endAddressSplit[(endAddressSplit.length) - 3].trim()

    console.log(startState)
    console.log(endState)
    if (startCountry !== endCountry 
      || startState !== endState 
      || startCity !== endCity ) {
        alert("Please select start and end addresses within the same city!")
    } 
    else if (percentage < 100) {
      alert("Please select a percentage value greater than or equal to 100")
    }
    else if (maximizeMinimize === ""){
      alert("Please select maximize or minimize")
    }
    else {
      const config = {
        // credentials: false,

      };
      const bodyParameters = {
        start: [startCoordinates.lat, startCoordinates.lng],
        end: [endCoordinates.lat, endCoordinates.lng],
        maximize_minimize: maximizeMinimize.toLowerCase(),
        percent: percentage,
        city: startCity,
        state: startState,
      };
  
      const baseUrl =  "http://127.0.0.1:5000";
      axios
        .post(`${baseUrl}/get_path`, bodyParameters, config)
        .then((res) => {
          const {data} = res;
          const coordinates = data["coordinates"];
          setPathCoordinates(coordinates)
          const total_elevation = data["elevation"];
          setElevation(total_elevation)
          const path_length = data["path_length"];
          setPathLength(path_length)
          const shortest_path_length = data["shortest_path_length"];
          setShortestPathLength(shortest_path_length)
          console.log(coordinates)
        })
        .catch((err) => {
          console.log(err);
        });
    }

  };
  return (
    <div>
      <AutoContainer>
        <LocationSearchInput
          coordinates={startCoordinates}
          setCoordinates={setStartCoordinates}
          address={startAddress}
          setAddress={setStartAddress}
        />
        <LocationSearchInput
          coordinates={endCoordinates}
          setCoordinates={setEndCoordinates}
          address={endAddress}
          setAddress={setEndAddress}
        />
        {/* <Demo1></Demo1> */}
        <div onChange={onChangeRadio}>
          <input type="radio" value="Maximize" name="path" /> Maximize
          <input type="radio" value="Minimize" name="path" /> Minimize
        </div>
        <div>
          X%? 
        </div>
        <div onChange={onChangePercent}>
          <input type="number"/>
        </div>
        <button onClick={submit}>Find Route!</button>
        <div>Shortest Path Length: {shortestPathLength}</div>
        <div>Path Length: {pathLength}</div>
        <div>Elevation Gained: {elevation}</div>
      </AutoContainer>
    </div>
  );
};

export default Banner;
