import React, { Component } from 'react'
import { WebView } from 'react-native-webview'

export default class Screen1 extends Component {
    render() {
        return (
            <WebView
                source={{
                    uri: 'https://iniadfes.com/03coming/'
                }}>
            </WebView>
        )
    }
}
