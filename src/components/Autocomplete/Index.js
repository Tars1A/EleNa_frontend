import React,{useState} from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { AutoContainer } from './AutocompleteComponents';
const LocationSearchInput = ({coordinates,setCoordinates,address, setAddress}) => {
    // const[address,setAddress] = useState("")
    // const[coordinates,setCoordinates] = useState({
    //     lat:null,
    //     lng:null
    // })
    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const ll = await getLatLng(results[0])
        console.log(ll)
        setAddress(value)
        setCoordinates(ll)
    }
    return (<>
    <p>lat: {coordinates.lat}</p>
    <p>long: {coordinates.lng}</p>
    <p>address: {address}</p>

     <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer', width: "20vw", borderRadius :"2px",
                  boxShadow:"0px 2px 5px grey"}
                  : { backgroundColor: '#ffffff', cursor: 'pointer' ,width: "20vw",borderRadius :"2px",
                  boxShadow:"0px 2px 5px grey"};
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

    </>
    );
}
export default LocationSearchInput 