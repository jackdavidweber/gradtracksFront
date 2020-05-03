import React, { Component } from 'react';
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Popup from "reactjs-popup";
//import Geocode from "react-geocode";

// Geocode.fromAddress("Eiffel Tower").then(
//   response => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//   },
//   error => {
//     console.error(error);
//   }
// );
//
// function GetLat() {
//   Geocode.fromAdress===
// }

// const data = {
//     city: [
//       // [Longitude, Latitude]
//         { "name": "San Francisco", "coordinates": [-122.419418, 37.774929], "population": 50000 },
//         { "name": "Los Angeles", "coordinates": [-118.243683, 34.052235], "population": 500 },
//         { "name": "Austin", "coordinates": [-97.743057, 30.267153], "population": 200 },
//         { "name": "Seattle", "coordinates": [-122.332069, 47.606209], "population": 2000 },
//         { "name": "New York City", "coordinates": [-74.005974, 40.712776], "population": 7000 },
//         { "name": "Palo Alto", "coordinates": [-122.16067, 37.444786], "population": 250 },
//         { "name": "San Jose", "coordinates": [-121.887082, 37.337207], "population": 580 },
//         { "name": "Washingto D.C.", "coordinates": [-77.0312812, 38.8954381], "population": 3000 },
//
//     ],
// }

class Testmap extends Component {

  render() {
    var centerLat = (-180 + 180) / 2;
    var distanceLat = 180 - (-180);
    var bufferLat = distanceLat * 0.05;
    var centerLong = (-180 + 180) / 2;
    var distanceLong = 180 - (-180);
    var bufferLong = distanceLong * 0.15;

    if (!this.props.graphData[1]) {
      return (<h1> Not enough data to display </h1>);
    }
    return (
      <div>

        <Map
          style={{ height: "480px", width: "100%" }}
          zoom={1.5}

          center={[30, 0]}

        >
          <TileLayer url="https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWVoYWtzYWNoZGV2YSIsImEiOiJjaXF2YTNvYWIwMDA1ZmttZzBsNTM1NXV1In0.-SA7eLZOeeYkVPG7Jek2ug"/>

          {this.props.graphData.city.map((city, k) => {

            return (

              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={2*Math.log(city["population"]*10)}
                onMouseOver={(e) => e.target.bindPopup('city: ' + city["name"]  + ' ~ Number of Alumni: ' + city["population"]).openPopup()}
                onMouseOut={(e) => e.target.closePopup()}
                fillColor='blue'
                fillOpacity={0.75}
                stroke={false}
              >
</CircleMarker>

            )
          })
          }
        </Map>
      </div>
    );
  }
}

export default Testmap;
