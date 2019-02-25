/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";
// import Geolocation from "react-geolocation";
// "pk.eyJ1Ijoic3RldjA3IiwiYSI6ImNqc2RkZm13ZTA2Y3o0OW1kb3N2eGo4bGoifQ.xzYNRvfOYN7zcoU8bnabJA"
export default class HelloWorld extends React.Component {
    render() {
        const mapStyle = {width: "640px", height: "480px"};

        window.onload = () => {
            navigator.geolocation.getCurrentPosition(function(location) {
                let latlng = new L.LatLng(
                        location.coords.latitude,
                        location.coords.longitude,
                    ),
                    mymap = L.map("mapid").setView(latlng, 13),
                    marker = L.marker(latlng).addTo(mymap);

                L.tileLayer(
                    "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
                    {
                        attribution:
                            'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://mapbox.com">Mapbox</a>',
                        maxZoom: 18,
                        id: "mapbox.streets",
                        accessToken:
                            "pk.eyJ1Ijoic3RldjA3IiwiYSI6ImNqc2RkZm13ZTA2Y3o0OW1kb3N2eGo4bGoifQ.xzYNRvfOYN7zcoU8bnabJA",
                    },
                ).addTo(mymap);
            });
        };

        return (
            <div>
                <h1>{"Hello, bro!"}</h1>
                <div id="mapid" style={mapStyle} />
            </div>
        );
    }
}
