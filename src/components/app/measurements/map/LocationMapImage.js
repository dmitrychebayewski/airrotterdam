import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

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
        const position = [this.props.coordinates.lat, this.props.coordinates.lng];
        return (
            <div className="w3-third w3-container">
                <h5>{this.props.coordinates.where}</h5>
                <Map style={this.style()} center={position} zoom={this.state.zoom}>
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            {this.props.coordinates.where}
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );
    }
}

export default LocationMapImage;
