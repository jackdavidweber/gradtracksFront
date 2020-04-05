import React, { Component } from 'react';
import { Map, CircleMarker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Geocode from "react-geocode";

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
//     minLat: -180,
//     maxLat: 180,
//     minLong: -180,
//     maxLong: 180
// }

class Testmap extends Component {

  render() {
    var centerLat = (this.props.graphData.minLat + this.props.graphData.maxLat) / 2;
    var distanceLat = this.props.graphData.maxLat - this.props.graphData.minLat;
    var bufferLat = distanceLat * 0.05;
    var centerLong = (this.props.graphData.minLong + this.props.graphData.maxLong) / 2;
    var distanceLong = this.props.graphData.maxLong - this.props.graphData.minLong;
    var bufferLong = distanceLong * 0.15;
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Alumni Distribution</h3>
        <Map
          style={{ height: "480px", width: "100%" }}
          zoom={1}
          center={[centerLat, centerLong]}
          bounds={[
            [this.props.graphData.minLat - bufferLat, this.props.graphData.minLong - bufferLong],
            [this.props.graphData.maxLat + bufferLat, this.props.graphData.maxLong + bufferLong]
          ]}
        >
          <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {this.props.graphData.city.map((city, k) => {

            return (

              <CircleMarker
                key={k}
                center={[city["coordinates"][1], city["coordinates"][0]]}
                radius={2*Math.log(city["population"]/10)}
                fillOpacity={0.5}
                stroke={false}
              />)
          })
          }
        </Map>
      </div>
    );
  }
}

export default Testmap;
