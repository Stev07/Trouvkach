/* becodeorg/trouvkach
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 15/02/2019
 */

import * as React from "react";
import axios from "axios";
import jeyoDistans from "jeyo-distans";

export default class HelloWorld extends React.Component {
    constructor() {
        super();
        this.state = {
            terminal: [],
            loading: false,
        };
    }

    componentDidMount = () => {
        axios
            .get(`api/terminals`)
            .then(res => {
                const terminal = Object.values(res.data.terminals[0]);

                this.setState({terminal: terminal, loading: true});
                console.log("Got it !");
            })
            .catch(err => {
                console.log("Something went wrong : ", err.message);
            });
    };

    render() {
        const mapStyle = {width: "640px", height: "480px"};

        window.onload = () => {
            const oLiege = {
                latitude: 50.633,
                longitude: 5.567,
            };

            const oBruxelles = {
                latitude: 50.846686,
                longitude: 4.352425,
            };

            console.log(jeyoDistans(oLiege, oBruxelles));
            navigator.geolocation.getCurrentPosition(location => {
                let latlng = new L.LatLng(
                        location.coords.latitude,
                        location.coords.longitude,
                    ),
                    mymap = L.map("mapid").setView(latlng, 13),
                    // eslint-disable-next-line no-unused-vars
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

        const terminals = this.state.terminal.map(element => {
            return (
                <div>
                    <ul>
                        <li>
                            {element.address} {element.longitude}{" "}
                            {element.latitude}
                        </li>
                    </ul>
                </div>
            );
        });

        return (
            <div>
                <h1>{"Hello, bro!"}</h1>
                <div id="mapid" style={mapStyle} />
                <p>{terminals}</p>
            </div>
        );
    }
}
