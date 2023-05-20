import React from 'react'
import LocationSearchInput from '../Autocomplete/Index';
import { AutoContainer } from '../Autocomplete/AutocompleteComponents';
const Banner = () => {
  return (
    <div>
        <AutoContainer>
            <LocationSearchInput/>
            <LocationSearchInput/>
        </AutoContainer>
    </div>
  )
}

export default Banner