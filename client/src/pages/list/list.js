import React, { Component, useEffect, useState } from 'react';
import Ad from '../../../src/components/ad/Ad'
import Navigation from "../../../src/components/core/Navigation/Navigation"
import './list.css'
export default class list extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ads: []
        }
    }

    componentDidMount() {
        fetch('/ad-list')
            .then(response => response.json())
            .then(data => this.setState({ ads: data }));
    }

    // <div key={ad.id}>{ad.title}</div>

    render() {
        return (
            <div className="page-list">
                <Navigation />
                <div className="list_ads">
                    {this.state.ads.map(ad => (
                        <ul key={ad.id}>
                            <Ad id={ad.id} title={ad.title} imageUrl={ad.imageUrl} description={ad.description} userId={ad.userId}></Ad>
                        </ul>
                    ))}
                </div>
            </div>
        )
    }


}