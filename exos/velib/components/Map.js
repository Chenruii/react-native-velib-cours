import React, { Component } from 'react';

class Map extends Component {
    componentDidMount(){
        this.componentDidUpdate();
    }

    componentDidUpdate(){
        if(this.lastlatitudeitude == this.props.latitudeitude && this.lastlongitude == this.props.longitude){
            return;
        }

        this.lastlatitudeitude = this.props.latitudeitude;
        this.lastLongitude = this.props.longitude

        var map = new GMaps({
            el: '#map',
            latitude: this.props.latitude,
            longitude: this.props.longitude
        });
        map.addMarker({
            lat: this.props.lat,
            lng: this.props.lng
        });
    }
    render(){
        return (
            <div className="map-holder">
                <p>Loading...</p>
                <div id="map"></div>
            </div>
        );
    }
}