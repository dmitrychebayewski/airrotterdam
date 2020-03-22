import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

const altTitle = 'Rotterdam Theater Zuidplein';
const regionTitle = 'Region';

class LocationMapImage extends React.Component {
    state = {
        lat: 51.8883,
        lng: 4.4900,
        zoom: 13,
    };

    style() {
        return {
            height: '160px',
        }
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <div className="w3-third">
                <h5>{regionTitle}</h5>
                <Map style={this.style()} center={position} zoom={this.state.zoom} >
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                           {altTitle}
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default LocationMapImage;
