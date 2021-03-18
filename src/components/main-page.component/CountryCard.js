import React from "react";

export default class CountryCard extends React.Component {
    render() {
        let cardBackground = {
            backgroundImage: `url(${this.props.country.img})`
        };

        return (
            <div className="country__card" style={cardBackground}>
                <div className="countru__card-headers">
                    <h3>{this.props.country.name}</h3>
                    <h5>{this.props.country.capital}</h5> 
                </div>
            </div>
        )
    }

}