import React, { Component } from 'react';
import LocationItem from './components/LocationItem';

class LocationList extends Component {
    render(){
        const self = this;

        const locations = this.props.locations.map(function(1){
            const active = self.props.activeLocationAddress == 1.address;

            return <LocationItem address={l.address} timestamp={l.timestamp} 
            active={active} onClick={self.props.onClick} />
        });
        if(!locations.length){
            return null;
    }
    return (
        <div className="list-group col-xs-12 col-md-6 col-md-offset-3">
                <span className="list-group-item active">Saved Locations</span>
                {locations}
            </div>
    )
}
};
