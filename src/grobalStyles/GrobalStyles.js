import React, { Component } from 'react'
import GoogleFontLoader from 'react-google-font-loader';


export default class GrobalStyles extends Component {
    render() {
        return (

            <GoogleFontLoader
                fonts={[
                {
                    font: 'Kosugi Maru',
                    weights: [400, '400i'],
                },
                {
                    font: 'Roboto Mono',
                    weights: [400, 700],
                },
                ]}
                subsets={['cyrillic-ext', 'greek']}
            />
        )
    }
}

