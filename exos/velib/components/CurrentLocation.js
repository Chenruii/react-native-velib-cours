import React, { Component } from 'react';

class CurrentLocation extends Component {
    toggleFavori(){
        this.props.onFavoriToggle(this.props.address);
    },

    render(){

        var starClassName = "glyphicon glyphicon-star-empty";

        if(this.props.favori){
            starClassName = "glyphicon glyphicon-star";
        }

        return (
            <div className="col-xs-12 col-md-6 col-md-offset-3 current-location">
                <h4 id="save-location">{this.props.address}</h4>
                <span className={starClassName} onClick={this.toggleFavori} aria-hidden="true"></span>
            </div>
        );
    }
};