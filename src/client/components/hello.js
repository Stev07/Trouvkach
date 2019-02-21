/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";
import Geolocation from "react-geolocation";

export default class HelloWorld extends React.Component {
    render() {
        const mapStyle = {width: "640px", height: "480px"};

        window.onload = function() {
            console.log("Page chargée!");
            let mymap = L.map("mapid").setView([51.505, -0.09], 13);

            L.tileLayer(
                "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
                {
                    attribution:
                        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: "mapbox.streets",
                    accessToken:
                        "pk.eyJ1Ijoic3RldjA3IiwiYSI6ImNqc2RkZm13ZTA2Y3o0OW1kb3N2eGo4bGoifQ.xzYNRvfOYN7zcoU8bnabJA",
                },
            ).addTo(mymap);
        };
        return (
            <div>
                <h1>{"Hello, bro!"}</h1>
                <Geolocation
                    render={({
                        position: {coords: {latitude, longitude} = {}} = {},
                        error,
                    }) => (
                        <div>
                            {error && <div>{error.message}</div>}
                            <pre>
                                {"latitude:"} {latitude}
                                {"longitude:"} {longitude}
                            </pre>
                        </div>
                    )}
                />
                <div id="mapid" style={mapStyle} />
            </div>
        );
    }
}
