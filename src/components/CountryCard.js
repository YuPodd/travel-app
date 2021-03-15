import React from "react";
import { Trans, useTranslation } from 'react-i18next'

export default class CountryCard extends React.Component {
    render() {
        let cardBackground = {
            backgroundImage: `url(${this.props.country.img})`
        };

        return (
            <div className="country__card" style={cardBackground}>
                <div className="countru__card-headers">
                    <h3><Trans>{this.props.country.name}</Trans></h3>
                    <h5><Trans>{this.props.country.capital}</Trans></h5> 
                </div>
            </div>
        )
    }

}