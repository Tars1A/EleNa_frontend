import React, { Component } from "react";
import { Map, TileLayer, Polyline,Marker } from "react-leaflet";
import L from "leaflet";

const MapComp  = ({pathCoordinates}) => {
  const state = {
    lat: 42.4018896,
    lng: -72.5321144,
    zoom: 14,
    data: [
      
      {
        from_lat: "42.4018896",
        from_long: "-72.5321144",
        id: "132512",
        to_lat: "42.3754188",
        to_long: "",
      },
      
    ]
  };



    const position = [state.lat, state.lng];

    const from_lat = state.data.map(start => start.from_lat)
    const to_lat = state.data.map(to => to.to_lat)

    const from_long = state.data.map(start => start.from_long)
    const to_long = state.data.map(to => to.to_long)
    if (pathCoordinates.length === 0) {
      return (
        <div id="map">
          <Map
            style={{ height: "100vh",width:"100vw", zIndex:"1" }}
            center={position}
            zoom={state.zoom}
          >
            <TileLayer
               url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
             {/* <Marker position={pathCoordinates[0]} icon={L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
  })}></Marker>
             {state.data.map(({id, from_lat, from_long, to_lat, to_long}) => {
              return <Polyline key={id} positions={pathCoordinates} color={'red'}  />
            })} */}
       {/* <Marker position={pathCoordinates[pathCoordinates.length - 1 ]} icon={L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
  })}></Marker> */}
          </Map>
        </div>
      );
    }
    else return (
      <div id="map">
        <Map
          style={{ height: "100vh",width:"100vw", zIndex:"1" }}
          center={position}
          zoom={state.zoom}
        >
          <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
           <Marker position={pathCoordinates[0]} icon={L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
})}></Marker>
           {state.data.map(({id, from_lat, from_long, to_lat, to_long}) => {
            return <Polyline key={id} positions={pathCoordinates} color={'red'}  />
          })}
     <Marker position={pathCoordinates[pathCoordinates.length - 1 ]} icon={L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
})}></Marker>
        </Map>
      </div>
    );
}

export default MapComp;

/*
[
  [ 48.1423652, 16.3999045 ], [ 48.1458145, 16.3856390 ]
]

[from_lat, from_long], [to_lat, to_long]
*/