import React, { Component } from 'react';
import LocationItem from './components/LocationItem';

class LocationItem extends Component {
    handleClick(){
        this.props.onClick(this.props.address);
    }

    render(){
        const cxn = "list-group-item";

        if(this.props.active){
            cxn += " active-location";
        }
    return (
        <a className={cxn} onClick={this.handleClick}>
                {this.props.address}
                <span className="createdAt">{ moment(this.props.timestamp).fromNow() }</span>
                <span className="glyphicon glyphicon-menu-right"></span>
            </a>
    )
}
};
