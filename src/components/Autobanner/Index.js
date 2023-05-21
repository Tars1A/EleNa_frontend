import React from 'react'
import LocationSearchInput from '../Autocomplete/Index';
import { AutoContainer } from '../Autocomplete/AutocompleteComponents';
import axios from 'axios';

const Banner = () => {
  const submit = async (e) => {
    e.preventDefault()
    
    const start = []// lat - long
    const end = []// lat-long
    const maximize_minimize = ""
    const percent = 100
    const city = ""
    const state = ""
    const config = {
      credentials: false,
    }
    const bodyParameters = {
      "start": [42.401800, -72.531840],
      "end": [42.375381, -72.520500],
      "maximize_minimize": "maximize",
      "percent": 180,
      "city": "Amherst",
      "state": "MA"
    }
    
    const baseUrl = process.env.REACT_APP_ROOT_API || "http://127.0.0.1:5000"
    axios.post(`${baseUrl}/get_path`, bodyParameters, config)
    .then(res => res.json())
    .then(data => {
      const coordinates = data["coordinates"]
      const elevation = data["elevation"]
      const path_length = data["path_length"]
      const shortest_path_length = data["shortest_path_length"]

    })
    .catch(err => {console.log(err)});

  }
  return (
    <div>
        <AutoContainer>
            <LocationSearchInput/>
            <LocationSearchInput/>
            <button onClick={submit}>zzzzz</button>

        </AutoContainer>
    </div>
  )
}

export default Banner