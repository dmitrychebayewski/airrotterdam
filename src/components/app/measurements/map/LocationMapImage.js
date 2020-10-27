import React from 'react';
import {Map, Marker, Popup, TileLayer} from 'react-leaflet';
import {MONITOR} from "../../ApplicationMode";
import {
    isBrowser,
    isMobileOnly,
    isTablet  } from "react-device-detect";
import LeafletSearchHandler from "./handler/LeafletSearchHandler";


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

    customPopup(SearchInfo) {
        return (
            <Popup>
                <div>
                    {/*<p>{SearchInfo.latLng.toString().replace(',', ' , ')}</p>*/}
                    <p>{SearchInfo.info}</p>
                </div>
            </Popup>
        );
    }

    render() {
        const position = [this.props.coordinates.lat, this.props.coordinates.lng];
        return (
            <div className="w3-third w3-container">
                {(isBrowser || isTablet ) && !isMobileOnly && <h5>{this.props.coordinates.where}</h5>}
                <Map style={this.style()} center={position} zoom={this.state.zoom}>
                    {this.props.mode === MONITOR &&
                    <LeafletSearchHandler position="topright"
                                             provider="OpenStreetMap"
                                             providerOptions={{region: "nl"}}
                                             closeResultsOnClick={false}
                                             popup={this.customPopup}
                                             showPopup={true}
                                             caller={this}/>}
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
